import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BookingForm from "@/components/BookingForm";
import Experiences from "@/components/Experiences";
import Amenities from "@/components/Amenities";
import Locations from "@/components/Locations";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Marquee />
      <BookingForm />
      <Experiences />
      <Amenities />
      <Locations />
      <WhyUs />
      <Gallery />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
