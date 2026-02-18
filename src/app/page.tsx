import Link from "next/link";
import { getArticles } from "@/lib/articles";
import { SNS_LINKS } from "@/config/sns";

export default async function Home() {
  const articles = await getArticles();
  const featuredArticles = articles.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--accent)] to-[#0a4549] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--accent-warm)] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <p className="text-[var(--accent-warm)] font-medium mb-4 text-sm uppercase tracking-wider">
            AI × 大学受験
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
            プロンプトエンジニアリングで
            <br />
            AIを勉強の味方に。
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl">
            大学受験生のためのAI活用講座。ChatGPT・Claudeを最大限に活用し、
            効率的に学ぶ方法を記事で学べます。
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-warm)] text-[#1a1a1a] font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              記事を見る
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 rounded-lg hover:bg-white/20 transition-colors"
            >
              Xでフォロー
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-heading text-2xl font-bold text-center mb-12">
          なぜAI×勉強なのか
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">24時間いつでも質問</h3>
            <p className="text-gray-600 text-sm">
              AIは寝ている間でも起きている。深夜の勉強中も、わからないことがあればすぐに解説を求められる。
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-warm)]/20 flex items-center justify-center text-[var(--accent-warm)] mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">自分に合った解説</h3>
            <p className="text-gray-600 text-sm">
              良いプロンプトを使えば、自分のレベルや苦手に合わせた解説をAIから引き出せる。
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">時間を有効活用</h3>
            <p className="text-gray-600 text-sm">
              過去問分析や英作文添削など、手作業だと時間がかかる作業をAIで効率化。
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-gray-50/50 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="font-heading text-2xl font-bold">おすすめ記事</h2>
            <Link
              href="/articles"
              className="text-[var(--accent)] font-medium text-sm hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:border-[var(--accent)]/20 transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 flex items-center justify-center">
                  <span className="text-4xl text-[var(--accent)]/30 font-heading font-bold">
                    {article.category}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-[var(--accent)]">
                    {article.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg mt-1 group-hover:text-[var(--accent)] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-400">
                      {article.readTime}分 · {article.publishedAt}
                    </span>
                    <span className="font-bold text-[var(--accent)]">
                      {article.price === 0 ? "無料" : `¥${article.price}`}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20">
        <div className="bg-[var(--accent)] rounded-3xl p-10 sm:p-16 text-center text-white">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
            SNSで最新情報をチェック
          </h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            新着記事やプロンプトのTipsを随時投稿。フォローして受験勉強を効率化しよう。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={SNS_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--accent)] font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              X (Twitter) をフォロー
            </a>
            <a
              href={SNS_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 border border-white/40 rounded-lg hover:bg-white/30 transition-colors"
            >
              Instagram をフォロー
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
