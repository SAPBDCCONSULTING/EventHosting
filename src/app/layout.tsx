import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Meridian — Private Corporate Event Venues",
    template: "%s — The Meridian",
  },
  description:
    "An invitation-only collection of venues for CXO summits, international delegations, brand launches and gala evenings. Gurugram · Mumbai · Bengaluru · Dubai.",
  keywords: [
    "corporate event venue",
    "CXO summit venue",
    "private event space",
    "brand launch venue",
    "board meeting venue",
    "gala dinner venue",
    "executive offsites",
    "Gurugram event venue",
    "Mumbai event venue",
    "Bengaluru event venue",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "The Meridian",
    title: "The Meridian — Private Corporate Event Venues",
    description:
      "Invitation-only venues for CXO summits, international delegations, brand launches and gala evenings.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Meridian — Private Corporate Event Venues",
    description:
      "Invitation-only venues for CXO summits, international delegations, brand launches and gala evenings.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventVenue",
  name: "The Meridian",
  description:
    "An invitation-only collection of venues for CXO summits, international delegations, brand launches and gala evenings.",
  url: siteUrl,
  telephone: "+91 98100 00000",
  email: "reserve@themeridian.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "One Meridian Tower, Golf Course Road",
    addressLocality: "Gurugram",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-ivory font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
