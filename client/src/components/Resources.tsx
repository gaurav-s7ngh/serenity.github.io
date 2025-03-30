import ResourceCard from "./shared/ResourceCard";
import { Button } from "@/components/ui/button";
import { resources } from "@/lib/therapy-data.tsx";

export default function Resources() {
  return (
    <section id="resources" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Resource Library</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Explore our collection of resources to support your mental health journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-4 text-neutral-700">Full access to our resource library will be available once you've joined.</p>
          <Button asChild>
            <a href="#waitlist">Join Our Waitlist</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
