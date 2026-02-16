"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArticleContent } from "@/components/blog/ArticleContent";
import { RelatedArticles } from "@/components/blog/RelatedArticles";
import { Button } from "@/components/ui/Button";
import { BlogArticle } from "@/lib/types/blog";

interface BlogPostClientProps {
  article: BlogArticle | undefined;
  relatedArticles: BlogArticle[];
}

export default function BlogPostClient({
  article,
  relatedArticles,
}: BlogPostClientProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!article) {
    return (
      <main className="min-h-screen bg-obsidian pt-32 md:pt-48 pb-24 px-6 md:px-24 flex flex-col items-center justify-center">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">
            404 - Article Not Found
          </h1>
          <p className="text-xl text-slate-400 mb-10">
            The article you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button variant="primary">Back to Blog</Button>
            </Link>
            <Link href="/">
              <Button variant="secondary">Back Home</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-obsidian">
      {/* Article Hero */}
      <div className="relative min-h-screen pt-32 md:pt-48 pb-20 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse-glow" />
          <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse-glow"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-0">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm text-slate-400">
            <Link
              href="/archive"
              className="hover:text-brand-cyan transition-colors"
            >
              archive
            </Link>
            <span>/</span>
            <span className="text-brand-cyan">{article.title}</span>
          </div>

          {/* Main Article Content */}
          <ArticleContent article={article} />
        </div>
      </div>

      {/* Related Articles Section */}
      {relatedArticles.length > 0 && (
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      )}
    </main>
  );
}
