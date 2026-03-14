import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { blogPosts, allFaqs } from "@/data/faq";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const BASE_URL = "https://kyoei-shigyo.jp";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const pageUrl = `${BASE_URL}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: post.title,
      description: post.description,
      url: pageUrl,
      locale: "ja_JP",
      type: "article",
      publishedTime: post.date,
    },
  };
}

// 記事コンテンツのレンダリング
function renderContent(post: (typeof blogPosts)[number]) {
  return post.content.map((block, i) => {
    switch (block.type) {
      case "h2":
        return (
          <h2 key={i} className="text-xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b-2 border-green-700 inline-block">
            {block.text}
          </h2>
        );
      case "h3":
        return (
          <h3 key={i} className="text-base font-bold text-gray-800 mt-6 mb-2 flex items-center gap-2">
            <span className="w-1 h-4 bg-green-600 shrink-0" />
            {block.text}
          </h3>
        );
      case "p":
        return (
          <p key={i} className="text-gray-700 leading-relaxed text-sm lg:text-base mb-4">
            {block.text}
          </p>
        );
      case "ul":
        return (
          <ul key={i} className="my-4 space-y-2">
            {block.items.map((item, j) => (
              <li key={j} className="flex items-start gap-2.5 text-sm text-gray-700">
                <span className="w-1.5 h-1.5 bg-green-600 shrink-0 mt-2" />
                {item}
              </li>
            ))}
          </ul>
        );
      case "note":
        return (
          <div key={i} className="my-6 bg-green-50 border-l-4 border-green-600 px-5 py-4">
            <div className="flex items-start gap-2">
              <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-green-800 text-sm leading-relaxed">{block.text}</p>
            </div>
          </div>
        );
    }
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // この記事に関連するFAQ
  const relatedFaqs = allFaqs.filter((faq) => faq.slug === slug);

  // 関連記事（同カテゴリ、自分以外）
  const relatedPosts = blogPosts.filter(
    (p) => p.slug !== slug && p.category === post.category
  ).slice(0, 3);

  const pageUrl = `${BASE_URL}/blog/${post.slug}`;

  // 記事スキーマ（Article）
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: pageUrl,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "共栄紙業株式会社",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "共栄紙業株式会社",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };

  // パンくずスキーマ
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム",           item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "コラム・ブログ",   item: `${BASE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title,         item: pageUrl },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title={post.title}
        subtitle={post.description}
        breadcrumb="コラム・ブログ"
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

            {/* メインコンテンツ */}
            <article>
              {/* メタ情報 */}
              <div className="flex flex-wrap items-center gap-3 mb-8 pb-6 border-b border-gray-200">
                <span className="text-xs font-semibold bg-green-100 text-green-800 border border-green-200 px-2.5 py-1">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 font-accent">{post.date}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  約{post.readingTime}
                </span>
              </div>

              {/* 記事本文 */}
              <div className="prose-custom">
                {renderContent(post)}
              </div>

              {/* 関連FAQ */}
              {relatedFaqs.length > 0 && (
                <div className="mt-12 border-t border-gray-200 pt-8">
                  <h3 className="font-bold text-gray-900 text-base mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-green-700 shrink-0" />
                    この記事に関連するよくある質問
                  </h3>
                  <div className="space-y-3">
                    {relatedFaqs.map((faq) => (
                      <div key={faq.id} className="bg-gray-50 border border-gray-200 p-4">
                        <p className="font-semibold text-sm text-gray-900 mb-1">
                          <span className="font-accent text-green-700 mr-1">Q.</span>
                          {faq.question}
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-accent text-gray-400 mr-1">A.</span>
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Link href="/faq" className="text-sm text-green-700 font-semibold hover:underline flex items-center gap-1">
                      すべてのよくある質問を見る
                      <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}

              {/* ナビゲーション */}
              <div className="mt-10 pt-8 border-t border-gray-200 flex gap-4">
                <Link href="/blog" className="btn-outline text-sm px-5 py-2 inline-flex items-center gap-2">
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  記事一覧へ
                </Link>
              </div>
            </article>

            {/* サイドバー */}
            <aside className="space-y-8">
              {/* CTA */}
              <div className="bg-gray-900 p-6 border-t-4 border-green-700">
                <p className="text-white font-bold text-sm mb-2">お気軽にご相談ください</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">
                  見積り・ご相談は無料です。担当者が丁寧にご案内します。
                </p>
                <Link href="/contact" className="block text-center bg-green-700 text-white text-sm font-bold py-3 hover:bg-green-800 transition-colors">
                  無料でお問い合わせ
                </Link>
              </div>

              {/* 関連記事 */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b-2 border-green-700 inline-block">
                    関連記事
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block border border-gray-200 border-l-4 border-l-green-600 p-4 hover:bg-green-50 transition-colors group"
                      >
                        <p className="text-xs text-gray-400 mb-1 font-accent">{p.date}</p>
                        <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors leading-snug">
                          {p.title}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* 全記事一覧 */}
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b-2 border-green-700 inline-block">
                  カテゴリ
                </h3>
                <div className="space-y-1">
                  {["料金・費用", "サービス", "機密文書", "対応エリア", "法令・知識", "廃棄物管理", "BPO"].map((cat) => {
                    const count = blogPosts.filter((p) => p.category === cat).length;
                    return (
                      <div key={cat} className="flex items-center justify-between py-2 border-b border-gray-100 text-sm text-gray-600">
                        <span>{cat}</span>
                        <span className="font-accent text-xs text-gray-400">{count}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">ご不明な点はお気軽にご相談ください</h2>
              <p className="text-gray-500 text-sm">見積り・ご相談は無料。担当者が丁寧にご案内します。</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              無料でお問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
