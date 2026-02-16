export type ArticleCategory = "ml" | "genai" | "deepmind";

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface ArticleSection {
  type: "heading" | "paragraph" | "list" | "image" | "highlight";
  content?: string;
  title?: string;
  items?: string[];
  image?: ArticleImage;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: ArticleCategory;
  image: string;
  description: string;
  readTime: number;
  author: string;
  sections: ArticleSection[];
  keyHighlights?: string[];
  conclusion?: string;
  pdf?: {
    url: string;
    filename: string;
  };
  relatedArticles?: string[];
  featured?: boolean;
}
