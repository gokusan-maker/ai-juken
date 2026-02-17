import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI×大学受験 | プロンプトエンジニアリングで合格を勝ち取る",
  description: "AIを勉強に活かす。大学受験生のためのプロンプトエンジニアリング講座。ChatGPT・Claudeを最大限活用して効率的に学ぶ方法を学べる記事を販売しています。",
  openGraph: {
    title: "AI×大学受験 | プロンプトエンジニアリングで合格を勝ち取る",
    description: "AIを勉強に活かす。大学受験生のためのプロンプトエンジニアリング講座。",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
