"use client";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import Link from "next/link";
import Image from "next/image";

import { Search } from "lucide-react";
import { ALL_BLOG_ARTICLES } from "@/lib/data/blog-articles";
import { CATEGORIES } from "@/lib/data/blog-categories";

export default function ArchivePage() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredArticles = ALL_BLOG_ARTICLES.filter((article) => {
    const matchesFilter = filter === "All" || article.category === filter;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-32 pb-20 px-6 md:px-24 max-w-[90rem] mx-auto min-h-screen">
      <SectionHeading
        number="ARCHIVE"
        title="Insights"
        subtitle="Knowledge Base"
      />

      {/* Controls */}
      <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-full text-white focus:border-brand-primary focus:outline-none transition-colors"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          {["All", ...Object.keys(CATEGORIES)].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all ${filter === cat ? "bg-brand-primary text-black border-brand-primary" : "border-white/20 text-white/60 hover:border-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <Link href={`/archive/${article.slug}`} key={article.id}>
            <GlassCard className="h-full hover:-translate-y-2">
              <div className="aspect-video bg-white/5 rounded-lg mb-4 overflow-hidden relative">
                {/* Image goes here */}
                <Image
                  className="absolute inset-0 bg-brand-primary/10"
                  src={article.image}
                  alt={article.title}
                  fill
                />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-mono text-brand-secondary px-2 py-1 border border-brand-secondary/30 rounded">
                  {article.category}
                </span>
                <span className="text-xs text-white/40 font-mono">
                  {article.date}
                </span>
              </div>
              <h3 className="text-xl font-bold leading-tight">
                {article.title}
              </h3>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
