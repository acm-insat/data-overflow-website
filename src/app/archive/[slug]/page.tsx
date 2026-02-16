import {
  getBlogArticleBySlug,
  getRelatedArticles,
  getAllBlogArticles,
} from "@/lib/data/blog-articles";
import BlogPostClient from "./BlogPostClient";

// Server component - generates static params
export function generateStaticParams() {
  const articles = getAllBlogArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getBlogArticleBySlug(slug);
  console.log(`article with slug : ${slug} is : ${article}`);

  const relatedArticles = article ? getRelatedArticles(article.slug) : [];

  return (
    <>
      <BlogPostClient article={article} relatedArticles={relatedArticles} />
    </>
  );
}
