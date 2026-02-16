import Link from "next/link";
import { GlassCard } from "../ui/GlassCard";
import Image from "next/image";
import { CATEGORIES } from "@/lib/data/blog-categories";

interface ArticleCardProps {
  article: {
    id: string;
    title: string;
    date: string;
    category: keyof typeof CATEGORIES;
    image: string;
    slug: string;
    description: string;
  };
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      href={`/archive/${article.slug}`}
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
            <span className={`text-brand-cyan font-bold`}>
              {article.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-primary transition-colors leading-tight">
            {article.title}
          </h3>
        </div>
      </GlassCard>
    </Link>
  );
}
