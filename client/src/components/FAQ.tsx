import { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "How does online therapy work?",
    answer: "Online therapy works through secure video sessions, phone calls, or messaging with licensed therapists. You'll book appointments through our platform, receive reminders, and connect at the scheduled time. All communications are encrypted and HIPAA-compliant to protect your privacy."
  },
  {
    question: "Is online therapy effective?",
    answer: "Yes, research shows online therapy can be as effective as in-person therapy for many conditions. Studies have demonstrated comparable outcomes for issues like depression, anxiety, and PTSD. The convenience and accessibility often lead to better consistency in attending sessions, which can improve results."
  },
  {
    question: "How much does therapy cost?",
    answer: "Our therapy services range from $80-150 per session, depending on the type of therapy and therapist experience. We offer subscription plans that provide discounted rates for regular sessions. Some insurance plans may provide coverage - we can help you verify your benefits. Financial assistance programs are available for those who qualify."
  },
  {
    question: "How do I choose the right therapist?",
    answer: "Our platform uses a matching system that considers your preferences, needs, and goals. You can browse therapist profiles, read reviews, and filter by specialties. We offer a free initial consultation with potential therapists to ensure a good fit before committing. If you're not satisfied, we'll help you find a better match at no additional cost."
  },
  {
    question: "Is my information kept confidential?",
    answer: "Absolutely. We take privacy very seriously. All our communications are encrypted and HIPAA-compliant. Our therapists follow strict confidentiality protocols, and your information is never shared without your explicit permission except in legally mandated situations (such as risk of harm to self or others). You can review our detailed privacy policy for more information."
  },
  {
    question: "How long are therapy sessions?",
    answer: "Standard individual therapy sessions are 50 minutes, which is the clinical hour. Group therapy sessions typically run 90 minutes. We also offer extended sessions of 75 minutes for certain therapy types or intensive work. Brief check-in sessions of 25 minutes are available for established clients. Your therapist will recommend the appropriate session length based on your needs."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            Find answers to common questions about our therapy services and platform.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#F0E6D2] rounded-xl p-6 shadow-sm border-none"
              >
                <AccordionTrigger className="text-lg font-heading font-semibold text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="mt-4 text-neutral-700">
                  <p>{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
