'use client';

import { useEffect, useState } from 'react';
import { ArticleSection } from '@/lib/types/blog';

interface TableOfContentsProps {
  sections: ArticleSection[];
}

export function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    document.querySelectorAll('h2').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const headings = sections
    .filter((section) => section.type === 'heading' && section.title)
    .map((section) => ({
      id: section.title?.toLowerCase().replace(/\s+/g, '-') || '',
      title: section.title || '',
    }));

  if (headings.length === 0) return null;

  return (
    <div className="hidden lg:block sticky top-24 h-fit">
      <div className="glass-card p-6 rounded-lg border border-slate-700">
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
          In This Article
        </h3>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`text-sm transition-colors duration-300 block py-1 ${
                  activeId === heading.id
                    ? 'text-brand-cyan font-medium'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
