import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { faqCategories, allFaqs } from "@/data/faq";

const BASE_URL = "https://kyoei-shigyo.jp";
const PAGE_URL = `${BASE_URL}/faq`;

export const metadata: Metadata = {
  title: "よくある質問（FAQ）",
  description:
    "共栄紙業の古紙・資源リサイクル・廃棄物管理サービスについてよくある質問と回答。料金・対応エリア・機密書類・産業廃棄物など幅広くご案内します。",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "よくある質問（FAQ） | 共栄紙業株式会社",
    description:
      "古紙回収の料金・対応エリア・機密書類処理・産業廃棄物など、よくあるご質問と回答をまとめています。",
    url: PAGE_URL,
    locale: "ja_JP",
    type: "website",
  },
};

// パンくず構造化データ
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "ホーム",           item: `${BASE_URL}/` },
    { "@type": "ListItem", position: 2, name: "よくある質問",     item: PAGE_URL },
  ],
};

// FAQ構造化データ（JSON-LD）
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHero
        title="よくある質問"
        subtitle="ご不明な点はお気軽にお問い合わせください。詳細は各記事もあわせてご覧ください。"
        breadcrumb="FAQ"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-6 pb-3 border-b-2 border-green-700">
                  <h2 className="text-base font-bold text-gray-900">{cat.category}</h2>
                </div>

                <div className="space-y-px bg-gray-200">
                  {cat.items.map((item) => (
                    <details
                      key={item.id}
                      className="group bg-white overflow-hidden"
                    >
                      <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer hover:bg-green-50 transition-colors list-none">
                        <span className="font-semibold text-gray-900 text-sm lg:text-base">
                          <span className="font-accent text-green-700 mr-2">Q.</span>
                          {item.question}
                        </span>
                        <svg
                          className="w-5 h-5 text-green-600 shrink-0 transition-transform group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>

                      <div className="px-6 pb-5 pt-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          <span className="font-accent text-gray-400 mr-2">A.</span>
                          {item.answer}
                        </p>
                        <Link
                          href={`/blog/${item.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 hover:text-green-800 border border-green-600 px-3 py-1.5 hover:bg-green-50 transition-colors"
                        >
                          <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          詳しく読む
                        </Link>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gray-50 border border-gray-200 border-l-4 border-l-green-700 p-7">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-1">解決しない場合はお気軽にご相談ください</h3>
                <p className="text-gray-500 text-sm">お見積り・ご相談は無料です。担当者が丁寧にご案内します。</p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0 text-sm px-6 py-2.5">
                WEBでお問い合わせ
              </Link>
            </div>
          </div>

          {/* ブログ一覧へのリンク */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-3">各質問の詳細解説記事はこちら</p>
            <Link href="/blog" className="btn-outline text-sm px-6 py-2.5 inline-flex items-center gap-2">
              <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v10a2 2 0 01-2 2z" />
              </svg>
              コラム・ブログ一覧を見る
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
