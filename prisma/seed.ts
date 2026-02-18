import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL || "file:./dev.db",
});
const prisma = new PrismaClient({ adapter });

const seedArticles = [
  {
    id: "1",
    title: "ChatGPTで英作文の添削を完璧に｜プロンプトテンプレート10選",
    description:
      "AIに英作文を添削してもらうための効果的なプロンプトの作り方。文法チェックから表現のブラッシュアップまで、受験生必須のテクニックを公開。",
    price: 500,
    category: "英語",
    author: "AI×受験編集部",
    publishedAt: "2025-02-15",
    readTime: 8,
    tags: '["英語","英作文","ChatGPT","プロンプト"]',
  },
  {
    id: "2",
    title: "数学の解説をAIにさせる｜間違えやすいポイントを徹底理解する方法",
    description:
      "解答を見ても「なぜ？」が残る人へ。AIに段階的に解説させるプロンプト設計で、本質的な理解を深める勉強法。",
    price: 800,
    category: "数学",
    author: "AI×受験編集部",
    publishedAt: "2025-02-12",
    readTime: 12,
    tags: '["数学","解説","理解","プロンプト"]',
  },
  {
    id: "3",
    title: "古文・漢文の現代語訳をAIに依頼する正しいやり方",
    description:
      "古典の学習でAIを活用。単なる訳ではなく、文法ポイントまで説明させるプロンプト集。共通テスト対策にも。",
    price: 500,
    category: "国語",
    author: "AI×受験編集部",
    publishedAt: "2025-02-10",
    readTime: 6,
    tags: '["古文","漢文","国語","古典"]',
  },
  {
    id: "4",
    title: "過去問分析を10倍効率化｜AIに傾向分析をさせるプロンプト",
    description:
      "志望校の過去問をAIに分析させることで、出題傾向や対策ポイントを自動抽出。限られた時間を有効活用。",
    price: 1000,
    category: "全科目",
    author: "AI×受験編集部",
    publishedAt: "2025-02-08",
    readTime: 15,
    tags: '["過去問","分析","志望校","対策"]',
  },
  {
    id: "5",
    title: "プロンプトエンジニアリング入門｜AIを「先生」にする基本",
    description:
      "AI×勉強の第一歩。良いプロンプトと悪いプロンプトの違い、具体的な改善例を初心者向けに解説。",
    price: 0,
    category: "基礎",
    author: "AI×受験編集部",
    publishedAt: "2025-02-01",
    readTime: 5,
    tags: '["入門","基礎","プロンプト","初心者"]',
  },
];

async function main() {
  for (const article of seedArticles) {
    await prisma.article.upsert({
      where: { id: article.id },
      update: article,
      create: article,
    });
  }
  console.log("Seed completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
