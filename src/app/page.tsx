import type { Metadata } from "next";
import Link from "next/link";
import HeroSlideshow from "@/components/HeroSlideshow";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "共栄紙業株式会社 | 関西の古紙・資源リサイクル専門",
  description:
    "共栄紙業株式会社は関西を中心に古紙回収・機密書類処理・金属スクラップ回収・産業廃棄物収集運搬を行う専門企業です。廃棄物管理コンサルティングは全国対応。法人向け定期回収・スポット対応・有価買取に対応。まずはお見積りください。",
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: "共栄紙業株式会社 | 関西の古紙・資源リサイクル専門",
    description:
      "関西を中心に古紙回収・機密書類処理・金属スクラップ回収・産業廃棄物収集運搬を行う専門企業。廃棄物管理は全国対応。法人向け定期回収・スポット対応・有価買取に対応。",
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
    title: "広域対応",
    desc: "兵庫・大阪を中心に京都・奈良・滋賀・和歌山まで関西全域をカバー。廃棄物管理コンサルティングは全国対応しています。",
  },
];

const serviceItems = [
  { label: "段ボール回収", sub: "製造・物流・小売業向け" },
  { label: "古紙・新聞回収", sub: "オフィス・販売店向け" },
  { label: "機密文書処理", sub: "廃棄証明書発行対応" },
  { label: "金属スクラップ", sub: "工場・製造業向け" },
  { label: "プラスチック類", sub: "梱包材・パレット等" },
  { label: "発泡スチロール", sub: "梱包材・食品トレー等" },
  { label: "飲料容器", sub: "缶・ペットボトル・ビン等" },
  { label: "木くず", sub: "パレット・梱包材・端材等" },
];


const stats = [
  { value: "70年", label: "の業歴", desc: "1955年創業。長年の信頼と実績" },
  { value: "1,200社+", label: "累計取引社数", desc: "関西を中心に幅広い業種" },
  { value: "月3,000t+", label: "の回収量", desc: "安定した処理能力と体制" },
  { value: "50台+", label: "トラック保有台数", desc: "迅速・安定した回収体制を支える自社車両" },
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

const flowSteps = [
  { step: "STEP 01", title: "お問い合わせ", desc: "WEB・お電話にてご連絡ください。品目・量・エリアをお知らせいただくとスムーズです。" },
  { step: "STEP 02", title: "現地確認・見積", desc: "担当者がご訪問。回収場所・品目を確認し、お見積りをご提示します。" },
  { step: "STEP 03", title: "ご契約・日程調整", desc: "内容にご納得いただけましたら契約書を締結。回収スケジュールを決定します。" },
  { step: "STEP 04", title: "回収開始", desc: "定期またはスポットで回収を開始。回収後は計量票・処理証明書を発行します。" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RecyclingCenter"],
  name: "共栄紙業株式会社",
  url: BASE_URL,
  description:
    "関西を中心に古紙回収・機密書類処理・金属スクラップ回収・産業廃棄物収集運搬を行う専門企業。廃棄物管理コンサルティングは全国対応。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "南武庫之荘10丁目7番9号",
    addressLocality: "尼崎市",
    addressRegion: "兵庫県",
    postalCode: "661-0033",
    addressCountry: "JP",
  },
  telephone: "06-6437-0180",
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
      <section className="relative overflow-hidden pt-[100px] lg:pt-[112px] min-h-[600px] flex items-center">

        {/* 写真スライドショー（背景） */}
        <HeroSlideshow />

        {/* テキストコンテンツ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 lg:py-20">
          {/* 半透明パネル */}
          <div className="max-w-xl bg-black/30 backdrop-blur-sm px-8 py-10 rounded-sm">
            <p className="text-xs font-semibold tracking-[0.2em] text-green-300 mb-4 uppercase"
               style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
              未来の環境を創造する
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.25] mb-4"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.6)" }}>
              <span className="border-l-[6px] border-green-400 pl-5 block">
                すばらしき人生は<br />
                よりよい環境から
              </span>
            </h1>
            <p className="font-accent text-green-300 text-base lg:text-lg font-semibold tracking-widest mb-6 pl-6"
               style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
              Better Environments, Better Life
            </p>

            <p className="text-white/90 text-sm lg:text-base leading-relaxed mb-8"
               style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}>
              私たちは限りある資源のリサイクルを通じて、<br />
              循環型社会の実現と美しい地球環境の保全に貢献します。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/contact" className="btn-primary text-sm px-6 py-3">
                <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                お問い合わせ・お見積り
              </Link>
              <Link href="/flow" className="btn-outline text-sm px-6 py-3 !text-white !border-white hover:!bg-white hover:!text-green-800">
                回収の流れを見る
                <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap gap-2">
              {["最短翌日対応", "定期回収対応", "処理証明書発行", "機密書類対応", "有価買取"].map((tag) => (
                <span key={tag} className="text-xs bg-white/15 text-white border border-white/40 px-3 py-1 font-medium">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Mission ─────────────────────────────── */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-t border-gray-200">
        {/* 薄緑の斜めカット背景 */}
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute inset-0 bg-green-50"
          style={{ clipPath: "polygon(0 0, 62% 0, 48% 100%, 0 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="sec-label">Our Mission</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mt-2 mb-6">
                より良い環境を後世へ。<br />
                豊かな社会創りに貢献します。
              </h2>
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                共栄紙業は、古紙回収・リサイクル事業を通じて、<br />資源の有効活用を推進しています。<br />
                使い終わった紙やプラスチックを「ゴミ」ではなく「資源」として捉え、<br className="hidden lg:block" />
                新たな価値を生み出す循環の輪を作り出します。
              </p>
            </div>
            <div className="mt-10 lg:mt-0 grid grid-cols-3 gap-px bg-gray-200">
              {[
                { num: "1955", label: "年創業", desc: "70年以上の歴史と信頼" },
                { num: "関西", label: "全域対応", desc: "兵庫・大阪を中心に関西広域エリアをカバー" },
                { num: "資源", label: "循環への貢献", desc: "廃棄物を価値ある資源に、\n循環を生み出す。" },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 p-5 text-center">
                  <p className="font-accent text-green-700 font-bold text-xl mb-1">{item.num}</p>
                  <p className="font-semibold text-gray-900 text-xs mb-2">{item.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed whitespace-pre-line">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 選ばれる理由 ────────────────────────────── */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-gray-50" />
        <div
          className="absolute inset-0 bg-green-50"
          style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 36% 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          {/* 実績数字 */}
          <div className="mt-10 mb-3">
            <span className="sec-label">Results</span>
            <h3 className="sec-title">これまでの実績</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {stats.map((s) => (
              <div key={s.label} className="bg-green-700 px-6 py-5 text-center">
                <div className="font-accent text-2xl lg:text-3xl font-bold text-white mb-0.5">{s.value}</div>
                <div className="font-semibold text-green-100 text-xs mb-1">{s.label}</div>
                <div className="text-green-300 text-xs">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── サービス概要 ────────────────────────────── */}
      <section className="relative py-16 lg:py-24 overflow-hidden border-t border-gray-200">
        <div className="absolute inset-0 bg-white" />
        <div
          className="absolute inset-0 bg-green-50"
          style={{ clipPath: "polygon(0 0, 62% 0, 48% 100%, 0 100%)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* ── 対応業種・事例 ──────────────────────────── */}
      <section className="py-16 lg:py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold tracking-widest text-green-400 uppercase font-accent">Industries</span>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mt-1">対応業種・事例</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-700">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-gray-800 p-6 border-t-4 border-green-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{ind.icon}</span>
                  <h3 className="font-bold text-white">{ind.name}</h3>
                </div>
                <ul className="space-y-2">
                  {ind.cases.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-gray-300">
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

      {/* ── 回収の流れ ──────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white border-t-4 border-green-700">
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

        </div>
      </section>

      {/* ── 対応エリア帯 ────────────────────────────── */}
      <section className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10">
            <div className="flex items-center gap-3 shrink-0">
              <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold text-white text-sm">主な対応エリア</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {["神戸市", "尼崎市", "西宮市", "芦屋市", "姫路市", "明石市", "高砂市", "加古川市", "大阪市", "堺市", "東大阪市", "豊中市", "吹田市", "京都市", "奈良市", "大津市"].map((area) => (
                <span key={area} className="bg-gray-800 text-gray-300 text-xs px-3 py-1 font-medium">{area}</span>
              ))}
              <Link href="/area" className="text-green-400 text-xs font-semibold px-2 py-1 hover:underline">
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
                現地確認・お見積りを承っております。
              </p>
            </div>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <Link
                href="/contact"
                className="bg-white text-green-800 font-bold text-sm px-8 py-4 text-center hover:bg-green-50 transition-colors"
              >
                WEBでお問い合わせ
              </Link>
              <div className="bg-green-700 px-6 py-4 text-center">
                <p className="text-green-300 text-xs mb-1">お電話</p>
                <p className="text-white font-bold text-lg tracking-wide">06-6437-0180</p>
                <p className="text-green-300 text-xs mt-0.5">平日 8:00〜17:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
