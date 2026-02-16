"use client";

import Image from "next/image";
import { BlogArticle, ArticleSection } from "@/lib/types/blog";

interface ArticleContentProps {
  article: BlogArticle;
}

export function ArticleContent({ article }: ArticleContentProps) {
  const renderSection = (section: ArticleSection, index: number) => {
    switch (section.type) {
      case "heading":
        return (
          <h2
            key={index}
            className="text-3xl md:text-4xl font-serif font-bold mt-12 mb-6 text-white"
          >
            {section.title}
          </h2>
        );

      case "paragraph":
        return (
          <p
            key={index}
            className="text-lg text-slate-300 leading-relaxed mb-6 font-light"
          >
            {section.content}
          </p>
        );

      case "list":
        return (
          <ul
            key={index}
            className="space-y-4 mb-8 border-l-2 border-brand-cyan pl-6"
          >
            {section.items?.map((item, itemIndex) => (
              <li
                key={itemIndex}
                className="text-slate-300 leading-relaxed flex items-start"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-brand-cyan mt-2 mr-4 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        );

      case "image":
        return section.image ? (
          <div key={index} className="my-12">
            <div className="relative w-full h-75 md:h-125 rounded-xl overflow-hidden glass-card p-1">
              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                // Change 'object-cover' to 'object-contain' so the whole image fits
                className="object-contain rounded-lg"
                priority={index < 2}
              />
            </div>
            {section.image.caption && (
              <p className="text-sm text-slate-400 mt-4 text-center italic">
                {section.image.caption}
              </p>
            )}
          </div>
        ) : null;

      case "highlight":
        return (
          <div
            key={index}
            className="my-8 p-6 rounded-lg border-2 border-brand-cyan/30 bg-brand-cyan/5 backdrop-blur-sm"
          >
            <p className="text-slate-200 text-lg font-medium leading-relaxed">
              ✨ {section.content}
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <article className="rounded-2xl py-24 md:py-32 px-6 md:px-24 relative bg-white/5 backdrop-blur-3xl border-y border-white/5 ">
      {/* Header Section */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="px-4 py-1.5 bg-brand-cyan/10 text-brand-cyan rounded-full text-sm font-semibold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-slate-400 text-sm">{article.readTime}</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
          {article.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-6 border-t border-slate-800">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              {/* <Image
                src={article.author.image}
                alt={article.author.name}
                fill
                className="object-cover"
              /> */}
            </div>
            <div>
              <p className="font-semibold text-white">{article.author}</p>
              {/* <p className="text-sm text-slate-400">{article.author.role}</p> */}
            </div>
          </div>
          <p className="text-slate-400">{article.date}</p>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-96 md:h-[500px] rounded-xl overflow-hidden mb-12 glass-card p-1">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Description */}
      <p className="text-xl text-slate-200 leading-relaxed mb-12 font-light italic text-center">
        {article.description}
      </p>

      {/* Key Highlights */}
      {article.keyHighlights && article.keyHighlights.length > 0 && (
        <div className="mb-12 p-8 rounded-xl border border-brand-purple/20 bg-brand-purple/5 backdrop-blur-sm">
          <h2 className="text-2xl font-serif font-bold text-white mb-6">
            Key Highlights
          </h2>
          <ul className="space-y-3">
            {article.keyHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-4 text-slate-300">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-brand-purple/30 text-brand-purple flex-shrink-0 text-sm font-bold">
                  {index + 1}
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Main Content Sections */}
      <div className="mb-12">
        {article.sections.map((section, index) =>
          renderSection(section, index),
        )}
      </div>

      {/* Conclusion */}
      {article.conclusion && (
        <div className="my-12 p-8 rounded-xl border-l-4 border-brand-cyan bg-gradient-to-r from-brand-cyan/10 to-transparent">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Conclusion
          </h3>
          <p className="text-lg text-slate-200 leading-relaxed">
            {article.conclusion}
          </p>
        </div>
      )}

      {/* PDF Download CTA */}
      {article.pdf && (
        <div className="mt-12 p-8 rounded-xl border border-brand-cyan/30 bg-brand-cyan/5 text-center">
          <p className="text-slate-300 mb-4">
            Want to read the full research paper?
          </p>
          <a
            href={`/${article.pdf.url.startsWith("/") ? article.pdf.url.slice(1) : article.pdf.url}`}
            download={article.pdf.filename}
            className="inline-flex items-center gap-2 px-8 py-3 bg-brand-cyan text-obsidian font-semibold rounded-lg hover:bg-brand-cyan/90 transition-colors duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8m0 8l-6-2m6 2l6-2"
              />
            </svg>
            Download PDF
          </a>
        </div>
      )}
    </article>
  );
}
