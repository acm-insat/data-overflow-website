"use client";
import { TiltCard } from "@/components/ui/TiltCard";
import { Check, ArrowRight } from "lucide-react";
import { WORKSHOPS } from "@/lib/data/data"; // Assumes you added the data structure from previous step
import { cn } from "@/lib/utils";

export const Workshops = () => {
  return (
    <section
      id="workshops"
      className="py-24 md:py-32 px-6 md:px-24 relative bg-black/20 border-y border-white/5"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      <div className="w-full mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col justify-between mb-16 md:mb-20 gap-7">
          <div>
            <span className="font-mono text-xs text-brand-primary tracking-widest block mb-2">
              [ 02 : WORKSHOPS ]
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white">
              The Workshops
            </h2>
          </div>
          <p className="font-sans text-white/80 max-w-sm text-left mt-6 md:mt-0">
            Intensive learning modules designed to elevate your understanding of
            machine learning architectures.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {WORKSHOPS.map((workshop) => {
            const isBeginner = workshop.track === "Beginner";
            const accentColor = isBeginner ? "#22d3ee" : "#a78bfa"; // Cyan vs Purple
            const accentClass = isBeginner
              ? "text-brand-primary border-brand-primary"
              : "text-brand-secondary border-brand-secondary";
            const bgClass = isBeginner
              ? "bg-brand-primary/10"
              : "bg-brand-secondary/10";

            return (
              <div key={workshop.id} className="group h-full perspective-1000">
                <TiltCard glowColor={accentColor} className="h-full">
                  <div className="flex flex-col h-full justify-between min-h-[420px]">
                    <div>
                      {/* Track Badge */}
                      <div
                        className={cn(
                          "inline-block px-3 py-1 border rounded-full text-[10px] font-bold font-mono tracking-widest uppercase mb-8",
                          accentClass,
                          bgClass,
                        )}
                      >
                        {workshop.track} Track
                      </div>

                      <h3 className="font-sans text-3xl md:text-4xl font-light mb-4 text-white">
                        {workshop.title.split(" ").map((word, i) => (
                          <span key={i} className="block">
                            {word}
                          </span>
                        ))}
                      </h3>

                      <p className="text-white/60 leading-relaxed mb-8">
                        {workshop.desc}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-6">
                      <div className="h-[1px] w-full bg-white/10" />

                      <div className="space-y-3">
                        {/* Mock Topics - In production, add these to your data.ts */}
                        <div className="flex items-center gap-3 text-sm font-mono text-white/70">
                          <Check
                            className={cn(
                              "w-4 h-4",
                              isBeginner
                                ? "text-brand-primary"
                                : "text-brand-secondary",
                            )}
                          />
                          <span>
                            {isBeginner
                              ? "Data Preprocessing"
                              : "Deep Learning (TensorFlow)"}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-mono text-white/70">
                          <Check
                            className={cn(
                              "w-4 h-4",
                              isBeginner
                                ? "text-brand-primary"
                                : "text-brand-secondary",
                            )}
                          />
                          <span>
                            {isBeginner
                              ? "Supervised Learning"
                              : "Large Language Models"}
                          </span>
                        </div>
                      </div>

                      <button
                        className={cn(
                          "w-full py-4 border uppercase font-bold text-xs tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-white group-hover:text-black",
                          "border-white/20 text-white",
                        )}
                      >
                        View Curriculum{" "}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
