import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { AIDay } from "@/components/sections/AIDay";
import { Hackathon } from "@/components/sections/Hackathon";
import { FeaturedArticles } from "@/components/sections/FeaturedArticles";
import { Committee } from "@/components/sections/Committee";
import { Workshops } from "@/components/sections/Wokrshops";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Hero />
      <Vision />
      <Workshops />
      <AIDay />
      <Hackathon />
      <FeaturedArticles />
      <Committee />
    </main>
  );
}
