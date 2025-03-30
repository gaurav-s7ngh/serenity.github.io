import { useEffect } from "react";
import TherapyServiceCard from "./shared/TherapyServiceCard";
import { therapyServices } from "@/lib/therapy-data.tsx";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Our Therapy Services</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            We offer a variety of therapeutic approaches tailored to your unique needs and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapyServices.map((service, index) => (
            <TherapyServiceCard 
              key={service.id}
              service={service}
              delayIndex={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
