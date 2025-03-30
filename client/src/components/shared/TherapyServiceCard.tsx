import { ChevronRight } from "lucide-react";

type TherapyService = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface TherapyServiceCardProps {
  service: TherapyService;
  delayIndex: number;
}

export default function TherapyServiceCard({ service, delayIndex }: TherapyServiceCardProps) {
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105 animate-slide-up"
      style={{ animationDelay: `${delayIndex * 0.1}s` }}
    >
      <div className="h-48 bg-[#F0E6D2] flex items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-primary bg-opacity-20 flex items-center justify-center">
          {service.icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-primary mb-3">{service.title}</h3>
        <p className="text-neutral-700 mb-5">{service.description}</p>
        <a href="#" className="inline-flex items-center text-[#8E6C88] font-medium">
          Learn more
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
