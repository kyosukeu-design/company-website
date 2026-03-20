import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import { services, subServices } from "@/data/services";
import { cities } from "@/data/locations";

// サービスID → エリアページのitem slugのマッピング
const serviceToItemSlug: Record<string, string> = {
  koshu: "danball",
  confidential: "kimitsu-shorui",
  purchase: "kinzoku",
  sanpai: "sangyo-haikibutsu",
};

const BASE_URL = "https://kyoei-shigyo.jp";

type Props = { params: Promise<{ id: string }> };

function findService(id: string) {
  const s = services.find((s) => s.id === id);
  if (s) return { type: "service" as const, data: s };
  const sub = subServices.find((s) => s.id === id);
  if (sub) return { type: "sub" as const, data: sub };
  return null;
}

export async function generateStaticParams() {
  return [
    ...services.map((s) => ({ id: s.id })),
    ...subServices.map((s) => ({ id: s.id })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const found = findService(id);
  if (!found) return {};
  const { data } = found;
  return {
    title: data.title,
    description: data.desc,
    alternates: { canonical: `${BASE_URL}/service/${id}` },
    openGraph: {
      title: `${data.title} | 共栄紙業株式会社`,
      description: data.desc,
      url: `${BASE_URL}/service/${id}`,
      locale: "ja_JP",
      type: "website",
    },
  };
}

const pricingColor: Record<string, string> = {
  "有価買取": "bg-green-50 border-green-400 text-green-800",
  "処理費用": "bg-amber-50 border-amber-400 text-amber-800",
  "状況による": "bg-blue-50 border-blue-400 text-blue-800",
  "要相談": "bg-gray-50 border-gray-400 text-gray-700",
};

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const found = findService(id);
  if (!found) notFound();

  const { data } = found;
  const isService = found.type === "service";
  const targets = isService ? (data as typeof services[0]).targets : null;
  const frequency = isService ? (data as typeof services[0]).frequency : null;
  const recycleFlow = isService ? (data as typeof services[0]).recycleFlow : null;

  return (
    <>
      <PageHero
        title={data.title}
        subtitle={data.shortDesc}
        breadcrumb={data.title}
      />

      {/* パンくず */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-green-700 transition-colors">TOP</Link>
            <span>/</span>
            <Link href="/service" className="hover:text-green-700 transition-colors">サービス</Link>
            <span>/</span>
            <span className="text-gray-700">{data.title}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 space-y-16">

        {/* ── 概要 ── */}
        <section>
          <div className="mb-6">
            <span className="sec-label">Overview</span>
            <h2 className="sec-title">サービス概要</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-8">{data.desc}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
            {targets && (
              <div className="bg-white p-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">対象品目</p>
                <ul className="space-y-2">
                  {targets.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {frequency && (
              <div className="bg-white p-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">回収頻度</p>
                <p className="text-green-700 font-semibold text-sm mb-4">{frequency}</p>
                <ul className="space-y-2">
                  {data.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!targets && (
              <div className="bg-white p-6 sm:col-span-2">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">主な対応内容</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {data.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>

        {/* ── スキーム図（BPO / 廃棄物管理） ── */}
        {(id === "bpo" || id === "waste-management") && (
          <section>
            {id === "bpo" ? (
              <>
                <div className="mb-6">
                  <span className="sec-label">BPO Scheme</span>
                  <h2 className="sec-title">BPOスキーム</h2>
                  <p className="text-gray-500 text-sm mt-2">バックオフィス業務を共栄紙業に切り出すことで、コア業務への集中を実現します。</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 p-6 lg:p-10">
                  <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">
                    <div className="w-full lg:w-2/5">
                      <div className="bg-gray-900 text-white p-6 text-center">
                        <p className="text-xs text-gray-400 font-accent tracking-widest mb-1">CLIENT</p>
                        <p className="font-bold text-lg mb-3">企業様</p>
                        <div className="space-y-2 text-left">
                          <div className="bg-green-700 px-3 py-2 text-sm font-semibold text-white text-center">コア業務に集中</div>
                          {["営業・販売活動", "企画・開発・製造", "顧客対応・サービス"].map((item) => (
                            <div key={item} className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 text-xs text-gray-300">
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />{item}
                            </div>
                          ))}
                          <div className="border border-dashed border-gray-600 px-3 py-2 text-center">
                            <p className="text-xs text-gray-500 mb-1">切り出す業務</p>
                            {["請求書処理", "データ入力・管理", "書類作成・ファイリング", "各種連絡・調整"].map((item) => (
                              <div key={item} className="text-xs text-gray-400 py-0.5">{item}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex lg:flex-col items-center gap-3 lg:w-1/5 px-4">
                      <div className="flex flex-col items-center gap-1 text-center">
                        <span className="text-xs text-gray-500 font-semibold">業務の切り出し</span>
                        <span className="text-green-600 text-2xl lg:rotate-0 rotate-90">→</span>
                      </div>
                      <div className="flex flex-col items-center gap-1 text-center">
                        <span className="text-2xl text-blue-500 lg:rotate-0 rotate-90">←</span>
                        <span className="text-xs text-gray-500 font-semibold">成果物のみ返却</span>
                      </div>
                    </div>
                    <div className="w-full lg:w-2/5">
                      <div className="bg-green-700 text-white p-6 text-center">
                        <p className="text-xs text-green-300 font-accent tracking-widest mb-1">KYOEI SHIGYO</p>
                        <p className="font-bold text-lg mb-3">共栄紙業株式会社</p>
                        <div className="space-y-2">
                          {["請求書受領・処理・仕訳支援", "各種データ登録・入力・整備", "書類作成・ファイリング・管理", "社内外との連絡・調整業務"].map((item) => (
                            <div key={item} className="flex items-center gap-2 bg-green-600 px-3 py-2 text-xs text-green-100 text-left">
                              <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { title: "コア業務への集中", desc: "煩雑なバックオフィス業務を切り出すことで、本来注力すべきコア業務に集中できる環境を実現します。" },
                      { title: "成果物のみ受け取る", desc: "業務のプロセスは共栄紙業が担当。企業様は完成した成果物（データ・書類・報告書）を受け取るだけです。" },
                      { title: "コスト・工数の削減", desc: "専任スタッフの採用・教育コストを抑えながら、業務品質を維持。繁閑に応じた柔軟な対応も可能です。" },
                    ].map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <span className="sec-label">Management Scheme</span>
                  <h2 className="sec-title">廃棄物管理スキーム</h2>
                  <p className="text-gray-500 text-sm mt-2">管理業者を入れない場合と、共栄紙業が入る場合の違いをご確認ください。</p>
                </div>

                <div className="space-y-4">

                  {/* ── Before：管理業者なし ── */}
                  <div className="border border-gray-300 overflow-hidden">
                    <div className="bg-gray-800 text-white px-5 py-2.5 flex items-center gap-3">
                      <span className="text-xs font-accent tracking-widest text-gray-400">BEFORE</span>
                      <span className="font-bold">管理業者なし</span>
                    </div>
                    <div className="p-5 bg-gray-50">
                      {/* フロー図：各拠点 ↔ 廃棄物業者 ↔ 本部 */}
                      <div className="flex items-stretch gap-3">

                        {/* 各拠点 */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-2">各拠点（現場）</p>
                          <div className="flex-1 space-y-1.5">
                            {["🏭 工場・製造拠点", "🏢 オフィス拠点", "🚛 物流・倉庫", "🛒 店舗・小売"].map((loc) => (
                              <div key={loc} className="bg-white border border-gray-300 px-3 py-2 text-xs text-gray-700 text-center">{loc}</div>
                            ))}
                          </div>
                          <div className="mt-2 bg-red-50 border border-red-200 px-2 py-2 text-center">
                            <p className="text-xs text-red-600 font-semibold">業者対応＋現場業務で二重の負担</p>
                          </div>
                        </div>

                        {/* 矢印エリア */}
                        <div className="flex flex-col items-center justify-center gap-1 shrink-0 pt-6">
                          <span className="text-xs text-gray-400 text-center leading-tight">個別に<br/>やり取り</span>
                          <span className="text-gray-400 text-base">⇄</span>
                        </div>

                        {/* 廃棄物業者（複数・バラバラ） */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-2">廃棄物業者</p>
                          <div className="flex-1 space-y-1.5">
                            {[
                              { label: "業者 A", note: "段ボール担当" },
                              { label: "業者 B", note: "産廃担当" },
                              { label: "業者 C", note: "機密書類担当" },
                            ].map((v) => (
                              <div key={v.label} className="bg-white border border-gray-300 px-3 py-2 text-center">
                                <p className="text-xs font-bold text-gray-700">{v.label}</p>
                                <p className="text-xs text-gray-400">{v.note}</p>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 bg-red-50 border border-red-200 px-2 py-2 text-center">
                            <p className="text-xs text-red-600 font-semibold">業者ごとに契約・請求がバラバラ</p>
                          </div>
                        </div>

                        {/* 矢印エリア */}
                        <div className="flex flex-col items-center justify-center gap-1 shrink-0 pt-6">
                          <span className="text-xs text-gray-400 text-center leading-tight">書類・請求が<br/>届く</span>
                          <span className="text-gray-400 text-base">→</span>
                        </div>

                        {/* 本部 */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest text-center mb-2">クライアント本部</p>
                          <div className="flex-1 bg-white border border-gray-300 px-3 py-3 flex flex-col justify-center gap-2">
                            {[
                              "バラバラな請求書を手動照合",
                              "マニフェストを拠点ごとに確認",
                              "処理量・コストが把握できない",
                              "法令違反リスクの見落とし",
                            ].map((t) => (
                              <div key={t} className="flex items-start gap-1.5">
                                <span className="text-red-500 shrink-0 text-xs mt-0.5">✕</span>
                                <span className="text-xs text-gray-600">{t}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 bg-red-50 border border-red-200 px-2 py-2 text-center">
                            <p className="text-xs text-red-600 font-semibold">本部も管理負担で疲弊</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* VS区切り */}
                  <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-gray-200" />
                    <span className="text-sm font-bold text-gray-400 shrink-0">共栄紙業が入ると</span>
                    <div className="flex-1 h-px bg-gray-200" />
                  </div>

                  {/* ── After：共栄紙業あり ── */}
                  <div className="border border-green-400 overflow-hidden">
                    <div className="bg-green-700 text-white px-5 py-2.5 flex items-center gap-3">
                      <span className="text-xs font-accent tracking-widest text-green-300">AFTER</span>
                      <span className="font-bold">共栄紙業が管理業者として入る</span>
                    </div>
                    <div className="p-5 bg-green-50">
                      {/* フロー図：各拠点 → 共栄紙業 → 本部（＋業者はサブ） */}
                      <div className="flex items-stretch gap-3">

                        {/* 各拠点 */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <p className="text-xs font-bold text-green-700 uppercase tracking-widest text-center mb-2">各拠点（現場）</p>
                          <div className="flex-1 space-y-1.5">
                            {["🏭 工場・製造拠点", "🏢 オフィス拠点", "🚛 物流・倉庫", "🛒 店舗・小売"].map((loc) => (
                              <div key={loc} className="bg-white border border-green-200 px-3 py-2 text-xs text-gray-700 text-center">{loc}</div>
                            ))}
                          </div>
                          <div className="mt-2 bg-green-100 border border-green-300 px-2 py-2 text-center">
                            <p className="text-xs text-green-800 font-semibold">廃棄物対応は丸投げOK<br/>コア業務に集中できる</p>
                          </div>
                        </div>

                        {/* 矢印 */}
                        <div className="flex flex-col items-center justify-center gap-1 shrink-0 pt-6">
                          <span className="text-xs text-green-600 font-semibold text-center leading-tight">依頼・<br/>丸投げ</span>
                          <span className="text-green-600 text-base">→</span>
                        </div>

                        {/* 共栄紙業（中心） */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <p className="text-xs font-bold text-green-700 uppercase tracking-widest text-center mb-2">共栄紙業株式会社</p>
                          <div className="flex-1 bg-green-700 text-white px-3 py-3">
                            <p className="text-xs text-green-300 font-accent tracking-widest mb-2 text-center">一元管理</p>
                            <div className="space-y-1.5 text-xs text-green-100">
                              {[
                                "現場での分別指導・ゴミ倉庫整備",
                                "廃棄物業者の手配・コーディネート",
                                "マニフェスト発行・保管を代行",
                                "請求を取りまとめ一括請求",
                                "行政対応・申請手続きのサポート",
                              ].map((t) => (
                                <div key={t} className="flex items-start gap-1">
                                  <span className="text-green-400 shrink-0">✓</span>{t}
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-2 bg-green-100 border border-green-300 px-2 py-2 text-center">
                            <p className="text-xs text-green-800 font-semibold">全拠点の窓口を一本化</p>
                          </div>
                        </div>

                        {/* 矢印 */}
                        <div className="flex flex-col items-center justify-center gap-1 shrink-0 pt-6">
                          <span className="text-xs text-green-600 font-semibold text-center leading-tight">データ・<br/>レポート</span>
                          <span className="text-green-600 text-base">→</span>
                        </div>

                        {/* 本部 */}
                        <div className="flex-1 min-w-0 flex flex-col">
                          <p className="text-xs font-bold text-green-700 uppercase tracking-widest text-center mb-2">クライアント本部</p>
                          <div className="flex-1 bg-white border border-green-200 px-3 py-3 flex flex-col justify-center gap-2">
                            {[
                              "全拠点のコスト・処理量を可視化",
                              "マニフェストは共栄が管理・提出",
                              "1社への支払いで完結",
                              "データをもとに改善・最適化",
                            ].map((t) => (
                              <div key={t} className="flex items-start gap-1.5">
                                <span className="text-green-600 shrink-0 text-xs mt-0.5">✓</span>
                                <span className="text-xs text-gray-700">{t}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-2 bg-green-100 border border-green-300 px-2 py-2 text-center">
                            <p className="text-xs text-green-800 font-semibold">工数・負担が大幅に軽減</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </>
            )}
          </section>
        )}

        {/* ── 料金イメージ ── */}
        <section>
          <div className="mb-6">
            <span className="sec-label">Pricing</span>
            <h2 className="sec-title">料金イメージ</h2>
          </div>
          <div className={`border-l-4 p-5 mb-6 ${pricingColor[data.pricing.model] ?? "bg-gray-50 border-gray-400 text-gray-700"}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-bold uppercase tracking-widest">料金モデル</span>
              <span className="font-bold text-lg">{data.pricing.model}</span>
            </div>
            <p className="text-sm leading-relaxed">{data.pricing.summary}</p>
          </div>
          <ul className="space-y-3">
            {data.pricing.notes.map((note) => (
              <li key={note} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full shrink-0 mt-1.5" />
                {note}
              </li>
            ))}
          </ul>
          <div className="mt-6 bg-gray-50 border border-gray-200 p-4">
            <p className="text-xs text-gray-500 leading-relaxed">
              ※ 料金は品目・量・品質・回収頻度・エリアにより異なります。正確な費用は現地確認・お見積りにてご案内します。
            </p>
          </div>
        </section>

        {/* ── (旧BPOスキーム図・削除済み) ── */}
        {false && (
          <section>
            <div className="mb-6">
              <span className="sec-label">BPO Scheme</span>
              <h2 className="sec-title">BPOスキーム</h2>
              <p className="text-gray-500 text-sm mt-2">
                バックオフィス業務を共栄紙業に切り出すことで、コア業務への集中を実現します。
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 lg:p-10">

              {/* メインフロー */}
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">

                {/* 左：企業様 */}
                <div className="w-full lg:w-2/5">
                  <div className="bg-gray-900 text-white p-6 text-center">
                    <p className="text-xs text-gray-400 font-accent tracking-widest mb-1">CLIENT</p>
                    <p className="font-bold text-lg mb-3">企業様</p>
                    <div className="space-y-2 text-left">
                      <div className="bg-green-700 px-3 py-2 text-sm font-semibold text-white text-center">
                        コア業務に集中
                      </div>
                      {["営業・販売活動", "企画・開発・製造", "顧客対応・サービス"].map((item) => (
                        <div key={item} className="flex items-center gap-2 bg-gray-800 px-3 py-1.5 text-xs text-gray-300">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0" />
                          {item}
                        </div>
                      ))}
                      <div className="border border-dashed border-gray-600 px-3 py-2 text-center">
                        <p className="text-xs text-gray-500 mb-1">切り出す業務</p>
                        {["請求書処理", "データ入力・管理", "書類作成・ファイリング", "各種連絡・調整"].map((item) => (
                          <div key={item} className="text-xs text-gray-400 py-0.5">{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 中央：矢印 */}
                <div className="flex lg:flex-col items-center gap-3 lg:w-1/5 px-4">
                  <div className="flex flex-col items-center gap-1 text-center">
                    <span className="text-xs text-gray-500 font-semibold">業務の切り出し</span>
                    <span className="text-green-600 text-2xl lg:rotate-0 rotate-90">→</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-center">
                    <span className="text-2xl text-blue-500 lg:rotate-0 rotate-90">←</span>
                    <span className="text-xs text-gray-500 font-semibold">成果物のみ返却</span>
                  </div>
                </div>

                {/* 右：共栄紙業 */}
                <div className="w-full lg:w-2/5">
                  <div className="bg-green-700 text-white p-6 text-center">
                    <p className="text-xs text-green-300 font-accent tracking-widest mb-1">KYOEI SHIGYO</p>
                    <p className="font-bold text-lg mb-3">共栄紙業株式会社</p>
                    <div className="space-y-2">
                      {[
                        { label: "請求書受領・処理・仕訳支援" },
                        { label: "各種データ登録・入力・整備" },
                        { label: "書類作成・ファイリング・管理" },
                        { label: "社内外との連絡・調整業務" },
                      ].map((item) => (
                        <div key={item.label} className="flex items-center gap-2 bg-green-600 px-3 py-2 text-xs text-green-100 text-left">
                          <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5 shrink-0 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* メリット */}
              <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "コア業務への集中", desc: "煩雑なバックオフィス業務を切り出すことで、本来注力すべきコア業務に集中できる環境を実現します。" },
                  { title: "成果物のみ受け取る", desc: "業務のプロセスは共栄紙業が担当。企業様は完成した成果物（データ・書類・報告書）を受け取るだけです。" },
                  { title: "コスト・工数の削減", desc: "専任スタッフの採用・教育コストを抑えながら、業務品質を維持。繁閑に応じた柔軟な対応も可能です。" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 導入・引き取りまでの流れ（waste-management以外） ── */}
        {id !== "waste-management" && (
          <section>
            <div className="mb-6">
              <span className="sec-label">Flow</span>
              <h2 className="sec-title">{id === "bpo" ? "導入までの流れ" : "導入・引き取りまでの流れ"}</h2>
            </div>
            <div className="space-y-0 border border-gray-200">
              {data.flow.map((step, i) => (
                <div key={step.step} className={`flex gap-0 ${i < data.flow.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <div className="bg-green-700 text-white w-20 shrink-0 flex flex-col items-center justify-center py-5 px-2 text-center">
                    <span className="font-accent text-xs text-green-300 font-medium">STEP</span>
                    <span className="font-accent text-xl font-bold leading-none">{step.step}</span>
                  </div>
                  <div className="flex-1 p-5">
                    <p className="font-bold text-gray-900 text-sm mb-1">{step.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── (旧廃棄物管理スキーム図・削除済み) ── */}
        {false && (
          <section>
            <div className="mb-6">
              <span className="sec-label">Management Scheme</span>
              <h2 className="sec-title">廃棄物管理スキーム</h2>
              <p className="text-gray-500 text-sm mt-2">
                共栄紙業が複数拠点の窓口を一本化。本部の管理負担を大幅に削減します。
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-6 lg:p-10">
              {/* 上段：本部 */}
              <div className="flex justify-center mb-2">
                <div className="bg-gray-900 text-white px-8 py-4 text-center min-w-[220px]">
                  <p className="text-xs text-gray-400 font-accent tracking-widest mb-1">CLIENT</p>
                  <p className="font-bold text-base">クライアント本部</p>
                  <p className="text-xs text-gray-400 mt-1">管理・発注・支払い窓口</p>
                </div>
              </div>

              {/* 本部↔共栄 矢印エリア */}
              <div className="flex justify-center mb-2">
                <div className="flex flex-col items-center gap-1 px-4">
                  <div className="flex items-center gap-4 text-xs flex-wrap justify-center">
                    <span className="text-green-700 font-semibold bg-green-50 border border-green-200 px-2 py-0.5">請求の一本化</span>
                    <span className="text-green-700 font-semibold bg-green-50 border border-green-200 px-2 py-0.5">処理報告・データ提供</span>
                    <span className="text-green-700 font-semibold bg-green-50 border border-green-200 px-2 py-0.5">マニフェスト管理</span>
                  </div>
                  <div className="text-gray-400 text-lg">↕</div>
                </div>
              </div>

              {/* 中段：共栄紙業 */}
              <div className="flex justify-center mb-2">
                <div className="bg-green-700 text-white px-10 py-5 text-center min-w-[260px]">
                  <p className="text-xs text-green-300 font-accent tracking-widest mb-1">KYOEI SHIGYO</p>
                  <p className="font-bold text-lg">共栄紙業株式会社</p>
                  <p className="text-sm text-green-200 mt-1">一元管理の窓口</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {["回収・運搬", "マニフェスト発行", "請求取りまとめ", "処理証明書発行", "法令対応"].map((t) => (
                      <span key={t} className="text-xs bg-green-600 text-green-100 px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 共栄↔拠点 矢印エリア */}
              <div className="flex justify-center mb-2">
                <div className="w-full max-w-3xl">
                  <div className="flex justify-center">
                    <div className="text-gray-400 text-lg">↕</div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-x-0 top-1/2 h-px bg-gray-300" />
                    <div className="relative flex justify-between w-full max-w-2xl px-8">
                      {["", "", "", ""].map((_, i) => (
                        <div key={i} className="flex flex-col items-center gap-0.5">
                          <div className="w-px h-5 bg-gray-300" />
                          <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 01-1.414 1.414L10 5.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z" clipRule="evenodd" transform="rotate(180 10 10)" />
                          </svg>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center mb-1">
                    <div className="flex gap-3 text-xs text-gray-500 flex-wrap justify-center">
                      <span className="flex items-center gap-1"><span className="text-green-600">→</span>廃棄物の回収・処理</span>
                      <span className="flex items-center gap-1"><span className="text-green-600">←</span>マニフェスト・証明書</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 下段：複数拠点 */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto">
                {[
                  { label: "工場・製造拠点", sub: "段ボール・金属くず・廃プラ", icon: "🏭" },
                  { label: "物流・倉庫拠点", sub: "段ボール・梱包廃材", icon: "🚛" },
                  { label: "オフィス・拠点", sub: "古紙・機密書類", icon: "🏢" },
                  { label: "店舗・小売拠点", sub: "段ボール・飲料容器", icon: "🛒" },
                ].map((loc) => (
                  <div key={loc.label} className="bg-white border border-gray-200 p-4 text-center">
                    <p className="text-2xl mb-2">{loc.icon}</p>
                    <p className="text-sm font-semibold text-gray-800 leading-snug">{loc.label}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-snug">{loc.sub}</p>
                  </div>
                ))}
              </div>

              {/* メリット */}
              <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { title: "窓口の一本化", desc: "複数拠点の廃棄物回収・請求・報告を共栄紙業が一括管理。本部の担当者は1社とのやり取りだけで完結します。" },
                  { title: "マニフェスト管理の代行", desc: "各拠点のマニフェスト発行・回収・保管を代行。法定期間の保存・電子マニフェスト対応も対応します。" },
                  { title: "コスト・データの可視化", desc: "全拠点の処理量・コストを集約してレポート提供。廃棄物管理の最適化・コスト削減に活用いただけます。" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-0.5">{item.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── (旧waste-management専用フロー・削除済み) ── */}
        {false && (
          <section>
            <div className="mb-6">
              <span className="sec-label">Flow</span>
              <h2 className="sec-title">導入までの流れ</h2>
            </div>
            <div className="space-y-0 border border-gray-200">
              {data.flow.map((step, i) => (
                <div key={step.step} className={`flex gap-0 ${i < data.flow.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <div className="bg-green-700 text-white w-20 shrink-0 flex flex-col items-center justify-center py-5 px-2 text-center">
                    <span className="font-accent text-xs text-green-300 font-medium">STEP</span>
                    <span className="font-accent text-xl font-bold leading-none">{step.step}</span>
                  </div>
                  <div className="flex-1 p-5">
                    <p className="font-bold text-gray-900 text-sm mb-1">{step.title}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── リサイクルの流れ（回収サービスのみ） ── */}
        {recycleFlow && (
          <section>
            <div className="mb-6">
              <span className="sec-label">Recycle Process</span>
              <h2 className="sec-title">回収後のリサイクルの流れ</h2>
              <p className="text-gray-500 text-sm mt-2">回収した資源がどのように再生されるかをご説明します。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
              {recycleFlow.map((step, i) => (
                <div key={step.title} className="bg-white">
                  {/* 画像エリア */}
                  <div className="w-full h-44 bg-gray-100 flex flex-col items-center justify-center gap-2 text-gray-300">
                    <svg aria-hidden="true" focusable="false" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-xs font-accent tracking-widest">PHOTO</span>
                  </div>
                  {/* テキスト */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 bg-green-700 text-white text-xs font-bold flex items-center justify-center shrink-0 font-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-bold text-gray-900 text-sm">{step.title}</p>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── エリア別サービスページ ── */}
        {serviceToItemSlug[id] && (
          <section>
            <div className="mb-6">
              <span className="sec-label">Area</span>
              <h2 className="sec-title">エリア別サービスページ</h2>
              <p className="text-gray-500 text-sm mt-2">
                お客様の所在地に近いエリアページで、地域ごとの詳細情報をご確認いただけます。
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-gray-200">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/area/${city.slug}/${serviceToItemSlug[id]}`}
                  className="bg-white px-5 py-4 flex items-center justify-between group hover:bg-green-50 transition-colors"
                >
                  <div>
                    <p className="text-xs text-gray-400">{city.pref}</p>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-green-700 transition-colors">{city.name}</p>
                  </div>
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-gray-300 group-hover:text-green-600 transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-200 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-bold text-gray-900 text-lg mb-1">{data.title}についてのお問い合わせ</h2>
              <p className="text-gray-500 text-sm">料金・回収頻度・対応エリアなど、お気軽にご相談ください。</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link href="/contact" className="btn-primary">
                お問い合わせ・お見積り
              </Link>
              <Link href="/service" className="btn-outline">
                サービス一覧に戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
