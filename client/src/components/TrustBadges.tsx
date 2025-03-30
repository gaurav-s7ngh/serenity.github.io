export default function TrustBadges() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-neutral-500 font-medium">Trusted by leading organizations</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {[1, 2, 3, 4].map((org) => (
            <div key={org} className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
              <div className="h-10 w-auto text-neutral-500 font-heading font-bold text-2xl">ORGANIZATION {org}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
