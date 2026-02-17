import { notFound } from "next/navigation";
import Link from "next/link";
import { articles } from "@/data/articles";
import { SnsShare } from "@/components/SnsShare";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);
  if (!article) return { title: "記事が見つかりません" };

  return {
    title: `${article.title} | AI×大学受験`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = articles.find((a) => a.id === id);

  if (!article) notFound();

  // 本番環境では実際のURLを取得
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://ai-juken.example.com";
  const articleUrl = `${baseUrl}/articles/${article.id}`;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[var(--accent)] mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        記事一覧に戻る
      </Link>

      <article>
        <header>
          <span className="text-sm font-medium text-[var(--accent)]">{article.category}</span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold mt-2 leading-tight">
            {article.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-gray-500">
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.publishedAt}</span>
            <span>·</span>
            <span>{article.readTime}分で読める</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs bg-gray-100 rounded text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-10 pt-8 border-t border-gray-200">
          {/* 記事プレビュー（有料記事は一部のみ表示） */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">{article.description}</p>
            {article.price > 0 ? (
              <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <p className="text-gray-600 text-sm">
                  続きを読むには記事の購入が必要です。購入後、全文が閲覧可能になります。
                </p>
              </div>
            ) : (
              <div className="mt-8 p-6 bg-[var(--accent)]/5 rounded-2xl border border-[var(--accent)]/20">
                <p className="text-gray-700">
                  この記事は無料で全文閲覧できます。以下のサンプルコンテンツをご覧ください。
                </p>
                <div className="mt-4 text-gray-600 text-sm space-y-2">
                  <p>プロンプトエンジニアリングとは、AIに対して効果的な指示（プロンプト）を与える技術です。</p>
                  <p>良いプロンプトを使うと、AIからより正確で有用な回答を得ることができます。</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 購入ボタン / シェア */}
        <div className="mt-12 pt-8 border-t border-gray-200 space-y-8">
          {article.price > 0 && (
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 sm:flex-initial px-8 py-4 bg-[var(--accent)] text-white font-bold rounded-xl hover:opacity-90 transition-opacity">
                ¥{article.price} で購入する
              </button>
              <p className="text-sm text-gray-500 self-center">
                ※ 決済機能は準備中です
              </p>
            </div>
          )}

          <SnsShare
            title={article.title}
            url={articleUrl}
            description={article.description}
          />
        </div>
      </article>
    </div>
  );
}
