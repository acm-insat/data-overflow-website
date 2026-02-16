"use client";

import Link from "next/link";
import { BlogArticle } from "@/lib/types/blog";
import { ArticleCard } from "@/components/cards/ArticleCard";

interface RelatedArticlesProps {
  articles: BlogArticle[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-20 pt-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 md:px-0">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
          Related Articles
        </h2>
        <p className="text-slate-400 mb-10">
          Explore more insights on similar topics
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/archive/${article.slug}`}
              className="transform transition-all duration-300 hover:scale-105"
            >
              <ArticleCard article={article} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
