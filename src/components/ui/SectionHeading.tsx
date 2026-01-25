import { cn } from "@/lib/utils";

interface Props {
  number: string;
  title: string;
  subtitle?: string; // e.g. "The Vision"
  align?: "left" | "right" | "center";
}

export const SectionHeading = ({
  number,
  title,
  subtitle,
  align = "left",
}: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col mb-12",
        align === "right" && "items-end text-right",
        align === "center" && "items-center text-center",
      )}
    >
      <span className="font-mono text-xs text-brand-primary tracking-[0.2em] mb-2 block">
        [ {number} ]
      </span>
      <h2 className="text-4xl md:text-6xl font-serif italic text-white/90">
        {subtitle}{" "}
        <span className="block font-sans font-extrabold not-italic text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
          {title}
        </span>
      </h2>
    </div>
  );
};
