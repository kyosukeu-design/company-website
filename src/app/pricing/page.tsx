import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "料金について",
  description: "共栄紙業の料金の考え方。専ら物・有価物は量・品質・距離によって有価買取〜回収費用が変動。産業廃棄物は処理費用が発生します。まずはお見積りください。",
  alternates: { canonical: `${BASE_URL}/pricing` },
  openGraph: {
    title: "料金について | 共栄紙業株式会社",
    description: "専ら物・有価物・産業廃棄物それぞれの料金の流れと考え方を解説。量・品質・距離・積み込み条件によって価格は変動します。",
    url: `${BASE_URL}/pricing`,
    locale: "ja_JP",
    type: "website",
  },
};

const priceFactors = [
  {
    label: "回収量",
    desc: "月間排出量が多いほど1回あたりの輸送コストが下がり、買取単価が上がる・または回収費用が下がる傾向があります。",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    ),
  },
  {
    label: "品質・分別状態",
    desc: "異物混入・水濡れ・汚染が少ないほど処理コストが下がり、有利な条件になります。丁寧な分別が価格改善につながります。",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    ),
  },
  {
    label: "回収場所・距離",
    desc: "自社工場（尼崎・西宮）からの距離が長くなるほど輸送コストが加算されます。エリア外は別途ご相談ください。",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    ),
  },
  {
    label: "積み込み条件",
    desc: "フォークリフトや荷役作業が必要な場合・エレベーターがない高層階・駐車スペースが狭い場合などは作業費が加算されます。",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    ),
  },
  {
    label: "市場相場",
    desc: "古紙・金属スクラップの買取単価は製紙市況・金属相場に連動して毎月変動します。市場価格の上昇時は有利になります。",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    ),
  },
  {
    label: "回収頻度",
    desc: "定期回収契約では安定した輸送計画が立てやすく、スポット回収と比べてコストが下がる傾向があります。",
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    ),
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        title="料金について"
        subtitle="回収品目の種類によってお金の流れが異なります。量・品質・距離・積み込み条件によって価格は変動します。"
        breadcrumb="料金について"
      />

      {/* 基本的な考え方 */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="sec-label">Basic Concept</span>
            <h2 className="sec-title">料金の基本的な考え方</h2>
          </div>
          <div className="bg-green-50 border-l-4 border-green-700 p-5 mb-8">
            <p className="text-green-800 text-sm leading-relaxed">
              回収品目が<span className="font-bold">「専ら物・有価物」か「産業廃棄物」か</span>によって、お金の流れが大きく異なります。まずは品目の分類を確認し、その上で量・品質・距離などの条件によって最終的な料金をご案内します。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-200">
            {[
              { label: "専ら物・有価物", color: "border-green-600", badge: "bg-green-600", badgeText: "買取 or 無料", desc: "条件次第でお金をお支払いできる場合があります" },
              { label: "産業廃棄物", color: "border-amber-500", badge: "bg-amber-500", badgeText: "処理費用が発生", desc: "排出者負担の原則により処理費用をいただきます" },
              { label: "混合品目", color: "border-gray-500", badge: "bg-gray-600", badgeText: "要相談", desc: "品目ごとに分けてご確認し、最適なプランをご提案します" },
            ].map((item) => (
              <div key={item.label} className={`bg-white p-6 border-t-4 ${item.color} text-center`}>
                <span className={`inline-block text-white text-xs font-bold px-3 py-1 mb-3 ${item.badge}`}>{item.badgeText}</span>
                <p className="font-bold text-gray-900 mb-2">{item.label}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 専ら物・有価物 */}
      <section className="py-14 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="sec-label">Recyclables</span>
            <h2 className="sec-title">専ら物・有価物の料金の流れ</h2>
            <p className="text-gray-500 text-sm mt-2">段ボール・古紙・金属スクラップ・ペットボトルなどが対象です。</p>
          </div>

          {/* お金の流れ図 */}
          <div className="mb-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">お金の流れ（3パターン）</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* ① 有価買取 */}
              <div className="border-2 border-green-500 bg-white p-4">
                <div className="bg-green-500 text-white text-xs font-bold text-center py-1 px-2 mb-4">① 有価買取</div>
                <p className="text-xs text-gray-500 text-center mb-3">量が多く・品質が良好な場合</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-gray-900 text-white text-xs font-bold px-3 py-2 text-center">お客様</div>
                  <div className="flex flex-col items-center">
                    <span className="text-green-600 font-bold text-base">←</span>
                    <span className="text-xs text-green-600 font-bold whitespace-nowrap">買取金額</span>
                    <span className="text-xs text-gray-300">（資源回収）</span>
                    <span className="text-green-600 font-bold text-base">→</span>
                  </div>
                  <div className="bg-green-700 text-white text-xs font-bold px-3 py-2 text-center">共栄紙業</div>
                </div>
              </div>

              {/* ② 無料回収 */}
              <div className="border-2 border-gray-300 bg-white p-4">
                <div className="bg-gray-500 text-white text-xs font-bold text-center py-1 px-2 mb-4">② 無料回収</div>
                <p className="text-xs text-gray-500 text-center mb-3">量・品質・距離が均衡している場合</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-gray-900 text-white text-xs font-bold px-3 py-2 text-center">お客様</div>
                  <div className="flex flex-col items-center">
                    <span className="text-gray-400 font-bold text-base">↔</span>
                    <span className="text-xs text-gray-500 font-bold">費用ゼロ</span>
                    <span className="text-xs text-gray-300">（資源回収）</span>
                  </div>
                  <div className="bg-green-700 text-white text-xs font-bold px-3 py-2 text-center">共栄紙業</div>
                </div>
              </div>

              {/* ③ 回収費用発生 */}
              <div className="border-2 border-amber-400 bg-white p-4">
                <div className="bg-amber-500 text-white text-xs font-bold text-center py-1 px-2 mb-4">③ 回収費用が発生</div>
                <p className="text-xs text-gray-500 text-center mb-3">少量・遠距離・品質低下の場合</p>
                <div className="flex items-center justify-center gap-2">
                  <div className="bg-gray-900 text-white text-xs font-bold px-3 py-2 text-center">お客様</div>
                  <div className="flex flex-col items-center">
                    <span className="text-amber-500 font-bold text-base">→</span>
                    <span className="text-xs text-amber-600 font-bold whitespace-nowrap">回収費用</span>
                    <span className="text-xs text-gray-300">（資源回収）</span>
                    <span className="text-gray-300 font-bold text-base">←</span>
                  </div>
                  <div className="bg-green-700 text-white text-xs font-bold px-3 py-2 text-center">共栄紙業</div>
                </div>
              </div>
            </div>
          </div>

          {/* 条件別の目安 */}
          <div className="mb-6">
            <p className="text-sm font-bold text-gray-700 mb-3">条件別の料金目安（古紙・段ボールの例）</p>
            <div className="border border-gray-200 divide-y divide-gray-200">
              {[
                { condition: "月500kg以上・良品・自社工場近郊", result: "有価買取", color: "text-green-700 bg-green-50", note: "買取単価は市場相場に連動" },
                { condition: "月100〜500kg・標準品質・近〜中距離", result: "無料回収", color: "text-gray-600 bg-gray-50", note: "輸送コストと買取価格が均衡" },
                { condition: "月100kg未満・少量・遠距離・品質低下", result: "回収費用が発生", color: "text-amber-700 bg-amber-50", note: "条件改善でコスト削減可能" },
                { condition: "異物混入・水濡れ・著しい汚損", result: "回収費用が発生", color: "text-amber-700 bg-amber-50", note: "分別・乾燥状態の改善を推奨" },
              ].map((row) => (
                <div key={row.condition} className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-2 p-4">
                  <div>
                    <p className="text-sm text-gray-700">{row.condition}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{row.note}</p>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 h-fit ${row.color} shrink-0 self-start sm:self-center`}>{row.result}</span>
                </div>
              ))}
            </div>
          </div>
          {/* 工場持ち込みについて */}
          <div className="bg-green-700 text-white p-5 mb-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-0.5">
                <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-sm mb-1">工場への直接持ち込みで買取対応可能</p>
                <p className="text-green-100 text-xs leading-relaxed">
                  専ら物・有価物は、弊社工場（尼崎・西宮）へ直接お持ち込みいただくことで、輸送コストが不要となるため<span className="font-bold text-white">買取での対応が可能</span>になります。
                  ご持参いただく場合は<span className="font-bold text-white">50kg以上</span>を目安にお越しください。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <p className="text-blue-800 text-xs leading-relaxed">
              <span className="font-bold">「専ら物だから必ず無料・有価買取」ではありません。</span>輸送距離・量・品質・積み込み条件のバランスで決まります。まずは現地確認・お見積りにてご案内します。
            </p>
          </div>
        </div>
      </section>

      {/* 産業廃棄物 */}
      <section className="py-14 lg:py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="sec-label">Industrial Waste</span>
            <h2 className="sec-title">産業廃棄物の料金の流れ</h2>
            <p className="text-gray-500 text-sm mt-2">廃プラスチック・廃油・汚泥・木くず・ゴムくずなどが対象です。</p>
          </div>

          {/* お金の流れ図 */}
          <div className="mb-8">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">お金の流れ（産業廃棄物）</p>
            <div className="bg-white border border-gray-200 p-6">
              <div className="flex flex-col sm:flex-row items-stretch gap-0">
                {/* お客様 */}
                <div className="bg-gray-900 text-white px-6 py-5 text-center flex flex-col justify-center min-w-[120px]">
                  <p className="text-xs text-gray-400 mb-1">CLIENT</p>
                  <p className="font-bold text-sm">お客様</p>
                  <p className="text-xs text-gray-400 mt-1">排出事業者</p>
                </div>

                {/* 中央の矢印エリア */}
                <div className="flex-1 flex flex-col gap-2 justify-center px-4 py-4 border-t border-b border-gray-200 sm:border-t-0 sm:border-b-0 sm:border-l sm:border-r">
                  {/* 上向き：費用 */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-amber-50 border border-amber-300 px-3 py-2">
                      <p className="text-xs text-amber-700 font-bold">収集運搬費・処分費を支払い</p>
                      <p className="text-xs text-amber-500 mt-0.5">廃棄物の収集・運搬・適正処分</p>
                    </div>
                    <span className="text-amber-500 font-bold text-xl shrink-0">→</span>
                  </div>
                  {/* 下向き：書類 */}
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold text-xl shrink-0">←</span>
                    <div className="flex-1 bg-green-50 border border-green-200 px-3 py-2">
                      <p className="text-xs text-green-700 font-bold">マニフェスト・処理証明書を返送</p>
                      <p className="text-xs text-green-600 mt-0.5">適正処理を証明する法定書類</p>
                    </div>
                  </div>
                </div>

                {/* 共栄紙業 */}
                <div className="bg-green-700 text-white px-6 py-5 text-center flex flex-col justify-center min-w-[120px]">
                  <p className="text-xs text-green-300 mb-1">KYOEI</p>
                  <p className="font-bold text-sm">共栄紙業</p>
                  <p className="text-xs text-green-300 mt-1">許可業者</p>
                </div>
              </div>
            </div>
          </div>

          {/* 費用内訳 */}
          <div className="mb-6">
            <p className="text-sm font-bold text-gray-700 mb-3">費用の内訳</p>
            <div className="border border-gray-200 divide-y divide-gray-200">
              {[
                { item: "収集運搬費", desc: "回収場所〜処分場までの輸送費用。距離・量・積み込み条件によって変動します。", required: true },
                { item: "処分費", desc: "リサイクル・中間処理・最終処分にかかる費用。品目・処理方法によって異なります。", required: true },
                { item: "マニフェスト発行費", desc: "産業廃棄物管理票（電子マニフェスト含む）の発行・管理費用。", required: true },
                { item: "作業費（状況による）", desc: "フォークリフト作業・高所作業・特殊な積み込みが必要な場合に加算されます。", required: false },
              ].map((row) => (
                <div key={row.item} className="flex items-start gap-4 p-4">
                  <div className="shrink-0 mt-0.5">
                    <span className={`text-xs font-bold px-2 py-0.5 ${row.required ? "bg-amber-100 text-amber-700" : "bg-gray-100 text-gray-500"}`}>
                      {row.required ? "必須" : "状況次第"}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{row.item}</p>
                    <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{row.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
            <p className="text-amber-800 text-xs leading-relaxed">
              <span className="font-bold">排出者負担の原則：</span>産業廃棄物は廃棄物処理法により、排出した事業者が適正処理の責任と費用を負担します。許可業者（共栄紙業）が適切に収集運搬・処分を行い、マニフェストで処理の流れを管理します。
            </p>
          </div>
        </div>
      </section>

      {/* 価格変動要因 */}
      <section className="py-14 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="sec-label">Price Factors</span>
            <h2 className="sec-title">価格に影響する6つの要因</h2>
            <p className="text-gray-500 text-sm mt-2">以下の条件の組み合わせによって最終的な料金が決まります。</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
            {priceFactors.map((f) => (
              <div key={f.label} className="bg-white p-6 flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 border border-green-200 flex items-center justify-center shrink-0">
                  <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {f.icon}
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{f.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-800 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-accent text-green-300 text-xs tracking-widest mb-4 uppercase">Get a Quote</p>
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-4 leading-snug">
            料金は現地確認・お見積りにてご案内します
          </h2>
          <p className="text-green-200 text-sm mb-8 leading-relaxed">
            品目・量・場所をお知らせいただければ、担当者が現地を確認した上で<br />
            正確なお見積りをご提示します。お気軽にご相談ください。
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-green-800 font-bold text-sm px-10 py-4 hover:bg-green-50 transition-colors">
            お見積りを依頼する
            <svg aria-hidden="true" focusable="false" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
