export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <article className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-brand-primary/30 text-brand-primary text-xs font-mono font-bold mb-6">
          GENERATIVE AI
        </div>
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
          Understanding and Mitigating Hallucinations in LLMs
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full bg-white/10" />
          <div className="text-left">
            <div className="text-sm font-bold">Fedy Ben Hassouna</div>
            <div className="text-xs text-white/50 font-mono">AI Researcher</div>
          </div>
        </div>
      </header>

      {/* Content Body with Typography Styles */}
      <div className="prose prose-invert prose-lg mx-auto prose-headings:font-sans prose-p:font-serif prose-p:text-white/70 prose-a:text-brand-primary">
        <p className="lead text-xl md:text-2xl italic text-white/90">
          Large Language Models (LLMs) have revolutionized AI...
        </p>
        {/* Content injection here */}
      </div>
    </article>
  );
}
