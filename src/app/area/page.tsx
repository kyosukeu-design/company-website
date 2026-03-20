import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { cities, serviceItems } from "@/data/locations";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "対応エリア",
  description: "共栄紙業の資源・廃棄物回収エリア。兵庫県（尼崎・神戸・西宮・宝塚・川西・芦屋・伊丹・姫路・明石・加古川ほか）・大阪府（大阪・豊中・吹田・池田）対応。廃棄物管理・BPOは全国対応。",
  alternates: { canonical: `${BASE_URL}/area` },
  openGraph: {
    title: "対応エリア | 共栄紙業株式会社",
    description: "古紙・資源回収は兵庫県・大阪府の13市町に詳細ページあり。廃棄物管理・BPOサービスは全国対応。エリア別サービス詳細もご確認いただけます。",
    url: `${BASE_URL}/area`,
    locale: "ja_JP",
    type: "website",
  },
};

// locations.ts で管理しているエリア（詳細ページあり）
const hyogoCities = cities.filter((c) => c.pref === "兵庫県");
const osakaCities = cities.filter((c) => c.pref === "大阪府");

// 詳細ページなし（テキストのみ）の対応エリア
const hyogoOther = [
  "高砂市", "加西市", "西脇市", "その他兵庫県内（要相談）",
];
const osakaOther = [
  "堺市", "東大阪市", "高槻市", "枚方市", "茨木市", "箕面市",
  "守口市", "門真市", "松原市", "八尾市", "その他大阪府内（要相談）",
];

export default function AreaPage() {
  return (
    <>
      <PageHero
        title="対応エリア"
        subtitle="古紙・資源回収は兵庫県・大阪府を中心に対応。廃棄物管理・BPOサービスは全国対応しています。"
        breadcrumb="対応エリア"
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── 全国対応サービス ── */}
          <div className="mb-16">
            <div className="mb-8">
              <span className="sec-label">Nationwide</span>
              <h2 className="sec-title">全国対応サービス</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 mb-6">
              <div className="bg-white p-7 border-t-4 border-green-700">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-700 flex items-center justify-center shrink-0">
                    <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">廃棄物管理サービス</h3>
                      <span className="font-accent text-xs bg-green-100 text-green-800 border border-green-200 px-2 py-0.5 font-semibold">全国対応</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      廃棄物業者の選定・コスト最適化・行政対応・法令遵守サポートなど、廃棄物管理に関する業務を全国の企業様へリモートでご提供しています。
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-7 border-t-4 border-green-700">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-700 flex items-center justify-center shrink-0">
                    <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-gray-900">BPO（バックオフィス代行）</h3>
                      <span className="font-accent text-xs bg-green-100 text-green-800 border border-green-200 px-2 py-0.5 font-semibold">全国対応</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      請求書受領・発行・データ登録など、社内のあらゆるバックオフィス業務をオンラインで代行します。全国の企業様からご依頼いただけます。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-green-50 border-l-4 border-green-700 px-5 py-4">
              <p className="text-green-800 text-sm">
                <span className="font-semibold">廃棄物管理・BPOサービスは全国対応しています。</span>
                オンラインでのご相談・業務委託が可能ですので、エリアを問わずお気軽にお問い合わせください。
              </p>
            </div>
          </div>

          {/* ── 回収対応エリア（詳細ページあり） ── */}
          <div className="mb-16">
            <div className="mb-4">
              <span className="sec-label">Collection Area</span>
              <h2 className="sec-title">資源・廃棄物回収エリア</h2>
              <p className="text-gray-500 text-sm mt-2">
                各エリアの詳細ページでは、対応サービスの内容・料金・地域の業者情報を確認できます。
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 px-5 py-4 mb-10 flex flex-wrap items-center gap-3">
              <span className="font-accent text-xs font-bold tracking-widest text-gray-500 uppercase">対応エリア</span>
              <span className="bg-green-700 text-white text-xs px-3 py-1 font-semibold">兵庫県 全域</span>
              <span className="bg-green-700 text-white text-xs px-3 py-1 font-semibold">大阪府 全域</span>
              <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1">京都府（一部）</span>
              <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1">奈良県（一部）</span>
              <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1">滋賀県（一部）</span>
              <span className="text-xs text-gray-400">※ エリア外でも対応できる場合があります</span>
            </div>

            {/* 兵庫県 */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-green-700 px-4 py-1.5 flex items-center gap-2">
                  <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-white font-bold text-sm">兵庫県</span>
                </div>
                <span className="text-gray-400 text-xs">{hyogoCities.length}市町の詳細ページあり</span>
              </div>

              {/* 詳細ページあり：カード形式 */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-gray-200 mb-4">
                {hyogoCities.map((city) => (
                  <div key={city.slug} className="bg-white border-t-2 border-green-700">
                    {/* エリア名 → /[city] */}
                    <Link
                      href={`/area/${city.slug}`}
                      className="flex items-center justify-between px-5 py-3.5 hover:bg-green-50 transition-colors group border-b border-gray-100"
                    >
                      <div>
                        <span className="text-xs text-gray-400">{city.pref}</span>
                        <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{city.name}</h3>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{city.accessNote}</p>
                      </div>
                      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    {/* 各サービス → /[city]/[item] */}
                    <div className="px-5 py-3 grid grid-cols-2 gap-1">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/area/${city.slug}/${item.slug}`}
                          className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-green-700 transition-colors group/link py-0.5"
                        >
                          <span className="w-1 h-1 bg-green-500 shrink-0 group-hover/link:bg-green-700 transition-colors" />
                          {item.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 詳細ページなし：テキストリスト */}
              <div className="bg-gray-50 border border-gray-200 px-5 py-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">その他対応エリア（兵庫県）</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {hyogoOther.map((area) => (
                    <span key={area} className="flex items-center gap-1.5 text-sm text-gray-600">
                      <span className="w-1 h-1 bg-gray-400 shrink-0" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 大阪府 */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-green-700 px-4 py-1.5 flex items-center gap-2">
                  <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-white font-bold text-sm">大阪府</span>
                </div>
                <span className="text-gray-400 text-xs">{osakaCities.length}市の詳細ページあり</span>
              </div>

              {/* 詳細ページあり：カード形式 */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-gray-200 mb-4">
                {osakaCities.map((city) => (
                  <div key={city.slug} className="bg-white border-t-2 border-green-700">
                    <Link
                      href={`/area/${city.slug}`}
                      className="flex items-center justify-between px-5 py-3.5 hover:bg-green-50 transition-colors group border-b border-gray-100"
                    >
                      <div>
                        <span className="text-xs text-gray-400">{city.pref}</span>
                        <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{city.name}</h3>
                        <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{city.accessNote}</p>
                      </div>
                      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <div className="px-5 py-3 grid grid-cols-2 gap-1">
                      {serviceItems.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/area/${city.slug}/${item.slug}`}
                          className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-green-700 transition-colors group/link py-0.5"
                        >
                          <span className="w-1 h-1 bg-green-500 shrink-0 group-hover/link:bg-green-700 transition-colors" />
                          {item.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* 詳細ページなし：テキストリスト */}
              <div className="bg-gray-50 border border-gray-200 px-5 py-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">その他対応エリア（大阪府）</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {osakaOther.map((area) => (
                    <span key={area} className="flex items-center gap-1.5 text-sm text-gray-600">
                      <span className="w-1 h-1 bg-gray-400 shrink-0" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 滋賀県 */}
            <div className="mt-12">
              <div className="flex items-center gap-3 mb-5">
                <div className="bg-gray-600 px-4 py-1.5 flex items-center gap-2">
                  <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-white font-bold text-sm">滋賀県</span>
                </div>
                <span className="text-gray-400 text-xs">一部エリア対応（要相談）</span>
              </div>
              <div className="bg-gray-50 border border-gray-200 px-5 py-4">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">対応エリア（滋賀県）</p>
                <div className="flex flex-wrap gap-x-6 gap-y-1.5">
                  {["大津市", "草津市", "守山市", "栗東市", "野洲市", "その他滋賀県内（要相談）"].map((area) => (
                    <span key={area} className="flex items-center gap-1.5 text-sm text-gray-600">
                      <span className="w-1 h-1 bg-gray-400 shrink-0" />
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 注意事項 */}
          <div className="border-l-4 border-green-700 pl-5 space-y-2">
            <h3 className="font-bold text-gray-900 text-sm mb-2">回収エリアについてのご注意</h3>
            {[
              "上記エリア外でも、回収量・品目によっては対応可能な場合があります。まずはご相談ください。",
              "定期回収の場合、複数拠点をまとめてご契約いただくことで広域対応が可能です。",
              "京都・奈良・和歌山等の周辺エリアについては個別にご相談ください。",
            ].map((note) => (
              <p key={note} className="text-sm text-gray-600">・{note}</p>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">エリアについてのご確認・お問い合わせ</h2>
              <p className="text-gray-500 text-sm">お客様の所在地が対応エリア内かどうか、まずはお気軽にご確認ください。</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              エリアを確認する
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
