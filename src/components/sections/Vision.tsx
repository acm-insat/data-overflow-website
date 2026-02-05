"use client";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="vision" className="py-24 md:py-32 px-6 md:px-24 relative z-10">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-30">
        {/* Left Column: Context */}
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-start">
          <span className="font-mono text-xs text-brand-primary tracking-widest mb-4">
            [ 01 : MANIFESTO ]
          </span>
          <h2 className="font-sans text-4xl font-bold mb-6 text-white">
            The Vision
          </h2>
          <p className="font-sans text-xl text-white/90 leading-relaxed">
            Data Overflow is not just a conference; it is a movement. In an age
            of static information, we champion the fluid, exploring how data
            shapes our reality and defines our future.
          </p>
        </div>

        {/* Right Column: Big Statement */}
        <div className="col-span-1 lg:col-span-8" ref={ref}>
          <h3 className="text-[clamp(2.5rem,5vw,5rem)] leading-[1.1] font-serif font-medium text-white/90">
            {/* Split text for animation */}
            {"Data is the ".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-glow font-light"
            >
              new water
            </motion.span>

            <span className="block mt-2">
              {"It flows, it crashes, and for those who learn to navigate it—it sustains."
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i + 10}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                    className="inline-block mr-3 text-white/80 text-5xl"
                  >
                    {word}
                  </motion.span>
                ))}
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
};
