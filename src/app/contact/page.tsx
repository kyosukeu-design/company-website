import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "共栄紙業へのお問い合わせ。古紙・資源回収のご依頼・ご相談はこちらから。",
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    title: "お問い合わせ | 共栄紙業株式会社",
    description: "古紙回収・機密書類処理・金属スクラップ・産業廃棄物収集運搬のご依頼・ご相談はこちらから。見積り無料、最短翌日対応。",
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
        subtitle="回収依頼・ご相談・お見積りなど、お気軽にご連絡ください。"
        breadcrumb="お問い合わせ"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-4">お問い合わせ方法</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">お電話</p>
                      <p className="text-green-700 font-bold text-xl">078-xxx-xxxx</p>
                      <p className="text-gray-500 text-xs">平日 8:00〜17:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center shrink-0">
                      <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">FAX</p>
                      <p className="text-gray-700 font-bold">078-xxx-xxxx</p>
                      <p className="text-gray-500 text-xs">24時間受付</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-900 rounded-xl text-white">
                <h3 className="font-bold mb-3 text-sm">会社情報</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p className="text-white font-semibold">共栄紙業株式会社</p>
                  <p>〒xxx-xxxx</p>
                  <p>兵庫県○○市○○町x-x-x</p>
                  <p className="mt-3">資本金：○,○○○万円</p>
                  <p>設立：1984年</p>
                </div>
              </div>

              <div className="p-5 border border-amber-200 bg-amber-50 rounded-xl">
                <div className="flex items-start gap-2">
                  <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-amber-800 text-sm mb-1">ご回答までの目安</p>
                    <p className="text-amber-700 text-xs">通常2営業日以内にご回答いたします。お急ぎの場合はお電話でお問い合わせください。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
