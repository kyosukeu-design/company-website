import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "回収品目",
  description: "共栄紙業が回収できる品目一覧。専ら物・有価物・産業廃棄物の3カテゴリで幅広く対応しています。",
  alternates: { canonical: `${BASE_URL}/items` },
  openGraph: {
    title: "回収品目 | 共栄紙業株式会社",
    description: "段ボール・古紙・金属スクラップ・機密書類・産業廃棄物など、回収できる品目を専ら物・有価物・産業廃棄物の3カテゴリで解説します。",
    url: `${BASE_URL}/items`,
    locale: "ja_JP",
    type: "website",
  },
};

const categories = [
  {
    id: "moppara",
    label: "Category 01",
    title: "専ら物",
    subtitle: "廃棄物処理法上、専ら再生利用の目的となる廃棄物",
    note: "許可不要で回収できる品目です。古紙・くず鉄・空き瓶・古繊維が該当します。",
    accentColor: "border-green-700",
    headerBg: "bg-green-700",
    items: [
      { name: "段ボール",          desc: "製造・流通・小売業から発生する段ボール全般" },
      { name: "新聞紙",            desc: "オフィス・販売店・家庭から発生する新聞紙" },
      { name: "雑誌・カタログ",    desc: "雑誌・パンフレット・カタログ・冊子類" },
      { name: "上質紙・コピー用紙",desc: "オフィスのコピー用紙・プリント紙・レポート用紙" },
      { name: "ざら紙・クラフト紙",desc: "包装紙・クラフト紙・紙袋類" },
      { name: "本・書籍・マニュアル", desc: "不要になった書籍・取扱説明書・業務マニュアル" },
      { name: "機密書類",          desc: "個人情報・社内機密を含む書類（シュレッダー処理・廃棄証明書発行対応）" },
      { name: "くず鉄・鉄スクラップ", desc: "工場・製造業から発生する鉄くず・鉄板端材" },
      { name: "古繊維・古着",      desc: "不要になった衣類・布製品・ウエス類" },
    ],
  },
  {
    id: "valuable",
    label: "Category 02",
    title: "有価物",
    subtitle: "市場価値があり、廃棄物ではなく商品として取り扱うもの",
    note: "品質・量によっては買取対応が可能です。買取価格は市場相場に連動します。",
    accentColor: "border-amber-600",
    headerBg: "bg-amber-600",
    items: [
      { name: "アルミスクラップ",  desc: "アルミ缶・アルミ板・アルミ押出材・ダイカスト品" },
      { name: "銅・真鍮スクラップ",desc: "電線・銅管・真鍮バルブ・銅板端材" },
      { name: "ステンレススクラップ", desc: "厨房機器・タンク・パイプ・ステンレス板" },
      { name: "鉛・亜鉛",         desc: "バッテリー極板・鋳物くず・亜鉛メッキ鉄" },
      { name: "貴金属含有品",      desc: "基板・接点部品など貴金属（金・銀・パラジウム）含有品" },
      { name: "PETボトル",         desc: "飲料・食品工場から発生するPETボトル（選別済み）" },
      { name: "段ボール（高品質）",desc: "汚れ・異物混入のない良品段ボール（買取単価優遇）" },
      { name: "新聞紙（高品質）",  desc: "乾燥・未汚損の良品新聞紙（買取単価優遇）" },
    ],
  },
  {
    id: "industrial",
    label: "Category 03",
    title: "産業廃棄物",
    subtitle: "廃棄物処理法に基づき、適正な許可のもとで処理・収集するもの",
    note: "マニフェスト（産業廃棄物管理票）を発行します。処理証明書の発行にも対応しています。",
    accentColor: "border-gray-600",
    headerBg: "bg-gray-700",
    items: [
      { name: "廃プラスチック類",  desc: "廃樹脂・廃フィルム・発泡スチロール・廃容器包装" },
      { name: "木くず",            desc: "木製パレット・木材端材・建築廃材（解体木材）" },
      { name: "金属くず",          desc: "廃棄物として処理が必要な金属スクラップ全般" },
      { name: "ガラスくず・陶磁器くず", desc: "廃ガラス・廃陶器・廃タイル・廃れんが類" },
      { name: "ゴムくず",          desc: "廃タイヤ・廃ゴムベルト・廃ゴムホース類" },
      { name: "繊維くず",          desc: "天然繊維の産業廃棄物（製造工場の裁断くず等）" },
      { name: "廃油",              desc: "鉱物性廃油・廃潤滑油・廃切削油（要相談）" },
      { name: "汚泥",              desc: "工場排水処理汚泥・無機性汚泥（要相談）" },
    ],
  },
];

export default function ItemsPage() {
  return (
    <>
      <PageHero
        title="回収品目"
        subtitle="専ら物・有価物・産業廃棄物の3カテゴリで幅広く対応しています。"
        breadcrumb="回収品目"
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* カテゴリ説明 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200 mb-12">
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`} className="bg-white p-5 flex items-start gap-3 hover:bg-green-50 transition-colors group">
                <div className={`w-1 self-stretch shrink-0 ${cat.accentColor.replace("border-", "bg-")}`} />
                <div>
                  <p className="font-accent text-xs text-gray-400 tracking-widest mb-0.5">{cat.label}</p>
                  <p className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{cat.title}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{cat.subtitle}</p>
                </div>
              </a>
            ))}
          </div>

          {/* 各カテゴリ */}
          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.id} id={cat.id} className={`border-t-4 scroll-mt-32 ${cat.accentColor}`}>
                {/* ヘッダー */}
                <div className={`${cat.headerBg} px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4`}>
                  <div>
                    <span className="font-accent text-xs text-white/70 tracking-widest">{cat.label}</span>
                    <h2 className="text-white font-bold text-lg leading-tight">{cat.title}</h2>
                  </div>
                  <p className="text-white/80 text-xs sm:border-l sm:border-white/30 sm:pl-4 leading-relaxed">
                    {cat.subtitle}
                  </p>
                </div>

                {/* 備考 */}
                <div className="bg-gray-50 border-b border-gray-200 px-6 py-3 flex items-start gap-2">
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-500 text-xs">{cat.note}</p>
                </div>

                {/* 品目リスト */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-gray-200">
                  {cat.items.map((item) => (
                    <div key={item.name} className="bg-white px-5 py-4">
                      <p className="font-semibold text-gray-900 text-sm mb-1">{item.name}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 注意書き */}
          <div className="mt-10 bg-green-50 border-l-4 border-green-700 p-5">
            <div className="flex items-start gap-3">
              <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold text-green-800 text-sm mb-1">記載のない品目もお気軽にご相談ください</p>
                <p className="text-green-700 text-sm">上記以外の品目でも対応できる場合があります。また、お客様の品目が「専ら物」「有価物」「産業廃棄物」のいずれに該当するか不明な場合も、担当者が丁寧にご案内します。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">回収についてのご相談</h2>
              <p className="text-gray-500 text-sm">品目・量・頻度など、まずはお気軽にご相談ください。</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
