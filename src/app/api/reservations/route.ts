import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { SITE } from "@/lib/data";

// Temporary deployment diagnostic — visit /api/reservations in the browser.
// REMOVE this handler once the deployment is verified.
export async function GET() {
  const env = {
    DATABASE_URL: Boolean(process.env.DATABASE_URL),
    POSTGRES_URL: Boolean(process.env.POSTGRES_URL),
    POSTGRES_PRISMA_URL: Boolean(process.env.POSTGRES_PRISMA_URL),
  };

  try {
    const count = await prisma.reservation.count();
    return NextResponse.json({ ok: true, env, reservations: count });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        env,
        prismaError:
          error instanceof Error ? error.message.slice(0, 500) : String(error),
      },
      { status: 500 }
    );
  }
}

const reservationSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().toLowerCase().email("Invalid email").max(200),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(20)
    .regex(/^[+0-9()\-\s.]+$/, "Invalid phone number"),
  city: z
    .string()
    .refine((value) => SITE.cities.includes(value), "Unknown city"),
  experienceType: z.string().trim().min(3).max(100),
  guests: z.string().trim().min(1).max(50),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  // Honeypot — real users never see or fill this field.
  company: z.string().max(0).optional().or(z.literal("")),
});

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Malformed request body." },
      { status: 400 }
    );
  }

  const parsed = reservationSchema.safeParse(body);
  if (!parsed.success) {
    // Silently accept honeypot submissions so bots think they succeeded.
    if (parsed.error.issues.some((issue) => issue.path[0] === "company")) {
      return NextResponse.json({ ok: true }, { status: 201 });
    }
    return NextResponse.json(
      {
        ok: false,
        error: "Please review the highlighted fields and try again.",
        issues: parsed.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      },
      { status: 422 }
    );
  }

  const { name, email, phone, city, experienceType, guests, date, notes } =
    parsed.data;

  const preferredDate = new Date(`${date}T00:00:00.000Z`);
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  if (Number.isNaN(preferredDate.getTime()) || preferredDate < today) {
    return NextResponse.json(
      { ok: false, error: "Preferred date must be today or in the future." },
      { status: 422 }
    );
  }

  try {
    const reservation = await prisma.reservation.create({
      data: {
        name,
        email,
        phone,
        city,
        experienceType,
        guests,
        preferredDate,
        notes: notes || null,
      },
    });

    return NextResponse.json(
      {
        ok: true,
        reference: `MRD-${reservation.id.slice(-8).toUpperCase()}`,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[reservations] Failed to store reservation:", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We couldn't save your request just now. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
