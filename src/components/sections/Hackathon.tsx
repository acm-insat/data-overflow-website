"use client";
import { Countdown } from "@/components/ui/Countdown";
import { EVENT_DATES } from "@/lib/data/data";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export const Hackathon = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="hackathon"
      className="py-24 md:py-32 px-6 md:px-24 relative overflow-hidden bg-black/5 text-white"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-brand-secondary/20 to-transparent opacity-40 pointer-events-none" />

      <div className=" w-auto mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <span className="font-mono text-xs text-brand-primary tracking-widest animate-pulse">
            [ 04 : LIVE_EVENT ]
          </span>
          <h2 className="text-[clamp(3rem,6vw,5rem)] font-black tracking-tighter leading-none mt-4 mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
            DATAQUEST
          </h2>
          <p className="text-xl text-white/70 max-w-lg mb-12 font-light">
            24 Hours. 85 Teams. One dataset. A crucible where code meets
            creativity to solve real-world challenges.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-brand-accent transition-colors duration-300 clip-path-polygon hover:-translate-y-1 hover:scale-105 hover:transition-all hover:ease-in-out cursor-pointer"
          >
            Register Team
          </button>
        </div>

        {/* Countdown Card */}
        <div className="relative border border-white/40 bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-2xl shadow-[0_0_50px_rgba(139,92,246,0.15)]">
          <Countdown targetDate={EVENT_DATES.hackathon} />
        </div>
      </div>

      {/* Registration Modal Logic */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-zinc-900 border border-white/10 p-8 rounded-2xl max-w-md w-full shadow-2xl"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-white/50 hover:text-white"
              >
                <X />
              </button>
              <h3 className="text-2xl font-bold text-white mb-4">
                Registration
              </h3>
              <p className="text-white/60 mb-8">
                Registration forms are currently being prepared. Check back in:
              </p>
              <Countdown targetDate={EVENT_DATES.hackathon} />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
