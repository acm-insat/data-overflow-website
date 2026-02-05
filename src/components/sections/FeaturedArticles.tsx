import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FEATURED_ARTICLES } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import Image from "next/image";

export const FeaturedArticles = () => {
  return (
    <section
      id="articles"
      className="py-24 md:py-32 px-6 md:px-24 relative bg-background/75 border-b border-white/5"
    >
      <div className="w-full mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <div className="flex flex-col">
            <span className="font-mono text-xs text-brand-primary tracking-widest mb-2">
              [ 05 : FEATURED ARTICLES ]
            </span>
            <h2 className="text-4xl md:text-6xl font-serif italic text-white">
              Insights
            </h2>
          </div>
          <Link
            href="/archive"
            className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors mt-6 md:mt-0"
          >
            View Archive{" "}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_ARTICLES.map((article) => (
            <Link
              href={`/insights/${article.slug}`}
              key={article.id}
              className="block group"
            >
              <GlassCard className="h-full hover:-translate-y-2 p-0 overflow-hidden border-transparent bg-white/5">
                <div className="aspect-video overflow-hidden relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs font-mono text-white/50 mb-3">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                    <span className={`${article.color} font-bold`}>
                      {article.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors leading-tight">
                    {article.title}
                  </h3>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
