"use client";
import { useEffect, useState } from "react";

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      const format = (num: number) => num.toString().padStart(2, "0");

      setTimeLeft({
        days: format(Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: format(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        ),
        minutes: format(
          Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        ),
        seconds: format(Math.floor((distance % (1000 * 60)) / 1000)),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const Item = ({ value, label }: { value: string; label: string }) => (
    <div className="flex flex-col items-center group">
      <div className="text-4xl md:text-6xl font-black font-mono text-transparent bg-clip-text bg-gradient-to-br from-brand-primary to-brand-secondary leading-none mb-4 group-hover:scale-110 transition-transform duration-300">
        {value}
      </div>
      <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 font-bold">
        {label}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-8 w-full max-w-2xl">
      <Item value={timeLeft.days} label="Days" />
      <Item value={timeLeft.hours} label="Hrs" />
      <Item value={timeLeft.minutes} label="Mins" />
      <Item value={timeLeft.seconds} label="Secs" />
    </div>
  );
};
