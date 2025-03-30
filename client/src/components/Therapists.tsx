import TherapistCard from "./shared/TherapistCard";
import { Button } from "@/components/ui/button";
import { therapists } from "@/lib/therapy-data.tsx";

export default function Therapists() {
  return (
    <section id="therapists" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Meet Our Therapists</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Our platform features licensed, experienced therapists who are passionate about helping you on your journey to mental wellness.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist) => (
            <TherapistCard key={therapist.id} therapist={therapist} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <a href="#waitlist">Join Waitlist to Access All Therapists</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
