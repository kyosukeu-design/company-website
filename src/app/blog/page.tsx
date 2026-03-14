import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/faq";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "コラム・ブログ",
  description:
    "古紙・資源リサイクル・廃棄物管理・BPOに関する解説記事。専ら物と産業廃棄物の違い・料金の仕組み・機密書類の廃棄方法など、企業担当者に役立つ情報を発信しています。",
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    title: "コラム・ブログ | 共栄紙業株式会社",
    description: "古紙回収・廃棄物管理に関する解説記事。専ら物と産業廃棄物の違い・料金の仕組み・機密書類の廃棄方法など、企業担当者に役立つ情報を発信しています。",
    url: `${BASE_URL}/blog`,
    locale: "ja_JP",
    type: "website",
  },
};

const categories = ["すべて", "料金・費用", "サービス", "機密文書", "対応エリア", "法令・知識", "廃棄物管理", "BPO"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        title="コラム・ブログ"
        subtitle="古紙回収・廃棄物管理・BPOに関する解説記事。よくある質問への詳しい回答や業界知識をお届けします。"
        breadcrumb="コラム・ブログ"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* カテゴリフィルター */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`text-xs px-3 py-1.5 border font-semibold ${
                  cat === "すべて"
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-white text-gray-600 border-gray-300"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* 記事グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white p-7 border-t-4 border-green-700 flex flex-col hover:bg-green-50 transition-colors group"
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-semibold bg-green-100 text-green-800 border border-green-200 px-2.5 py-1">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400 font-accent">{post.date}</span>
                </div>

                <h2 className="font-bold text-gray-900 text-base leading-snug mb-3 group-hover:text-green-700 transition-colors flex-1">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readingTime}で読める
                  </span>
                  <span className="text-xs font-semibold text-green-700 group-hover:underline flex items-center gap-1">
                    続きを読む
                    <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* FAQ へのリンク */}
          <div className="mt-12 bg-gray-50 border-l-4 border-green-700 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-bold text-gray-900 text-sm mb-1">よくある質問はFAQページもご覧ください</p>
              <p className="text-gray-500 text-xs">お客様からよくいただくご質問を一覧でご確認いただけます。</p>
            </div>
            <Link href="/faq" className="btn-outline text-sm px-5 py-2 shrink-0 inline-flex items-center gap-2">
              FAQを見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
