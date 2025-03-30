import { useState } from "react";
import { Star } from "lucide-react";

type Therapist = {
  id: string;
  name: string;
  title: string;
  imageSrc: string;
  rating: number;
  reviewCount: number;
  availability: string[];
  specialties: string[];
  experience: string;
  approaches: string;
};

interface TherapistCardProps {
  therapist: Therapist;
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img 
          src={therapist.imageSrc} 
          alt={therapist.name} 
          className="w-full h-64 object-cover"
        />
        <div className={`absolute inset-0 bg-primary bg-opacity-80 text-white p-6 flex flex-col justify-center transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <p className="mb-3">{therapist.experience}</p>
          <p className="mb-3">{therapist.approaches}</p>
          <div className="flex justify-center mt-2 flex-wrap gap-2">
            {therapist.specialties.map((specialty, index) => (
              <span key={index} className="px-3 py-1 bg-white text-primary rounded-full text-sm">
                {specialty}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold text-primary mb-1">{therapist.name}</h3>
        <p className="text-[#8E6C88] mb-3">{therapist.title}</p>
        <div className="flex items-center mb-3">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5" fill="currentColor" />
            ))}
          </div>
          <span className="text-neutral-500 ml-2">{therapist.reviewCount} reviews</span>
        </div>
        <p className="text-sm text-neutral-700">
          Available for: {therapist.availability.join(", ")}
        </p>
      </div>
    </div>
  );
}
