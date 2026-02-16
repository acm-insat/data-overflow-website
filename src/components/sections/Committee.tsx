import { COMMITTEE } from "@/lib/data/data";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getImagePath } from "@/lib/getImagePath.utils";

export const Committee = () => {
  return (
    <section
      id="committee"
      className="py-24 md:py-32 px-6 md:px-24 relative overflow-hidden bg-black"
    >
      <div className="w-full mx-auto mb-12">
        <SectionHeading
          number="06 : EVENT ORGANIZERS"
          title="Executive"
          subtitle="Committee"
          align="left"
        />
      </div>

      {/* Horizontal Scroll Container (Mobile Friendly) */}
      <div className="flex lg:grid lg:grid-cols-5 gap-6 overflow-x-auto lg:overflow-visible pb-12  snap-x snap-mandatory scrollbar-hide">
        {COMMITTEE.map((member, index) => (
          <div
            key={index}
            className="shrink-0 w-[280px] lg:w-auto snap-center group cursor-pointer relative"
          >
            <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden relative bg-white/5 border border-white/5 group-hover:border-brand-primary/50 transition-colors">
              <Image
                src={getImagePath(member.image)}
                alt={member.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Floating Text on Hover (Desktop) or Always (Mobile) */}
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <h4 className="font-sans font-bold text-white text-lg">
                  {member.name}
                </h4>
                <p
                  className={`font-mono text-[10px] uppercase tracking-widest text-${member.color || "brand-primary"}`}
                >
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
