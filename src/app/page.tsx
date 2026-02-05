import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { AIDay } from "@/components/sections/AIDay";
import { Hackathon } from "@/components/sections/Hackathon";
import { FeaturedArticles } from "@/components/sections/FeaturedArticles";
import { Committee } from "@/components/sections/Committee";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Workshops } from "@/components/sections/Wokrshops";
import { LiquidBackground } from "@/components/effects/LiquidBackground";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />

      <LiquidBackground />
      <Hero />
      <Vision />
      <Workshops />
      <AIDay />
      <Hackathon />
      <FeaturedArticles />
      <Committee />

      <Footer />
    </main>
  );
}
