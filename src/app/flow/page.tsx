import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "回収の流れ",
  description: "共栄紙業の回収サービスご利用の流れ。お問い合わせから回収開始まで丁寧にサポートします。",
  alternates: { canonical: `${BASE_URL}/flow` },
  openGraph: {
    title: "回収の流れ | 共栄紙業株式会社",
    description: "共栄紙業の古紙・資源回収サービスご利用の流れ。お問い合わせ → 現地確認・見積 → ご契約 → 回収開始の4ステップで丁寧にサポートします。",
    url: `${BASE_URL}/flow`,
    locale: "ja_JP",
    type: "website",
  },
};

const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    duration: "当日〜翌日",
    desc: "WEBフォームまたはお電話にてお問い合わせください。回収品目・数量・頻度・エリアをお伝えいただくとスムーズです。",
    items: [
      "WEBフォーム（24時間受付）",
      "お電話（平日 8:00〜17:00）",
      "FAX（24時間受付）",
    ],
    color: "bg-green-600",
  },
  {
    step: "02",
    title: "現地確認・お見積り",
    duration: "2〜3日以内",
    desc: "担当者がご訪問し、回収場所・品目・量を確認いたします。その場でお見積りをご提示することも可能です。",
    items: [
      "無料での現地訪問",
      "回収場所・動線の確認",
      "最適なプランのご提案",
      "お見積りのご提示",
    ],
    color: "bg-green-600",
  },
  {
    step: "03",
    title: "ご契約・スケジュール確定",
    duration: "1週間以内",
    desc: "お見積りにご納得いただけましたら、契約書を取り交わします。回収スケジュール・方法の詳細をご相談のうえ決定します。",
    items: [
      "契約書の締結",
      "回収スケジュールの設定",
      "コンテナ・回収容器の設置（必要な場合）",
      "担当者のご案内",
    ],
    color: "bg-green-600",
  },
  {
    step: "04",
    title: "回収開始",
    duration: "契約後すぐ",
    desc: "決定したスケジュールに従って回収を開始します。定期回収の場合、毎回の回収後に計量票をお渡しします。",
    items: [
      "スケジュール通りの回収実施",
      "計量・記録の実施",
      "回収後の計量票発行",
      "処理証明書の発行（定期）",
    ],
    color: "bg-green-600",
  },
  {
    step: "05",
    title: "定期的なフォロー",
    duration: "継続的に",
    desc: "回収量の変化・品目の追加など、状況の変化に応じて柔軟に対応します。担当者が定期的に状況確認を行います。",
    items: [
      "定期的な状況確認",
      "回収量増減への対応",
      "品目追加・変更への対応",
      "年次の契約更新・見直し",
    ],
    color: "bg-emerald-700",
  },
];

const faqs = [
  {
    q: "最短でいつから回収を開始できますか？",
    a: "スポット回収の場合は最短翌日から対応可能です。定期回収の場合は現地確認・契約を経て通常1〜2週間で開始できます。",
  },
  {
    q: "見積りは無料ですか？",
    a: "はい、お見積りは無料です。現地訪問・状況確認・お見積りの提示まで、すべて費用はかかりません。",
  },
  {
    q: "最低回収量はありますか？",
    a: "品目によって異なりますが、段ボール・古紙の場合は目安として月100kg以上から対応しています。詳細はお問い合わせください。",
  },
];

export default function FlowPage() {
  return (
    <>
      <PageHero
        title="回収の流れ"
        subtitle="お問い合わせから回収開始まで、丁寧にサポートします。"
        breadcrumb="回収の流れ"
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Flow</span>
            <h2 className="sec-title">ご利用の流れ</h2>
          </div>

          <div className="space-y-0 border border-gray-200">
            {steps.map((s, i) => (
              <div key={s.step} className={`flex gap-0 ${i < steps.length - 1 ? "border-b border-gray-200" : ""}`}>
                {/* Step badge */}
                <div className="bg-green-700 text-white w-24 shrink-0 flex flex-col items-center justify-center py-6 px-2 text-center">
                  <span className="font-accent text-xs text-green-300 font-medium">STEP</span>
                  <span className="font-accent text-2xl font-bold leading-none">{s.step}</span>
                  <span className="text-xs text-green-300 mt-1">{s.duration}</span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 bg-white">
                  <h2 className="text-base font-bold text-gray-900 mb-2">{s.title}</h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="w-1 h-1 bg-green-600 rounded-full shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Mini FAQ */}
          <div className="mt-12">
            <div className="mb-6">
              <span className="sec-label">FAQ</span>
              <h2 className="sec-title text-lg">よくある質問</h2>
            </div>
            <div className="border border-gray-200 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-5">
                  <p className="font-semibold text-gray-900 text-sm mb-2 flex items-start gap-2">
                    <span className="text-green-700 font-bold shrink-0">Q.</span>
                    {faq.q}
                  </p>
                  <p className="text-gray-600 text-sm pl-5">A. {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">まずはお気軽にご連絡ください</h2>
              <p className="text-gray-500 text-sm">専任担当者が丁寧にご案内いたします。</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              WEBでお問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
