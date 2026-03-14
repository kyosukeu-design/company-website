import type { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "共栄紙業株式会社 | 兵庫・大阪の古紙・資源リサイクル専門",
  description:
    "共栄紙業株式会社は兵庫・大阪を中心に古紙回収・機密書類処理・金属スクラップ回収・産業廃棄物収集運搬を行う専門企業です。法人向け定期回収・スポット対応・有価買取に対応。まずは無料でお見積りください。",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "共栄紙業株式会社 | 兵庫・大阪の古紙・資源リサイクル専門",
    description:
      "兵庫・大阪を中心に古紙回収・機密書類処理・金属スクラップ回収・産業廃棄物収集運搬を行う専門企業。法人向け定期回収・スポット対応・有価買取に対応。",
    url: BASE_URL,
    locale: "ja_JP",
    type: "website",
  },
};

const features = [
  {
    num: "01",
    title: "迅速な回収対応",
    desc: "ご連絡から最短翌日対応。週次・月次の定期回収から緊急のスポット対応まで、柔軟なスケジュールで承ります。",
  },
  {
    num: "02",
    title: "適正処理・証明書発行",
    desc: "回収後の処理証明書・マニフェストを確実に発行。法令遵守・社内コンプライアンス対応を徹底サポートします。",
  },
  {
    num: "03",
    title: "有価買取にも対応",
    desc: "品目・量・品質によっては有価での買取が可能。廃棄コストをゼロまたはプラスに転換できる場合があります。",
  },
  {
    num: "04",
    title: "兵庫・大阪 広域対応",
    desc: "兵庫県・大阪府の主要エリアを網羅。自社トラック50台以上の安定した回収体制を備えています。",
  },
];

const serviceItems = [
  { label: "段ボール回収", sub: "製造・物流・小売業向け" },
  { label: "古紙・新聞回収", sub: "オフィス・販売店向け" },
  { label: "機密文書処理", sub: "廃棄証明書発行対応" },
  { label: "金属スクラップ", sub: "工場・製造業向け" },
  { label: "プラスチック類", sub: "梱包材・パレット等" },
  { label: "スポット回収", sub: "移転・倉庫整理等" },
  { label: "廃棄物管理", sub: "業者選定・法令対応・コスト最適化" },
  { label: "BPO", sub: "請求書・データ登録・バックオフィス全般" },
];

const stats = [
  { value: "創業40年", unit: "", label: "の実績と信頼" },
  { value: "1,200", unit: "社以上", label: "の取引実績" },
  { value: "3,000", unit: "t/月以上", label: "の回収・処理量" },
  { value: "翌日", unit: "対応", label: "最短スポット回収" },
];

const flowSteps = [
  { step: "STEP 01", title: "お問い合わせ", desc: "WEB・お電話にてご連絡ください。品目・量・エリアをお知らせいただくとスムーズです。" },
  { step: "STEP 02", title: "現地確認・見積", desc: "担当者が無料でご訪問。回収場所・品目を確認し、お見積りをご提示します。" },
  { step: "STEP 03", title: "ご契約・日程調整", desc: "内容にご納得いただけましたら契約書を締結。回収スケジュールを決定します。" },
  { step: "STEP 04", title: "回収開始", desc: "定期またはスポットで回収を開始。回収後は計量票・処理証明書を発行します。" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RecyclingCenter"],
  name: "共栄紙業株式会社",
  url: BASE_URL,
  description:
    "兵庫・大阪を中心に古紙回収・機密書類処理・金属スクラップ回収・産業廃棄物収集運搬を行う専門企業。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "潮江1丁目",
    addressLocality: "尼崎市",
    addressRegion: "兵庫県",
    postalCode: "660-0805",
    addressCountry: "JP",
  },
  telephone: "078-XXX-XXXX",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  areaServed: [
    { "@type": "State", name: "兵庫県" },
    { "@type": "State", name: "大阪府" },
  ],
  priceRange: "要お見積り",
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "共栄紙業株式会社",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/faq` },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }} />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="pt-[100px] lg:pt-[112px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] min-h-[520px]">
          {/* Left: キャッチコピー */}
          <div className="bg-white flex items-center px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-green-700 mb-4 uppercase">
                古紙・資源リサイクル ／ 兵庫・大阪
              </p>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-[1.5] mb-6">
                <span className="border-l-4 border-green-700 pl-4 block">
                  企業の資源管理を、<br />
                  責任と実績で支える。
                </span>
              </h1>

              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-8">
                共栄紙業株式会社は創業40年、兵庫・大阪の企業様の古紙・資源リサイクルを一貫してサポートしてまいりました。
                段ボール・古紙・機密書類・金属スクラップなど、幅広い品目を確実に回収・処理します。
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  無料でお問い合わせ・お見積り
                </Link>
                <Link href="/flow" className="btn-outline text-sm px-6 py-3">
                  回収の流れを見る
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <div className="flex flex-wrap gap-2">
                {["最短翌日対応", "定期回収対応", "処理証明書発行", "機密書類対応", "有価買取"].map((tag) => (
                  <span key={tag} className="text-xs bg-green-50 text-green-800 border border-green-200 px-3 py-1 font-medium">
                    ✓ {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: 実績パネル */}
          <div className="bg-green-800 text-white flex flex-col justify-between px-8 py-10 lg:py-14">
            <div>
              <p className="font-accent text-green-300 text-xs tracking-widest mb-4 font-medium uppercase">Company Data</p>
              <div className="space-y-0 divide-y divide-green-700">
                {stats.map((s) => (
                  <div key={s.label} className="py-4 flex items-baseline justify-between gap-2">
                    <div className="text-green-200 text-xs leading-snug">{s.label}</div>
                    <div className="text-right shrink-0">
                      <span className="font-accent text-2xl font-bold text-white">{s.value}</span>
                      <span className="font-accent text-green-300 text-xs ml-1">{s.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border border-green-600 p-5">
              <p className="text-green-300 text-xs mb-2">お電話でのお問い合わせ</p>
              <p className="font-accent text-2xl font-bold text-white tracking-wide">078-xxx-xxxx</p>
              <p className="text-green-300 text-xs mt-1">受付：平日 8:00〜17:00</p>
              <p className="font-accent text-green-400 text-xs mt-3">WEB 24H受付</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 選ばれる理由 ────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Why Choose Us</span>
            <h2 className="sec-title">共栄紙業が選ばれる4つの理由</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {features.map((f) => (
              <div key={f.num} className="corp-card bg-white">
                <div className="font-accent text-green-700 text-xs font-bold tracking-widest mb-3">{f.num}</div>
                <h3 className="font-bold text-gray-900 text-base mb-3 leading-snug">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── サービス概要 ────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-16 items-start">
            <div className="mb-10 lg:mb-0">
              <span className="sec-label">Services</span>
              <h2 className="sec-title mb-4">回収対応品目</h2>
              <p className="text-gray-500 text-sm leading-relaxed mt-4 mb-6">
                古紙類から金属・プラスチックまで幅広く対応。品目・量に応じた最適なプランをご提案します。
              </p>
              <Link href="/items" className="btn-outline text-sm px-5 py-2.5 inline-flex items-center gap-2">
                品目一覧を見る
                <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200">
              {serviceItems.map((s) => (
                <div key={s.label} className="bg-white p-5 flex items-start gap-3 hover:bg-green-50 transition-colors">
                  <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{s.label}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 回収の流れ ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Flow</span>
            <h2 className="sec-title">回収までの流れ</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {flowSteps.map((s, i) => (
              <div key={s.step} className="bg-white p-6 relative">
                {i < flowSteps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10">
                    <div className="w-5 h-5 bg-green-700 rotate-45" />
                  </div>
                )}
                <p className="font-accent text-green-700 text-xs font-bold tracking-widest mb-2">{s.step}</p>
                <h3 className="font-bold text-gray-900 mb-3 text-sm">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <Link href="/flow" className="inline-flex items-center gap-1.5 text-green-700 text-sm font-semibold hover:text-green-900 transition-colors">
              回収の流れ詳細を見る
              <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 対応エリア帯 ────────────────────────────── */}
      <section className="bg-white border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
            <div className="flex items-center gap-3 shrink-0">
              <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold text-gray-900 text-sm">主な対応エリア</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["神戸市", "尼崎市", "西宮市", "芦屋市", "姫路市", "明石市", "加古川市", "大阪市", "堺市", "東大阪市", "豊中市", "吹田市"].map((area) => (
                <span key={area} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 font-medium">{area}</span>
              ))}
              <Link href="/area" className="text-green-700 text-xs font-semibold px-2 py-1 hover:underline">
                エリア詳細 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 信頼性・認証 ────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-accent text-xs text-gray-500 text-center mb-6 tracking-widest uppercase font-medium">Certifications &amp; Licenses</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "産業廃棄物\n収集運搬業許可", sub: "兵庫県・大阪府" },
              { title: "一般廃棄物\n収集運搬業許可", sub: "兵庫県各市" },
              { title: "古物商許可", sub: "兵庫県公安委員会" },
              { title: "ISO 14001\n認証取得", sub: "環境マネジメント" },
            ].map((c) => (
              <div key={c.title} className="bg-white border border-gray-200 p-4 text-center">
                <svg aria-hidden="true" focusable="false" className="w-6 h-6 text-green-700 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
                <p className="font-semibold text-gray-900 text-xs leading-snug whitespace-pre-line">{c.title}</p>
                <p className="text-gray-400 text-xs mt-1">{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="bg-green-800 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <div className="mb-8 lg:mb-0">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-snug">
                古紙・資源の回収について、まずはご相談ください
              </h2>
              <p className="text-green-200 text-sm leading-relaxed">
                回収品目・量・頻度・エリアに合わせて最適なプランをご提案します。<br />
                無料現地確認・お見積りを承っております。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className="bg-white text-green-800 font-bold text-sm px-8 py-4 text-center hover:bg-green-50 transition-colors"
              >
                WEBでお問い合わせ（無料）
              </Link>
              <div className="bg-green-700 px-6 py-4 text-center">
                <p className="text-green-300 text-xs mb-1">お電話</p>
                <p className="text-white font-bold text-lg tracking-wide">078-xxx-xxxx</p>
                <p className="text-green-300 text-xs mt-0.5">平日 8:00〜17:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
