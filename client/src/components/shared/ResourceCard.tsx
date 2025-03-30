import { ChevronRight } from "lucide-react";

type Resource = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
};

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105">
      <div className="h-48 bg-[#F0E6D2] flex items-center justify-center">
        {resource.icon}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-primary mb-3">{resource.title}</h3>
        <p className="text-neutral-700 mb-5">{resource.description}</p>
        <a href="#" className="inline-flex items-center text-[#8E6C88] font-medium">
          {resource.actionText}
          <ChevronRight className="h-4 w-4 ml-1" />
        </a>
      </div>
    </div>
  );
}
