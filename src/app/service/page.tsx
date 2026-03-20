import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { cities, serviceItems } from "@/data/locations";
import { services } from "@/data/services";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "サービス",
  description: "共栄紙業の資源リサイクルサービス一覧。古紙・廃プラスチック・発泡スチロール・飲料容器・産業廃棄物の収集運搬処分・機密書類処理・有価物買取に対応。",
  alternates: { canonical: `${BASE_URL}/service` },
  openGraph: {
    title: "サービス | 共栄紙業株式会社",
    description: "古紙・廃プラスチック・発泡スチロール・飲料容器・産業廃棄物・機密書類処理・有価物買取。回収頻度は定期・スポットからお選びいただけます。",
    url: `${BASE_URL}/service`,
    locale: "ja_JP",
    type: "website",
  },
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        title="サービス"
        subtitle="品目ごとに最適な回収・処理をご提案します。回収頻度は定期・スポットからお選びいただけます。"
        breadcrumb="サービス"
      />

      {/* 回収頻度の説明バナー */}
      <div className="bg-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
          <p className="text-sm font-semibold shrink-0">回収頻度について</p>
          <div className="flex flex-wrap gap-6 text-sm text-green-100">
            <span><span className="text-white font-bold mr-1.5">定期回収</span>週1回・隔週・月1回など固定スケジュールで継続的に回収</span>
            <span><span className="text-white font-bold mr-1.5">スポット回収</span>移転・整理など一時的に大量発生した際の単発対応（最短翌日）</span>
          </div>
        </div>
      </div>

      {/* メインサービス */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Services</span>
            <h2 className="sec-title">取り扱い品目・サービス</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200">
            {services.map((s) => (
              <Link
                key={s.id}
                href={`/service/${s.id}`}
                className="bg-white p-6 border-t-4 border-green-700 flex flex-col group hover:bg-green-50 transition-colors"
              >
                <p className="font-accent text-green-700 text-xs font-bold tracking-widest mb-1">{s.num}</p>
                <h2 className="text-base font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">{s.title}</h2>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1">{s.shortDesc}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {s.targets.slice(0, 3).map((t) => (
                    <span key={t} className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5">{t}</span>
                  ))}
                  {s.targets.length > 3 && (
                    <span className="text-xs text-gray-400">+{s.targets.length - 3}</span>
                  )}
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-green-700 font-semibold mt-auto">
                  詳細を見る
                  <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* エリア別サービス */}
      <section className="py-14 lg:py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Local Service</span>
            <h2 className="sec-title">エリア別サービス</h2>
            <p className="text-gray-500 text-sm mt-3">対応エリアごとのサービス詳細ページをご用意しています。</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-900">
                  <th className="text-left px-4 py-3 text-xs font-accent text-gray-400 tracking-widest w-28">エリア</th>
                  {serviceItems.map((item) => (
                    <th key={item.slug} className="px-4 py-3 text-center text-xs font-semibold text-white">
                      {item.shortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cities.map((city) => (
                  <tr key={city.slug} className="bg-white hover:bg-green-50 transition-colors">
                    <td className="px-4 py-3">
                      <Link href={`/area/${city.slug}`} className="text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors">
                        {city.name}
                      </Link>
                    </td>
                    {serviceItems.map((item) => (
                      <td key={item.slug} className="px-4 py-3 text-center">
                        <Link
                          href={`/area/${city.slug}/${item.slug}`}
                          className="inline-flex items-center justify-center gap-1 text-xs text-green-700 border border-green-300 bg-green-50 px-3 py-1 hover:bg-green-700 hover:text-white hover:border-green-700 transition-colors"
                        >
                          詳細
                        </Link>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">ご不明な点はお気軽にご相談ください</h2>
              <p className="text-gray-500 text-sm">品目・回収頻度・料金など、担当者が丁寧にご案内します。</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              お問い合わせ・お見積り
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
