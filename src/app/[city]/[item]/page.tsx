import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { cities, serviceItems, getCityBySlug, getItemBySlug } from "@/data/locations";

type Props = { params: Promise<{ city: string; item: string }> };

export function generateStaticParams() {
  return cities.flatMap((city) =>
    serviceItems.map((item) => ({ city: city.slug, item: item.slug }))
  );
}

const BASE_URL = "https://kyoei-shigyo.jp";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, item: itemSlug } = await params;
  const city = getCityBySlug(citySlug);
  const item = getItemBySlug(itemSlug);
  if (!city || !item) return {};
  const pageUrl = `${BASE_URL}/${city.slug}/${item.slug}`;
  return {
    title: `${city.name}の${item.shortName}｜共栄紙業株式会社`,
    description: `${city.pref}${city.name}の${item.name}なら共栄紙業へ。${item.tagline}${city.accessNote}`,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${city.name}の${item.shortName} | 共栄紙業株式会社`,
      description: `${city.name}の${item.name}なら共栄紙業へ。${item.tagline}`,
      url: pageUrl,
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function CityItemPage({ params }: Props) {
  const { city: citySlug, item: itemSlug } = await params;
  const city = getCityBySlug(citySlug);
  const item = getItemBySlug(itemSlug);
  if (!city || !item) notFound();

  const otherItems = serviceItems.filter((i) => i.slug !== item.slug);
  const otherCities = cities.filter((c) => c.slug !== city.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${city.name}の${item.name}`,
    description: item.description,
    provider: {
      "@type": "LocalBusiness",
      name: "共栄紙業株式会社",
      address: {
        "@type": "PostalAddress",
        addressLocality: city.name,
        addressRegion: city.pref,
        addressCountry: "JP",
      },
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: city.pref },
    },
    serviceType: item.name,
    audience: { "@type": "Audience", audienceType: "法人・企業" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: item.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q.replace(/\?$/, `（${city.name}）`),
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム",     item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "対応エリア", item: `${BASE_URL}/area` },
      { "@type": "ListItem", position: 3, name: city.name,   item: `${BASE_URL}/${city.slug}` },
      { "@type": "ListItem", position: 4, name: item.name,   item: `${BASE_URL}/${city.slug}/${item.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title={`${city.name}の${item.shortName}`}
        subtitle={item.tagline}
        breadcrumb={`${city.name} / ${item.shortName}`}
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

            {/* メインコンテンツ */}
            <div>

              {/* ① リード文 */}
              <div className="mb-12 p-6 bg-gray-50 border-l-4 border-green-700">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold bg-green-100 text-green-800 border border-green-200 px-2 py-0.5">
                    {item.legalCategory}
                  </span>
                  <span className="text-xs text-gray-400">対応エリア：{city.pref}{city.name}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">{item.description}</p>
                <p className="text-xs text-gray-500 flex items-center gap-1.5">
                  <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  {city.accessNote}
                </p>
              </div>

              {/* ② 業者一覧 */}
              <div className="mb-14">
                <div className="mb-6">
                  <span className="sec-label">Local Vendors</span>
                  <h2 className="sec-title">{city.name}で依頼できる主な業者</h2>
                  <p className="text-gray-500 text-sm mt-2">
                    {city.name}エリアで{item.shortName}を請け負っている主な業者の一覧です。業者ごとの対応サービス・特徴を確認して、自社に合った業者をお選びください。
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm min-w-[560px]">
                    <thead>
                      <tr className="bg-gray-900">
                        <th className="text-left px-4 py-3 text-xs font-semibold text-white">業者名</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-white">所在地</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-white">対応サービス</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-white">特徴</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {city.competitors.map((comp, i) => (
                        <tr key={i} className="bg-white hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 font-semibold text-gray-800 whitespace-nowrap">{comp.name}</td>
                          <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{comp.address}</td>
                          <td className="px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                              {comp.services.map((s, j) => (
                                <span key={j} className="text-xs bg-gray-100 text-gray-600 border border-gray-200 px-2 py-0.5">{s}</span>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{comp.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-2">※ 上記は参考情報です。最新情報は各業者に直接お問い合わせください。</p>
              </div>

              {/* ③ 共栄紙業の対応内容と料金 */}
              <div className="mb-14">
                <div className="mb-6">
                  <span className="sec-label">Kyoei's Service</span>
                  <h2 className="sec-title">共栄紙業の対応内容と料金</h2>
                </div>

                {/* 料金説明 */}
                <div className="mb-6 p-5 bg-amber-50 border border-amber-200">
                  <p className="text-sm text-amber-900 leading-relaxed">{item.pricingNote}</p>
                </div>

                {/* 料金テーブル */}
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse text-sm min-w-[480px]">
                    <thead>
                      <tr className="bg-green-700">
                        <th className="text-left px-4 py-3 text-xs font-semibold text-white">条件・ケース</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-white">料金目安</th>
                        <th className="text-left px-4 py-3 text-xs font-semibold text-white">補足</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {item.pricingTiers.map((tier, i) => (
                        <tr key={i} className="bg-white">
                          <td className="px-4 py-3 font-medium text-gray-800">{tier.condition}</td>
                          <td className="px-4 py-3 font-bold text-green-700 whitespace-nowrap">{tier.price}</td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{tier.note ?? "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 共栄紙業の強み */}
                <div className="mb-2">
                  <h3 className="font-bold text-gray-900 text-sm mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-green-700 shrink-0" />
                    共栄紙業が選ばれる理由
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
                    {item.kyoeiAdvantages.map((adv, i) => (
                      <div key={i} className="bg-white px-5 py-4 flex items-start gap-3">
                        <div className="w-5 h-5 bg-green-700 flex items-center justify-center shrink-0 mt-0.5">
                          <svg aria-hidden="true" focusable="false" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ④ ご依頼の流れ */}
              <div className="mb-14">
                <div className="mb-6">
                  <span className="sec-label">How It Works</span>
                  <h2 className="sec-title">ご依頼の流れ</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-px bg-gray-200">
                  {[
                    { step: "01", label: "お問い合わせ", desc: "電話またはフォームでご連絡ください。当日〜翌日に担当者からご連絡します。" },
                    { step: "02", label: "現地確認・見積", desc: "担当者が品目・量・頻度を確認し、無料でお見積りをご提出します。" },
                    { step: "03", label: "契約・日程調整", desc: "ご希望の回収スケジュールを調整します。定期・スポットどちらも対応。" },
                    { step: "04", label: "回収・証明書発行", desc: "回収後に処理証明書を発行します。記録保管・行政対応にご活用ください。" },
                  ].map((s) => (
                    <div key={s.step} className="bg-white px-5 py-6 text-center">
                      <div className="font-accent text-3xl font-bold text-green-700 mb-2">{s.step}</div>
                      <p className="font-bold text-gray-900 text-sm mb-2">{s.label}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ⑤ FAQ */}
              <div className="mb-12">
                <div className="mb-6">
                  <span className="sec-label">FAQ</span>
                  <h2 className="sec-title">{city.name}の{item.shortName}に関するよくある質問</h2>
                </div>
                <div className="space-y-px bg-gray-200">
                  {item.faqs.map((faq, i) => (
                    <details key={i} className="group bg-white overflow-hidden">
                      <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer hover:bg-green-50 transition-colors list-none">
                        <span className="font-semibold text-gray-900 text-sm">
                          <span className="font-accent text-green-700 mr-2">Q.</span>
                          {faq.q}
                        </span>
                        <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-600 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-6 pb-5 pt-4 border-t border-gray-100 bg-gray-50">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          <span className="font-accent text-gray-400 mr-2">A.</span>
                          {faq.a}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/faq" className="text-sm text-green-700 font-semibold hover:underline flex items-center gap-1">
                    よくある質問をすべて見る
                    <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* ⑥ 同エリアの他サービス */}
              <div>
                <h3 className="font-bold text-gray-900 text-sm pb-2 mb-4 border-b-2 border-green-700 inline-block">
                  {city.name}で対応している他のサービス
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
                  {otherItems.map((other) => (
                    <Link
                      key={other.slug}
                      href={`/${city.slug}/${other.slug}`}
                      className="bg-white px-5 py-4 hover:bg-green-50 transition-colors group border-t-2 border-green-700"
                    >
                      <p className="font-semibold text-sm text-gray-900 group-hover:text-green-700 transition-colors mb-1">
                        {city.name}の{other.shortName}
                      </p>
                      <p className="text-xs text-gray-500">{other.tagline}</p>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* サイドバー */}
            <aside className="space-y-8">

              {/* CTA */}
              <div className="bg-gray-900 p-6 border-t-4 border-green-700">
                <p className="text-white font-bold text-sm mb-1">{city.name}でのご相談・見積り</p>
                <p className="text-gray-400 text-xs leading-relaxed mb-5">見積り・ご相談は無料です。まずはお気軽にご連絡ください。</p>
                <Link href="/contact" className="block text-center bg-green-700 text-white text-sm font-bold py-3 hover:bg-green-800 transition-colors">
                  無料でお問い合わせ
                </Link>
                <Link href={item.serviceHref} className="block text-center border border-gray-600 text-gray-300 text-xs py-2.5 mt-2 hover:border-gray-400 transition-colors">
                  サービス詳細を見る
                </Link>
              </div>

              {/* 他エリアでの同サービス */}
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-4 pb-2 border-b-2 border-green-700 inline-block">
                  他エリアの{item.shortName}
                </h3>
                <div className="space-y-1">
                  {otherCities.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/${c.slug}/${item.slug}`}
                      className="flex items-center justify-between py-2.5 border-b border-gray-100 text-sm text-gray-600 hover:text-green-700 transition-colors group"
                    >
                      <span>{c.name}の{item.shortName}</span>
                      <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-gray-400 group-hover:text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* エリアページへ */}
              <Link
                href={`/${city.slug}`}
                className="block border border-gray-200 border-l-4 border-l-green-600 p-4 hover:bg-green-50 transition-colors group"
              >
                <p className="text-xs text-gray-400 mb-1">エリア情報</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                  {city.name}の全サービスを見る →
                </p>
              </Link>

              {/* エリア一覧へ */}
              <Link
                href="/area"
                className="block border border-gray-200 border-l-4 border-l-gray-400 p-4 hover:bg-gray-50 transition-colors group"
              >
                <p className="text-xs text-gray-400 mb-1">対応エリア</p>
                <p className="text-sm font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                  全対応エリアを見る →
                </p>
              </Link>

            </aside>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">
                {city.name}の{item.shortName}について相談する
              </h2>
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
