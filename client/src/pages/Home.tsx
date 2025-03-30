import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import Chatbot from "@/components/Chatbot";
import Booking from "@/components/Booking";
import Therapists from "@/components/Therapists";
import FAQ from "@/components/FAQ";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Waitlist from "@/components/Waitlist";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBadges />
        <Services />
        <Chatbot />
        <Booking />
        <Therapists />
        <FAQ />
        <Resources />
        <Contact />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
