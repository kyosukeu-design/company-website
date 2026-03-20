import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const BASE_URL = "https://kyoei-shigyo.jp";
const ENGAGE_URL = "https://en-gage.net/kyoeishigyo_saiyo/";

export const metadata: Metadata = {
  title: "採用情報",
  description: "共栄紙業株式会社の採用情報。関西の古紙・資源リサイクルを支えるスタッフを募集しています。一緒に循環型社会の実現に取り組みませんか。",
  alternates: { canonical: `${BASE_URL}/recruit` },
  openGraph: {
    title: "採用情報 | 共栄紙業株式会社",
    description: "共栄紙業株式会社の採用情報。古紙・資源リサイクルを支えるスタッフを募集しています。",
    url: `${BASE_URL}/recruit`,
    locale: "ja_JP",
    type: "website",
  },
};

const appeals = [
  {
    num: "01",
    title: "地域に根ざした安定企業",
    desc: "創業70年以上の歴史を持つ、関西を代表する資源リサイクル専門企業です。地域のインフラを支える事業として安定した経営基盤があります。",
  },
  {
    num: "02",
    title: "社会貢献を実感できる仕事",
    desc: "古紙・資源のリサイクルを通じて循環型社会の実現に直接貢献できます。「ものを捨てるのではなく、活かす」という誇りを持って働ける環境です。",
  },
  {
    num: "03",
    title: "未経験からでも安心",
    desc: "入社後は先輩スタッフがマンツーマンでサポート。専門知識がなくても、丁寧な研修制度で着実にスキルを身につけることができます。",
  },
  {
    num: "04",
    title: "チームワークを大切にする社風",
    desc: "現場と営業、バックオフィスが一体となって動く会社です。年齢や職歴に関わらず、フラットな関係で仕事ができる職場づくりを目指しています。",
  },
];

const jobTypes = [
  {
    category: "現場スタッフ",
    title: "回収ドライバー・現場作業員",
    desc: "トラックで各拠点を巡回し、古紙・資源の回収・運搬を担当します。工場での仕分け・梱包作業も含みます。",
    tags: ["普通免許以上", "未経験歓迎", "正社員・パート"],
  },
  {
    category: "営業",
    title: "法人営業（ルート・新規）",
    desc: "既存のお客様へのフォローと、新規顧客の開拓を担当します。回収の提案から契約まで一貫して携わります。",
    tags: ["普通免許必須", "経験者優遇", "正社員"],
  },
  {
    category: "事務・管理",
    title: "事務スタッフ・バックオフィス",
    desc: "受発注管理・マニフェスト処理・請求書対応など、業務の円滑な運営を支えるポジションです。",
    tags: ["PC基本操作", "未経験歓迎", "正社員・パート"],
  },
];

const benefits = [
  "各種社会保険完備（健康・厚生年金・雇用・労災）",
  "昇給あり（年1回）",
  "賞与あり（年2回）",
  "交通費支給",
  "制服・安全靴支給",
  "マイカー通勤可（駐車場完備）",
  "研修制度・資格取得支援",
  "有給休暇（入社6ヶ月後より）",
];

const flowSteps = [
  { step: "01", title: "求人サイトから応募", desc: "ENGAGEの求人ページよりご応募ください。" },
  { step: "02", title: "書類選考", desc: "応募内容を確認後、1週間以内にご連絡いたします。" },
  { step: "03", title: "面接", desc: "担当者と面接を行います。職場見学も可能です。" },
  { step: "04", title: "内定・入社", desc: "合否のご連絡後、入社日等の詳細を調整します。" },
];

export default function RecruitPage() {
  return (
    <>
      <PageHero
        title="採用情報"
        subtitle="共栄紙業で、循環型社会の実現を一緒に目指しませんか。"
        breadcrumb="採用情報"
      />

      {/* メッセージ */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="sec-label">Message</span>
            <h2 className="sec-title">共栄紙業で働くということ</h2>
          </div>
          <div className="border-l-4 border-green-700 pl-6 space-y-4 text-gray-600 leading-relaxed">
            <p>
              私たちの仕事は、企業や地域から出る古紙・資源を回収し、次の資源として生まれ変わらせることです。目立つ仕事ではないかもしれませんが、この社会インフラを支える誇りある仕事です。
            </p>
            <p>
              創業70年以上、関西の企業・行政・地域と共に歩んできた私たちは、これからも「ものを活かす」文化を次世代につなげていきたいと考えています。その想いに共感してくれる仲間を求めています。
            </p>
            <p className="font-semibold text-gray-800">
              未経験でも、前向きに取り組める方を歓迎します。
            </p>
          </div>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section className="py-14 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Why Join Us</span>
            <h2 className="sec-title">共栄紙業で働く4つの魅力</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {appeals.map((a) => (
              <div key={a.num} className="bg-white p-6">
                <div className="font-accent text-green-700 text-xs font-bold tracking-widest mb-3">{a.num}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-3 leading-snug">{a.title}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Positions</span>
            <h2 className="sec-title">募集職種</h2>
          </div>
          <div className="space-y-0 border border-gray-200 divide-y divide-gray-200">
            {jobTypes.map((job) => (
              <div key={job.title} className="p-6">
                <div className="flex items-start gap-4">
                  <span className="text-xs bg-green-700 text-white px-2 py-0.5 font-semibold shrink-0 mt-0.5">{job.category}</span>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{job.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-xs border border-gray-300 text-gray-500 px-2 py-0.5">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-4">※ 詳細な勤務条件・給与は求人ページをご確認ください。</p>
        </div>
      </section>

      {/* 福利厚生 */}
      <section className="py-14 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Benefits</span>
            <h2 className="sec-title">待遇・福利厚生</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3 text-sm text-gray-700 border-b border-gray-200 pb-3">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 採用の流れ */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Flow</span>
            <h2 className="sec-title">採用の流れ</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-px bg-gray-200">
            {flowSteps.map((s, i) => (
              <div key={s.step} className="bg-white p-6 relative">
                {i < flowSteps.length - 1 && (
                  <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                    <div className="w-4 h-4 bg-green-700 rotate-45" />
                  </div>
                )}
                <p className="font-accent text-green-700 text-xs font-bold tracking-widest mb-2">STEP {s.step}</p>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-green-300 text-xs tracking-widest mb-4 uppercase">Apply Now</p>
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-snug">
            求人への応募・詳細確認はこちら
          </h2>
          <p className="text-green-200 text-sm mb-8 leading-relaxed">
            求人サイト「ENGAGE」にて最新の募集情報・給与・勤務条件をご確認いただけます。
          </p>
          <a
            href={ENGAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-green-800 font-bold text-sm px-10 py-4 hover:bg-green-50 transition-colors"
          >
            求人情報を見る（ENGAGE）
            <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <p className="text-green-400 text-xs mt-4">※ 外部サイト（en-gage.net）へ遷移します</p>
        </div>
      </section>
    </>
  );
}
