import { prisma } from "@/lib/db";

export interface Article {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail?: string;
  category: string;
  author: string;
  publishedAt: string;
  readTime: number;
  tags: string[];
}

function formatArticle(
  a: {
    id: string;
    title: string;
    description: string;
    price: number;
    thumbnail: string | null;
    category: string;
    author: string;
    publishedAt: string;
    readTime: number;
    tags: string;
  }
): Article {
  return {
    id: a.id,
    title: a.title,
    description: a.description,
    price: a.price,
    thumbnail: a.thumbnail ?? undefined,
    category: a.category,
    author: a.author,
    publishedAt: a.publishedAt,
    readTime: a.readTime,
    tags: JSON.parse(a.tags || "[]") as string[],
  };
}

export async function getArticles(): Promise<Article[]> {
  const articles = await prisma.article.findMany({
    orderBy: { publishedAt: "desc" },
  });
  return articles.map(formatArticle);
}

export async function getArticleById(id: string): Promise<Article | null> {
  const article = await prisma.article.findUnique({
    where: { id },
  });
  return article ? formatArticle(article) : null;
}
