"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { ALL_BLOG_ARTICLES } from "@/lib/data/blog-articles";
import { Button } from "@/components/ui/Button";
import { CATEGORIES } from "@/lib/data/blog-categories";

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredArticles = useMemo(() => {
    if (activeFilter === "all") return ALL_BLOG_ARTICLES;
    return ALL_BLOG_ARTICLES.filter(
      (article) => article.category === activeFilter,
    );
  }, [activeFilter]);

  const featuredArticle =
    ALL_BLOG_ARTICLES.find((a) => a.featured) || ALL_BLOG_ARTICLES[0];
  const otherArticles = filteredArticles.filter(
    (article) => article.id !== featuredArticle.id,
  );

  const filters = ["all", ...Object.keys(CATEGORIES)] as const;

  return (
    <>
      <main className="relative">
        {/* Blog Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 px-6 md:px-24 overflow-hidden">
          {/* Background gradient elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 -left-32 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
            <div className="absolute bottom-40 -right-32 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full">
            {/* Header */}
            <div className="mb-12 md:mb-16">
              <div className="flex items-center gap-3 mb-8">
                <span className="font-mono text-xs text-brand-cyan tracking-widest animate-pulse">
                  [ INSIGHTS ]
                </span>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-brand-cyan to-transparent" />
              </div>

              <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl leading-[1.1] text-white mb-6 italic animate-fade-in-up">
                The Blog
              </h1>

              <p
                className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "100ms" }}
              >
                Dive deep into the world of machine learning, generative AI, and
                cutting-edge technology. Explore insights, research, and
                industry perspectives from our expert contributors.
              </p>
            </div>

            {/* Featured Article */}
            <Link href={`/blog/${featuredArticle.slug}`}>
              <article
                className="glass-card group block p-6 md:p-8 rounded-2xl hover:border-brand-cyan/50 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: "200ms" }}
              >
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Image */}
                  <div className="md:col-span-1 order-2 md:order-1">
                    <div className="aspect-square overflow-hidden rounded-xl bg-slate-800 relative">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 to-brand-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:col-span-2 order-1 md:order-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block px-3 py-1 bg-brand-cyan/10 border border-brand-cyan/30 rounded-full text-xs font-bold text-brand-cyan uppercase tracking-wider">
                        Featured
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {featuredArticle.date}
                      </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 italic leading-[1.2] group-hover:text-brand-cyan transition-colors">
                      {featuredArticle.title}
                    </h2>

                    <p className="text-lg text-slate-400 mb-6">
                      {featuredArticle.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-6">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-slate-500">
                          {featuredArticle.readTime}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-brand-purple">
                        <span className="font-mono text-xs uppercase tracking-wider">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>

        {/* Articles Section */}
        <section className="py-24 px-6 md:px-24 max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="mb-16 md:mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-brand-purple tracking-widest">
                [ ALL ARTICLES ]
              </span>
              <div className="h-[1px] flex-1 bg-slate-700" />
            </div>
            <h2 className="font-serif text-5xl md:text-6xl leading-[1.2] text-white italic">
              Latest from our team
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="mb-12 md:mb-16 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "primary" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="capitalize transition-all duration-300 hover-lift"
              >
                {filter === "all"
                  ? "All Articles"
                  : CATEGORIES[filter as keyof typeof CATEGORIES]?.label ||
                    filter}
              </Button>
            ))}
          </div>

          {/* Articles Grid */}
          {otherArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherArticles.map((article, index) => (
                <div
                  key={article.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link href={`/blog/${article.slug}`}>
                    <article className="glass-card group block p-6 rounded-xl hover:-translate-y-3 transition-all duration-500 h-full flex flex-col">
                      {/* Image */}
                      <div className="aspect-video overflow-hidden rounded-lg mb-4 bg-slate-800 relative">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        />
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-3 text-xs font-mono text-slate-500 mb-3">
                        <span className="text-slate-400">{article.date}</span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full" />
                        <span className="font-bold text-brand-cyan">
                          {CATEGORIES[article.category].label.toUpperCase()}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-sans font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors line-clamp-3 flex-grow">
                        {article.title}
                      </h3>

                      {/* description */}
                      <p className="text-sm text-slate-400 mb-4 line-clamp-2">
                        {article.description}
                      </p>

                      {/* Read Time */}
                      <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                        <span className="font-mono text-xs text-slate-500">
                          {article.readTime}
                        </span>
                        <span className="text-brand-cyan text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                          Read →
                        </span>
                      </div>
                    </article>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-slate-400 text-lg mb-4">
                No articles found in this category.
              </p>
              <Button variant="primary" onClick={() => setActiveFilter("all")}>
                View All Articles
              </Button>
            </div>
          )}
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-6 md:px-24 max-w-7xl mx-auto">
          <div className="glass-card p-12 md:p-16 rounded-2xl text-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-cyan/10 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4 italic">
                Stay Updated
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights
                on AI, machine learning, and technology.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-brand-cyan transition-colors"
                />
                <Button variant="primary" size="md">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
