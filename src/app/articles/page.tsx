import Link from "next/link";
import { getArticles } from "@/lib/articles";

export const metadata = {
  title: "記事一覧 | AI×大学受験",
  description: "プロンプトエンジニアリングでAIを勉強に活かす記事一覧。英語・数学・国語など科目別、レベル別の実践的な内容。",
};

export default async function ArticlesPage() {
  const articles = await getArticles();
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="font-heading text-3xl font-bold">記事一覧</h1>
        <p className="text-gray-600 mt-2">
          AIを勉強に活かすためのプロンプトや活用法を学べる記事です。
        </p>
      </div>

      <div className="space-y-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/articles/${article.id}`}
            className="block group bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 hover:shadow-md hover:border-[var(--accent)]/20 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0 w-full sm:w-48 h-32 sm:h-32 rounded-xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 flex items-center justify-center">
                <span className="text-2xl text-[var(--accent)]/40 font-heading font-bold">
                  {article.category}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-medium text-[var(--accent)]">
                  {article.category}
                </span>
                <h2 className="font-heading font-bold text-xl mt-1 group-hover:text-[var(--accent)] transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                  {article.description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
                  <span>{article.publishedAt}</span>
                  <span>·</span>
                  <span>{article.readTime}分で読める</span>
                  <span>·</span>
                  <span className="font-bold text-[var(--accent)]">
                    {article.price === 0 ? "無料" : `¥${article.price}`}
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs bg-gray-100 rounded text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
