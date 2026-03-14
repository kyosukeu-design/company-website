import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { cities, serviceItems } from "@/data/locations";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "サービス",
  description: "共栄紙業の古紙・資源リサイクル・廃棄物管理・BPOサービスをご紹介します。定期回収・スポット回収・機密書類処理・廃棄物コンサルティング・バックオフィス代行など。",
  alternates: { canonical: `${BASE_URL}/service` },
  openGraph: {
    title: "サービス | 共栄紙業株式会社",
    description: "古紙・資源リサイクル・廃棄物管理・BPO。定期回収・スポット回収・機密書類処理・廃棄物コンサルティング・バックオフィス代行など幅広くご提供しています。",
    url: `${BASE_URL}/service`,
    locale: "ja_JP",
    type: "website",
  },
};

const services = [
  {
    id: "regular",
    num: "01",
    title: "定期回収サービス",
    badge: "人気No.1",
    desc: "週1回・月2回など、企業様のご都合に合わせたスケジュールで定期的に回収します。大量発生する段ボール・古紙の管理コストを削減できます。",
    features: [
      "週1回〜月1回まで柔軟に対応",
      "専用コンテナの無償貸出",
      "回収量に応じた料金体系",
      "処理証明書の定期発行",
    ],
  },
  {
    id: "spot",
    num: "02",
    title: "スポット回収サービス",
    badge: "最短翌日",
    desc: "オフィス移転・倉庫整理・工場の大量廃棄など、一時的に大量の古紙・資源が発生した際のスポット対応です。",
    features: [
      "最短翌日対応",
      "大型トラックでの一括回収",
      "量に応じた柔軟な対応",
      "作業員による仕分けサポート",
    ],
  },
  {
    id: "confidential",
    num: "03",
    title: "機密文書処理サービス",
    badge: "安全・確実",
    desc: "個人情報・機密情報が含まれる書類を、セキュリティを担保した状態で確実に処理します。処理証明書を発行しますのでコンプライアンス対応も万全です。",
    features: [
      "専用シュレッダー車での現地処理",
      "処理証明書・廃棄証明書の発行",
      "個人情報保護法対応",
      "担当者立会いも可能",
    ],
  },
  {
    id: "purchase",
    num: "04",
    title: "有価買取サービス",
    badge: "コスト削減",
    desc: "回収した古紙・段ボール・金属スクラップ等の品質・量によっては有価での買取を行います。廃棄物処理コストをゼロ、またはプラスにできます。",
    features: [
      "段ボール・新聞・雑誌の買取",
      "金属スクラップの買取",
      "市場価格に連動した適正価格",
      "月次精算に対応",
    ],
  },
  {
    id: "waste-management",
    num: "05",
    title: "廃棄物管理サービス",
    badge: "法令対応",
    desc: "廃棄物に関する業者選定からコスト最適化・行政対応まで、企業の廃棄物管理業務をトータルでサポートします。担当者の業務負担を大幅に削減します。",
    features: [
      "廃棄物処理業者の選定・比較",
      "処理コストの最適化・見直し",
      "行政対応・申請手続きのサポート",
      "法令遵守（廃棄物処理法等）対応",
      "各種データの整理・集計・報告",
      "廃棄物関連事務作業の代行",
    ],
  },
  {
    id: "bpo",
    num: "06",
    title: "BPO（バックオフィス代行）",
    badge: "業務効率化",
    desc: "廃棄物管理に限らず、社内のあらゆるバックオフィス業務・事務作業をアウトソーシングできます。コア業務への集中を実現し、生産性向上に貢献します。",
    features: [
      "請求書受領・内容確認・仕訳支援",
      "請求書発行・送付・管理",
      "各種データ登録・入力・整備",
      "書類作成・ファイリング・管理",
      "社内外との連絡・調整業務",
      "その他バックオフィス業務全般",
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      <PageHero
        title="サービス"
        subtitle="古紙・資源リサイクルから廃棄物管理・バックオフィス代行まで、企業の業務効率化を幅広くサポートします。"
        breadcrumb="サービス"
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Services</span>
            <h2 className="sec-title">サービス一覧</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-px bg-gray-200">
            {services.map((s) => (
              <div key={s.id} className="bg-white p-8 border-t-4 border-green-700">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <p className="font-accent text-green-700 text-xs font-bold tracking-widest mb-1">{s.num}</p>
                    <h2 className="text-lg font-bold text-gray-900">{s.title}</h2>
                  </div>
                  <span className="text-xs bg-green-100 text-green-800 px-3 py-1 font-semibold shrink-0 border border-green-200">
                    {s.badge}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 pb-5 border-b border-gray-100">
                  {s.desc}
                </p>
                <ul className="space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* エリア別サービス */}
      <section className="py-14 lg:py-20 bg-gray-50 border-t border-gray-200">
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
                      <Link
                        href={`/${city.slug}`}
                        className="text-sm font-semibold text-gray-800 hover:text-green-700 transition-colors"
                      >
                        {city.name}
                      </Link>
                    </td>
                    {serviceItems.map((item) => (
                      <td key={item.slug} className="px-4 py-3 text-center">
                        <Link
                          href={`/${city.slug}/${item.slug}`}
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
              <p className="text-gray-500 text-sm">サービス内容・料金について、まずは無料でご相談いただけます。</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              お問い合わせ・無料見積
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
