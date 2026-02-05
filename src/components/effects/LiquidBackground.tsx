"use client";
import ColorBends from "../ui/background/ColorBends";

export const LiquidBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-[#060606]">
      <ColorBends
        rotation={45}
        speed={0.2}
        colors={
          ["#060606", "#1a0b3b", "#0383FC", "#0383FC"] as unknown as never[]
        }
        transparent
        autoRotate={0.65}
        scale={0.8}
        frequency={1}
        warpStrength={1}
        mouseInfluence={1}
        parallax={1.1}
        noise={0}
      />
    </div>
  );
};
