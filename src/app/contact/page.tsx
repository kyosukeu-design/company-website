import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "共栄紙業へのお問い合わせ。古紙・資源回収のご依頼・見積り、廃棄物管理・BPOのご相談はこちらから。最短翌日対応。",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "お問い合わせ | 共栄紙業株式会社",
    description: "古紙回収・機密書類処理・廃プラスチック・産業廃棄物のご依頼、廃棄物管理・BPOのご相談はこちらから。最短翌日対応。",
    url: `${BASE_URL}/contact`,
    locale: "ja_JP",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="お問い合わせ"
        subtitle="回収依頼・お見積り・廃棄物管理のご相談など、お気軽にご連絡ください。"
        breadcrumb="お問い合わせ"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10">

            {/* サイドパネル */}
            <div className="space-y-5">

              {/* 電話 */}
              <div className="bg-gray-900 p-6 border-t-4 border-green-700">
                <p className="text-xs text-gray-400 font-accent tracking-widest mb-3 uppercase">Tel</p>
                <p className="text-white font-bold text-2xl tracking-wide mb-1">06-6437-0180</p>
                <p className="text-gray-400 text-xs">平日 8:00〜17:00</p>
              </div>

              {/* 回答目安 */}
              <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                <p className="font-semibold text-amber-800 text-sm mb-1">WEB受付の回答目安</p>
                <p className="text-amber-700 text-xs leading-relaxed">通常2営業日以内にご回答いたします。お急ぎの場合はお電話でお問い合わせください。</p>
              </div>

              {/* 会社情報 */}
              <div className="border border-gray-200 p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Company</p>
                <div className="space-y-1.5 text-sm text-gray-600">
                  <p className="font-bold text-gray-900">共栄紙業株式会社</p>
                  <p className="text-xs">〒661-0033</p>
                  <p className="text-xs leading-relaxed">兵庫県尼崎市南武庫之荘10丁目7番9号</p>
                  <p className="text-xs mt-3">資本金：5,000万円</p>
                  <p className="text-xs">設立：1993年（平成5年）3月</p>
                </div>
              </div>

              {/* フォーム選択ガイド */}
              <div className="border border-gray-200 p-5">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">フォームの選び方</p>
                <ul className="space-y-3 text-xs text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-700 shrink-0 mt-1.5" />
                    <span><span className="font-semibold text-gray-800">回収・お見積り</span><br />古紙・廃プラ・機密書類など品目ごとの回収依頼・見積り</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-700 shrink-0 mt-1.5" />
                    <span><span className="font-semibold text-gray-800">廃棄物管理・BPO</span><br />複数拠点の一元管理・コンサルティング・代行業務</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 shrink-0 mt-1.5" />
                    <span><span className="font-semibold text-gray-800">その他</span><br />上記以外の一般的なお問い合わせ</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* フォーム */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
