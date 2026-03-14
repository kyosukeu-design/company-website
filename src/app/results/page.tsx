import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "実績",
  description: "共栄紙業の取引実績。製造業・物流・小売・オフィスなど幅広い業種の企業様との取引実績。",
  alternates: { canonical: `${BASE_URL}/results` },
  openGraph: {
    title: "実績 | 共栄紙業株式会社",
    description: "共栄紙業の取引実績。製造業・物流・小売・オフィスなど幅広い業種の企業様との古紙回収・廃棄物管理サービスの実績をご紹介します。",
    url: `${BASE_URL}/results`,
    locale: "ja_JP",
    type: "website",
  },
};

const stats = [
  { value: "1,200社+", label: "累計取引社数", desc: "兵庫・大阪を中心に幅広い業種" },
  { value: "40年", label: "の業歴", desc: "1984年創業。長年の信頼と実績" },
  { value: "月3,000t+", label: "の回収量", desc: "安定した処理能力と体制" },
  { value: "99.8%", label: "継続率", desc: "高い顧客満足度の継続回収率" },
];

const industries = [
  {
    name: "製造業",
    icon: "🏭",
    cases: ["製造工程で生じる段ボール・梱包材の定期回収", "金属スクラップ・切削くずの回収・買取", "工場移転に伴う大量廃棄のスポット対応"],
  },
  {
    name: "物流・倉庫業",
    icon: "🚛",
    cases: ["倉庫から発生する大量段ボールの定期回収", "梱包材・パレットのリサイクル対応", "複数拠点の一括管理・回収"],
  },
  {
    name: "小売・スーパー",
    icon: "🛒",
    cases: ["店舗から毎日発生する段ボールの毎日回収", "食品トレー・プラスチック類の分別回収", "チェーン全店舗の統一管理"],
  },
  {
    name: "オフィス・企業",
    icon: "🏢",
    cases: ["コピー用紙・書類の定期回収", "機密文書・個人情報書類の安全処理", "オフィス移転時の一括廃棄対応"],
  },
  {
    name: "病院・医療機関",
    icon: "🏥",
    cases: ["患者記録・医療書類の機密廃棄", "段ボール・梱包材の定期回収", "処理証明書の定期発行"],
  },
  {
    name: "学校・教育機関",
    icon: "🏫",
    cases: ["古紙・教材の定期回収", "図書・書籍の処分対応", "年度末の大量廃棄スポット対応"],
  },
];

const voices = [
  {
    company: "食品製造業 A社様",
    size: "従業員300名",
    content: "毎日大量に発生する段ボールの処理に困っていましたが、週3回の定期回収に対応いただき、保管スペースの問題が解消されました。",
    result: "保管コスト50%削減",
  },
  {
    company: "物流会社 B社様",
    size: "従業員150名",
    content: "複数の倉庫拠点をまとめて管理していただき、各拠点での段ボール回収が効率化されました。処理証明書の発行も迅速です。",
    result: "管理工数70%削減",
  },
  {
    company: "IT企業 C社様",
    size: "従業員80名",
    content: "個人情報保護の観点から機密書類の処分に悩んでいましたが、廃棄証明書を発行していただき、コンプライアンス対応ができました。",
    result: "情報漏洩リスクゼロ",
  },
];

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="実績"
        subtitle="創業40年、1,200社以上の企業様のリサイクルをサポートしてきました。"
        breadcrumb="実績"
      />

      {/* Stats */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-6 text-center border-t-4 border-green-700">
                <div className="font-accent text-2xl lg:text-3xl font-bold text-green-700 mb-1">{s.value}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{s.label}</div>
                <div className="text-gray-500 text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-sm mb-2 uppercase tracking-wider">Industries</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">対応業種・事例</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white p-6 border-t-4 border-green-700">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{ind.icon}</span>
                  <h3 className="font-bold text-gray-900">{ind.name}</h3>
                </div>
                <ul className="space-y-2">
                  {ind.cases.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-600">
                      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-sm mb-2 uppercase tracking-wider">Voice</p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">お客様の声</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200">
            {voices.map((v) => (
              <div key={v.company} className="bg-white p-6 border-t-4 border-green-700">
                <div className="flex items-start gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">&ldquo;{v.content}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{v.company}</div>
                      <div className="text-gray-500 text-xs">{v.size}</div>
                    </div>
                    <div className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {v.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">御社の課題、まずはご相談ください</h2>
              <p className="text-gray-500 text-sm">業種・規模を問わず、最適な回収プランをご提案します。</p>
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
