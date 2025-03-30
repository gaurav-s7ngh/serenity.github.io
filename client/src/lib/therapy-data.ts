import { 
  BookOpen, Film, Calendar, 
  BarChart3, MessageSquare, MusicIcon, 
  Smartphone, Users, Smile, Heart 
} from "lucide-react";

export const therapyServices = [
  {
    id: "music-therapy",
    title: "Music Therapy",
    description: "Using the power of music to address emotional, cognitive, and social needs of individuals.",
    icon: <MusicIcon className="h-10 w-10 text-primary" />
  },
  {
    id: "online-therapy",
    title: "Online Therapy",
    description: "Convenient and private therapy sessions from the comfort of your home, accessible on any device.",
    icon: <Smartphone className="h-10 w-10 text-primary" />
  },
  {
    id: "group-therapy",
    title: "Group Therapy",
    description: "Share experiences and learn from others in a safe, guided environment with a licensed therapist.",
    icon: <Users className="h-10 w-10 text-primary" />
  },
  {
    id: "art-therapy",
    title: "Art Therapy",
    description: "Express yourself through creative means to explore feelings, reconcile emotional conflicts, and foster self-awareness.",
    icon: <Smile className="h-10 w-10 text-primary" />
  },
  {
    id: "individual-therapy",
    title: "Individual Therapy",
    description: "One-on-one sessions focused on your specific needs, goals, and challenges with personalized attention.",
    icon: <MessageSquare className="h-10 w-10 text-primary" />
  },
  {
    id: "couples-therapy",
    title: "Couples Therapy",
    description: "Improve communication, resolve conflicts, and strengthen your relationship with professional guidance.",
    icon: <Heart className="h-10 w-10 text-primary" />
  }
];

export const therapists = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: "Clinical Psychologist",
    imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    reviewCount: 98,
    availability: ["Online sessions", "Group therapy"],
    specialties: ["CBT", "Anxiety", "Mindfulness"],
    experience: "Specializes in anxiety, depression, and stress management with 8+ years of experience.",
    approaches: "Uses cognitive-behavioral therapy and mindfulness approaches."
  },
  {
    id: "dr-michael-chen",
    name: "Dr. Michael Chen",
    title: "Marriage & Family Therapist",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    reviewCount: 127,
    availability: ["Online sessions", "Couples therapy"],
    specialties: ["Family", "Relationships", "Cultural"],
    experience: "Specializes in relationship issues, family therapy, and cultural adjustment with 12+ years of experience.",
    approaches: "Employs solution-focused and narrative therapy approaches."
  },
  {
    id: "amelia-rodriguez",
    name: "Amelia Rodriguez",
    title: "Art Therapist",
    imageSrc: "https://images.unsplash.com/photo-1548366086-7f1b76106622?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    rating: 5,
    reviewCount: 83,
    availability: ["Art therapy", "Individual sessions"],
    specialties: ["Art Therapy", "Trauma", "PTSD"],
    experience: "Specializes in art therapy, trauma recovery, and PTSD with 6+ years of experience.",
    approaches: "Uses expressive arts therapy and somatic experiencing techniques."
  }
];

export const resources = [
  {
    id: "anxiety-guide",
    title: "Anxiety Management Guide",
    description: "Learn effective techniques for managing anxiety in everyday situations.",
    icon: <BookOpen className="h-16 w-16 text-primary opacity-80" />,
    actionText: "Read more"
  },
  {
    id: "meditation-basics",
    title: "Meditation Basics",
    description: "A collection of guided meditations and mindfulness exercises for beginners.",
    icon: <Film className="h-16 w-16 text-primary opacity-80" />,
    actionText: "Listen"
  },
  {
    id: "self-care-calendar",
    title: "Self-Care Calendar",
    description: "30-day calendar with daily self-care activities to improve mental wellbeing.",
    icon: <Calendar className="h-16 w-16 text-primary opacity-80" />,
    actionText: "Download"
  }
];
