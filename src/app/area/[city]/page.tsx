import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { cities, serviceItems, getCityBySlug } from "@/data/locations";

type Props = { params: Promise<{ city: string }> };

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }));
}

const BASE_URL = "https://kyoei-shigyo.jp";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};
  const pageUrl = `${BASE_URL}/area/${city.slug}`;
  return {
    title: `${city.name}の古紙・資源回収サービス`,
    description: `${city.pref}${city.name}の古紙回収・機密書類処理・金属スクラップ回収・産業廃棄物収集運搬は共栄紙業へ。${city.accessNote}`,
    alternates: { canonical: pageUrl },
    openGraph: {
      title: `${city.name}の古紙・資源回収サービス | 共栄紙業株式会社`,
      description: `${city.pref}${city.name}の古紙回収・機密書類処理・金属スクラップ・産業廃棄物収集運搬は共栄紙業へ。`,
      url: pageUrl,
      locale: "ja_JP",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RecyclingCenter"],
    name: "共栄紙業株式会社",
    description: `${city.name}の古紙・資源リサイクル・機密書類処理・産業廃棄物収集運搬`,
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: { "@type": "State", name: city.pref },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: city.pref,
      addressCountry: "JP",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${city.name}向けリサイクルサービス`,
      itemListElement: serviceItems.map((item) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: item.name },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: `${BASE_URL}/` },
      { "@type": "ListItem", position: 2, name: "対応エリア", item: `${BASE_URL}/area` },
      { "@type": "ListItem", position: 3, name: city.name, item: `${BASE_URL}/area/${city.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHero
        title={`${city.name}の古紙・資源回収`}
        subtitle={`${city.pref}${city.name}での古紙回収・機密書類処理・金属スクラップ・産業廃棄物収集運搬に対応しています。`}
        breadcrumb={city.name}
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* エリア紹介 */}
          <div className="mb-12 p-7 bg-gray-50 border-l-4 border-green-700">
            <p className="text-gray-700 text-sm leading-relaxed mb-3">{city.geoNote}</p>
            <p className="text-gray-500 text-xs flex items-center gap-1.5">
              <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              対応拠点：{city.nearestFactory}
            </p>
          </div>

          {/* 地域産業データ */}
          <div className="mb-14">
            <div className="mb-6">
              <span className="sec-label">Local Industry</span>
              <h2 className="sec-title">{city.name}の産業特性</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200">
              {/* 産業特徴 */}
              <div className="bg-white p-6">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-4">
                  <span className="w-5 h-5 bg-green-700 flex items-center justify-center shrink-0">
                    <svg aria-hidden="true" focusable="false" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h2v2H7V5zm0 4h2v2H7V9zm0 4h2v2H7v-2zm4-8h2v2h-2V5zm0 4h2v2h-2V9zm0 4h2v2h-2v-2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  地域の産業特徴
                </h3>
                <ul className="space-y-2">
                  {city.industryFeatures.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 bg-green-600 shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 企業数が多い業種 */}
              <div className="bg-white p-6">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-4">
                  <span className="w-5 h-5 bg-green-700 flex items-center justify-center shrink-0">
                    <svg aria-hidden="true" focusable="false" className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                  </span>
                  企業数が多い業種
                </h3>
                <ul className="space-y-2">
                  {city.majorIndustries.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 bg-green-600 shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 産廃発生しやすい業種 */}
              <div className="bg-white p-6">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-4">
                  <span className="w-5 h-5 bg-amber-600 flex items-center justify-center shrink-0">
                    <svg aria-hidden="true" focusable="false" className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </span>
                  産業廃棄物が発生しやすい業種
                </h3>
                <ul className="space-y-2">
                  {city.wasteIndustries.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 bg-amber-500 shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* 地域課題 */}
              <div className="bg-white p-6">
                <h3 className="flex items-center gap-2 font-bold text-gray-900 text-sm mb-4">
                  <span className="w-5 h-5 bg-gray-700 flex items-center justify-center shrink-0">
                    <svg aria-hidden="true" focusable="false" className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  産廃処理に関する地域課題
                </h3>
                <ul className="space-y-2">
                  {city.regionalChallenges.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="w-1 h-1 bg-gray-500 shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* サービス一覧 */}
          <div className="mb-10">
            <span className="sec-label">Services</span>
            <h2 className="sec-title">{city.name}で対応しているサービス</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 mb-14">
            {serviceItems.map((item) => (
              <Link
                key={item.slug}
                href={`/area/${city.slug}/${item.slug}`}
                className="bg-white p-7 border-t-4 border-green-700 flex flex-col gap-4 hover:bg-green-50 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="text-xs font-semibold bg-green-100 text-green-800 border border-green-200 px-2 py-0.5 mb-2 inline-block">
                      {item.legalCategory}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                      {city.name}の{item.shortName}
                    </h3>
                  </div>
                  <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-600 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{item.tagline}</p>
                <ul className="space-y-1.5 mt-auto">
                  {item.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-gray-600">
                      <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          {/* 他エリアへのリンク */}
          <div className="bg-gray-50 border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest font-accent">Other Areas</p>
              <Link href="/area" className="text-xs text-green-700 font-semibold hover:underline flex items-center gap-1">
                エリア一覧へ
                <svg aria-hidden="true" focusable="false" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {cities
                .filter((c) => c.slug !== city.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    href={`/area/${c.slug}`}
                    className="text-sm text-gray-700 border border-gray-300 px-3 py-1.5 hover:border-green-600 hover:text-green-700 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">{city.name}でのご相談・お見積り</h2>
              <p className="text-gray-500 text-sm">{city.accessNote}</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
