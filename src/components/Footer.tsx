import Link from "next/link";
import { SNS_LINKS } from "@/config/sns";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white/50 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-heading font-bold text-lg text-[var(--accent)]">
              AI×大学受験
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              プロンプトエンジニアリングで、AIを勉強の味方に。
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 text-sm">
            <Link href="/articles" className="text-gray-600 hover:text-[var(--accent)]">
              記事一覧
            </Link>
            <a
              href={SNS_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#1DA1F2]"
            >
              X (Twitter)
            </a>
            <a
              href={SNS_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#E4405F]"
            >
              Instagram
            </a>
          </div>
        </div>
        <p className="text-center text-gray-400 text-xs mt-8">
          © {new Date().getFullYear()} AI×大学受験. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
