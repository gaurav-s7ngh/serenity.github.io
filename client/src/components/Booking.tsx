import { Button } from "@/components/ui/button";

type CalendarDay = {
  day: number;
  slots: number;
};

const calendarDays: CalendarDay[] = [
  { day: 10, slots: 3 },
  { day: 11, slots: 5 },
  { day: 12, slots: 2 },
  { day: 13, slots: 4 },
  { day: 14, slots: 6 },
  { day: 15, slots: 2 },
  { day: 16, slots: 3 },
];

export default function Booking() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Simple Booking Process</h2>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto">
            We've made scheduling therapy sessions as seamless as possible, so you can focus on what matters most - your wellbeing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: 1,
              title: "Choose Your Therapy",
              description: "Select from our range of therapy options tailored to different needs and preferences."
            },
            {
              step: 2,
              title: "Find Your Therapist",
              description: "Browse profiles and choose a therapist that's the right fit for your unique situation."
            },
            {
              step: 3,
              title: "Schedule a Session",
              description: "Book a time that works for you using our simple calendar interface."
            }
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-20 h-20 rounded-full bg-[#F0E6D2] flex items-center justify-center text-primary text-3xl font-bold mx-auto mb-6">
                {item.step}
              </div>
              <h3 className="text-xl font-heading font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-neutral-700">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 bg-[#F0E6D2] rounded-xl shadow-md max-w-4xl mx-auto">
          <h3 className="text-xl font-heading font-semibold text-primary mb-6 text-center">Preview Our Booking Calendar</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2 mb-6">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <div key={day} className="text-center font-medium text-neutral-500">{day}</div>
            ))}
            
            {calendarDays.map((day) => (
              <button
                key={day.day}
                className="bg-white rounded p-2 text-center cursor-pointer hover:bg-primary hover:text-white transition"
              >
                <div className="font-medium">{day.day}</div>
                <div className="text-sm text-neutral-500">{day.slots} slots</div>
              </button>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-neutral-700 mb-4">Our full booking system will be available once you've joined our platform.</p>
            <Button asChild>
              <a href="#waitlist">Join Waitlist for Early Access</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
