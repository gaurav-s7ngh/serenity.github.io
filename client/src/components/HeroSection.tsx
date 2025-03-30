import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[#F0E6D2] to-[#F8F2E6] overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
            Your Journey to Mental Wellbeing Starts Here
          </h1>
          <p className="text-lg md:text-xl text-neutral-900 mb-8 leading-relaxed">
            Discover a new approach to therapy that combines traditional methods with modern technology. Our platform connects you with qualified therapists and provides tools for your mental wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild size="lg" className="px-8 shadow-md">
              <a href="#chatbot">Try Our Assessment</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-2 border-primary px-8 shadow-md">
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8E6C88] opacity-10 rounded-full -mr-20 -mb-20"></div>
      <div className="absolute top-0 left-0 w-40 h-40 bg-primary opacity-10 rounded-full -ml-10 -mt-10"></div>
    </section>
  );
}
