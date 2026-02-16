import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArticleCard } from "../cards/ArticleCard";
import { ALL_BLOG_ARTICLES } from "@/lib/data/blog-articles";

const SAMPLE_ARTICLES = ALL_BLOG_ARTICLES.slice(0, 6).map((article) => ({
  id: article.id,
  href: `/blog/${article.slug}`,
  title: article.title,
  date: article.date,
  category: article.category,
  image: article.image,
  slug: article.slug,
  description: article.description,
}));
export const FeaturedArticles = () => {
  // Group articles by year
  const articlesByYear = SAMPLE_ARTICLES.reduce(
    (acc, article) => {
      // Extract year from date string (e.g., "FEB 05, 2025" -> "2025")
      const year = article.date.split(", ")[1];

      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(article);

      return acc;
    },
    {} as Record<string, typeof SAMPLE_ARTICLES>,
  );

  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(articlesByYear).sort(
    (a, b) => parseInt(b) - parseInt(a),
  );

  return (
    <section
      id="insights"
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

        {/* Render articles grouped by year */}
        <div className="space-y-16">
          {sortedYears.map((year) => (
            <div key={year}>
              {/* Year heading */}
              <div className="mb-8 mx-auto">
                <h3 className="text-2xl md:text-3xl font-serif italic text-white/80 ">
                  {year}
                </h3>
                <div className="h-px bg-gradient-to-r from-white/20 to-transparent mt-3" />
              </div>

              {/* Articles grid for this year */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {articlesByYear[year].map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
