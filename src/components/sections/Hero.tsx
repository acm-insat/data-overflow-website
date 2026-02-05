"use client";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-24 relative overflow-hidden">
      {/* Decorative Glow similar to poster */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[100rem] w-full mx-auto relative z-10 border-b border-white/10 pb-12">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs tracking-[0.2em] text-white/80">
            ORGANIZED BY ACM & IEEE INSAT
          </span>
        </div>

        <h1 className="text-[clamp(4rem,15vw,11rem)] leading-[0.85] font-serif text-white/90 italic">
          Data
        </h1>
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-[clamp(4rem,15vw,11rem)] leading-[0.85] font-sans font-extrabold text-gradient"
        >
          Overflow
        </motion.h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between mt-8 max-w-[100rem] mx-auto w-full">
        <p className="max-w-md text-lg text-white/80 font-medium">
          Beyond the algorithm. Beyond the model. We explore the singularity
          where code meets consciousness.
        </p>
        <div className="flex gap-12 mt-6 md:mt-0">
          <div>
            <div className="font-mono text-xs text-brand-primary tracking-widest mb-1">
              DATE
            </div>
            <div className="text-xl font-bold">Jan-Feb 2026</div>
          </div>
          <div>
            <div className="font-mono text-xs text-brand-primary tracking-widest mb-1">
              LOC
            </div>
            <div className="text-xl font-bold">INSAT, Tunis</div>
          </div>
        </div>
      </div>
    </section>
  );
};
