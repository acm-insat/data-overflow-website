import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Mic, Users } from "lucide-react";
import Image from "next/image";

export const AIDay = () => {
  return (
    <section
      id="aiday"
      className="py-24 md:py-32 px-6 md:px-24 relative bg-white/5 backdrop-blur-3xl border-y border-white/5 "
    >
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="col-span-1 lg:col-span-5">
          <SectionHeading
            number="03 : AI DAY"
            title="Data & Beyond"
            subtitle="The Future"
          />

          <p className="text-lg text-white/60 leading-relaxed mb-12">
            A dedicated day exploring the singularity. Join top researchers and
            industry leaders on
            <span className="text-brand-secondary font-bold">
              {" "}
              February 11, 2026{" "}
            </span>
            as we dissect the future of Generative AI, Ethics, and Autonomous
            Systems.
          </p>

          <div className="space-y-4">
            {[
              {
                icon: Mic,
                title: "Keynote Speeches",
                desc: "Visionaries from Google & DeepMind",
              },
              {
                icon: Users,
                title: "Panel Discussions",
                desc: "The Ethics of AGI",
              },
            ].map((item, idx) => (
              <GlassCard
                key={idx}
                className="flex items-center gap-6 p-6 hover:border-brand-secondary transition-colors cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:bg-brand-secondary group-hover:text-white transition-all">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-white group-hover:text-brand-secondary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/50">{item.desc}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right: Visual */}
        <div className="col-span-1 lg:col-span-7 h-[500px] relative rounded-3xl overflow-hidden border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
            alt="Data and Beyond"
            fill
            className="object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-80"
          />
        </div>
      </div>
    </section>
  );
};
