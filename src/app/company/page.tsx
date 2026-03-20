import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "会社概要",
  description: "共栄紙業株式会社の会社概要・沿革。1955年創業、関西を中心に古紙・資源リサイクル事業を展開。廃棄物管理は全国対応。",
  alternates: { canonical: `${BASE_URL}/company` },
  openGraph: {
    title: "会社概要 | 共栄紙業株式会社",
    description: "1955年創業。関西を中心に古紙回収・資源リサイクル・産業廃棄物処理を展開する共栄紙業株式会社の会社概要・沿革をご紹介します。廃棄物管理コンサルティングは全国対応。",
    url: `${BASE_URL}/company`,
    locale: "ja_JP",
    type: "website",
  },
};

const profile = [
  { label: "会社名",     value: "共栄紙業株式会社" },
  { label: "創業",       value: "1955年（昭和30年）8月" },
  { label: "設立",       value: "1993年（平成5年）3月" },
  { label: "代表者",     value: "代表取締役社長　阪本 聖健" },
  { label: "役員",       value: "取締役　中村 誠 ／ 取締役　阪本 千代子" },
  { label: "資本金",     value: "5,000万円" },
  { label: "従業員数",   value: "90名（2021年7月現在）" },
  { label: "本社所在地", value: "〒661-0033　兵庫県尼崎市南武庫之荘10丁目7番9号" },
  { label: "電話",       value: "06-6437-0180" },
  { label: "営業時間",   value: "平日 8:00〜17:00" },
  { label: "事業内容",   value: "古紙リサイクル業務 / 機密書類処理業務 / 産業廃棄物収集運搬業務 / 産業廃棄物処分業務 / 非鉄及び金属売買業務" },
];

const licenses = [
  { name: "産業廃棄物収集運搬業許可", detail: "兵庫県・大阪府・奈良県・京都府・三重県・滋賀県・和歌山県" },
  { name: "産業廃棄物処分業許可",     detail: "兵庫県" },
  { name: "ISO 14001認証",            detail: "環境マネジメントシステム（西宮浜工場）" },
  { name: "プライバシーマーク",       detail: "認定番号：20001000" },
];

const history = [
  { year: "昭和30年8月",  event: "共栄商会として尼崎市南竹谷町に開業" },
  { year: "昭和45年3月",  event: "第一工場開設（当初本社として営業）" },
  { year: "昭和48年6月",  event: "本社工場開設" },
  { year: "平成 5年3月",  event: "共栄紙業株式会社を設立（改組・社名変更）" },
  { year: "平成11年12月", event: "西宮浜工場開設" },
  { year: "平成18年6月",  event: "潮江工場開設（第一工場移転）" },
  { year: "平成23年10月", event: "西宮浜第二工場開設" },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        title="会社概要"
        subtitle="1955年の創業以来、関西を中心に資源リサイクルで社会に貢献してまいりました。廃棄物管理コンサルティングは全国対応しています。"
        breadcrumb="会社概要"
      />

      {/* 会社概要テーブル */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Company Profile</span>
            <h2 className="sec-title">会社概要</h2>
          </div>

          <div className="border border-gray-200 divide-y divide-gray-100">
            {profile.map((row) => (
              <div key={row.label} className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr]">
                <div className="bg-gray-50 px-5 py-4 text-xs font-semibold text-gray-500 flex items-start">
                  {row.label}
                </div>
                <div className="px-5 py-4 text-sm text-gray-800 leading-relaxed">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 許認可・資格 */}
      <section className="py-14 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Certifications</span>
            <h2 className="sec-title">許認可・認証</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {licenses.map((lic) => (
              <div key={lic.name} className="bg-white p-6 border-t-4 border-green-700">
                <div className="flex items-start gap-3">
                  <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{lic.name}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{lic.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">History</span>
            <h2 className="sec-title">沿革</h2>
          </div>

          {/* 縦ライン */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-green-200" aria-hidden="true" />

            <div className="space-y-0 divide-y divide-gray-100">
              {history.map((h, i) => (
                <div key={i} className="flex items-start gap-5 py-5">
                  {/* ドット */}
                  <div className="relative shrink-0 flex items-center justify-center w-8 mt-0.5">
                    <div className="w-3 h-3 rounded-full bg-green-600 border-2 border-white ring-2 ring-green-200 shrink-0" />
                  </div>
                  {/* 年号（絶対に折り返さない） */}
                  <span className="shrink-0 text-xs font-semibold text-green-700 whitespace-nowrap w-[185px] pt-0.5">
                    {h.year}
                  </span>
                  {/* 内容 */}
                  <p className="text-sm text-gray-700 leading-relaxed">{h.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">お問い合わせ・ご相談</h2>
              <p className="text-gray-500 text-sm">サービス内容・料金・採用など、お気軽にご連絡ください。</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              お問い合わせはこちら
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
