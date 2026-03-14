import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  title: "工場紹介",
  description: "共栄紙業グループの工場・拠点紹介。尼崎・西宮・伊丹・大阪・宝塚・能勢に9拠点を展開しています。",
  alternates: { canonical: `${BASE_URL}/factory` },
  openGraph: {
    title: "工場紹介 | 共栄紙業株式会社",
    description: "共栄紙業グループの工場・拠点紹介。尼崎・西宮・伊丹・大阪・宝塚・能勢に9拠点を展開。各拠点の所在地・取り扱い品目をご確認いただけます。",
    url: `${BASE_URL}/factory`,
    locale: "ja_JP",
    type: "website",
  },
};

const kyoeiFactories = [
  {
    num: "01",
    name: "本社工場",
    zip: "〒661-0033",
    address: "兵庫県尼崎市南武庫之荘10丁目7番9号",
    tel: "06-6437-0180",
    fax: "06-6432-6744",
    area: "1,440㎡",
    equipment: "大型自動古紙梱包機1台、トラックスケール1台、各種リフト3台",
    services: ["古紙回収・梱包", "産業廃棄物収集運搬業"],
    image: "",
  },
  {
    num: "02",
    name: "潮江工場",
    zip: "〒661-0976",
    address: "兵庫県尼崎市潮江5丁目7番25号",
    tel: "06-4961-7738",
    fax: "06-4961-7739",
    area: "1,545㎡",
    equipment: "大型自動古紙梱包機1台、トラックスケール1台、大型一軸破砕機1台、各種リフト3台",
    services: ["古紙回収・梱包", "機密処理・破砕施設"],
    image: "",
  },
  {
    num: "03",
    name: "西宮浜工場",
    zip: "〒662-0934",
    address: "兵庫県西宮市西宮浜2丁目28番地",
    tel: "0798-38-0302",
    fax: "0798-38-0303",
    area: "3,300㎡",
    equipment: "大型自動古紙梱包機1台、トラックスケール1台、大型溶融・減容機1台、各種リフト5台",
    services: ["古紙回収・梱包・輸出ヤード", "発泡スチロール溶融減容"],
    image: "",
  },
  {
    num: "04",
    name: "西宮浜 第2工場",
    zip: "〒662-0934",
    address: "兵庫県西宮市西宮浜2丁目19番1号",
    tel: "0798-42-8575",
    fax: "0798-42-8576",
    area: "943㎡",
    equipment: "大型選別・圧縮・梱包機1台、リフト2台",
    services: ["飲料容器（缶・瓶・ペットボトル）選別", "産業廃棄物処理"],
    image: "",
  },
];

const groupFactories = [
  {
    num: "05",
    company: "株式会社タマヨリ",
    name: "伊丹営業所",
    zip: "〒664-0027",
    address: "兵庫県伊丹市池尻7丁目154番地",
    tel: "072-781-0242",
    fax: "072-781-0242",
    area: "600㎡",
    equipment: "—",
    services: ["古紙回収", "非鉄金属回収（アルミサッシ・銅・真鍮など）"],
  },
  {
    num: "06",
    company: "関西製紙原料株式会社",
    name: "忠岡工場",
    zip: "〒595-0814",
    address: "大阪府泉北郡忠岡町新浜1丁目1-15",
    tel: "072-430-0381",
    fax: "072-430-0382",
    area: "4,564㎡",
    equipment: "—",
    services: ["古紙卸売", "一般廃棄物処理", "産業廃棄物処理", "固形燃料化"],
  },
  {
    num: "07",
    company: "株式会社北摂リサイクルセンター",
    name: "能勢工場",
    zip: "〒563-0355",
    address: "大阪府豊能郡能勢町下田5-3",
    tel: "072-731-3568",
    fax: "072-731-3567",
    area: "—",
    equipment: "—",
    services: ["古紙卸売業"],
  },
  {
    num: "08",
    company: "株式会社北摂リサイクルセンター",
    name: "宝塚工場",
    zip: "〒665-0051",
    address: "兵庫県宝塚市高司4丁目3-8",
    tel: "0797-78-2388",
    fax: "0797-78-2567",
    area: "—",
    equipment: "—",
    services: ["古紙卸売業"],
  },
  {
    num: "09",
    company: "株式会社皆黒商店",
    name: "北港工場",
    zip: "〒554-0033",
    address: "大阪府大阪市此花区北港2丁目1-10",
    tel: "06-6461-0796",
    fax: "06-6461-0783",
    area: "3,300㎡",
    equipment: "—",
    services: ["古紙卸売業"],
  },
];

const certifications = [
  { name: "一般廃棄物収集運搬業許可", issuer: "神戸市・尼崎市・他各市" },
  { name: "産業廃棄物収集運搬業許可", issuer: "兵庫県・大阪府" },
  { name: "古物商許可", issuer: "兵庫県公安委員会" },
  { name: "ISO 14001認証", issuer: "環境マネジメントシステム" },
];

type Factory = {
  num: string;
  name: string;
  zip: string;
  address: string;
  tel: string;
  fax: string;
  area: string;
  equipment: string;
  services: string[];
  company?: string;
  image?: string;
};

function FactoryCard({ f }: { f: Factory }) {
  return (
    <div className="bg-white border-t-4 border-green-700">
      {/* ヘッダー */}
      <div className="bg-gray-900 px-6 py-4">
        <div className="flex items-baseline gap-3">
          <span className="font-accent text-green-400 text-xs font-bold tracking-widest">{f.num}</span>
          <div>
            {f.company && (
              <p className="text-gray-400 text-xs mb-0.5">{f.company}</p>
            )}
            <h3 className="text-white font-bold text-base">{f.name}</h3>
          </div>
        </div>
      </div>

      {/* 詳細 */}
      <div className="p-6 space-y-4">
        {/* 所在地 */}
        <div className="flex items-start gap-3">
          <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-700 hover:text-green-700 transition-colors group/addr"
          >
            <span className="text-gray-400 text-xs block">{f.zip}</span>
            <span className="group-hover/addr:underline">{f.address}</span>
          </a>
        </div>

        {/* TEL / FAX */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div>
              <span className="text-gray-400 text-xs block">TEL</span>
              <span className="font-accent text-sm font-semibold text-gray-800">{f.tel}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            <div>
              <span className="text-gray-400 text-xs block">FAX</span>
              <span className="font-accent text-sm text-gray-600">{f.fax}</span>
            </div>
          </div>
        </div>

        {/* 土地面積 */}
        {f.area !== "—" && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="text-gray-400 text-xs w-16 shrink-0">敷地面積</span>
            <span className="font-accent font-semibold text-gray-800">{f.area}</span>
          </div>
        )}

        {/* 主要設備 */}
        {f.equipment !== "—" && (
          <div className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-gray-400 text-xs w-16 shrink-0 mt-0.5">主要設備</span>
            <span className="leading-relaxed">{f.equipment}</span>
          </div>
        )}

        {/* 業務内容 */}
        <div className="flex items-start gap-2">
          <span className="text-gray-400 text-xs w-16 shrink-0 mt-0.5">業務内容</span>
          <div className="flex flex-wrap gap-1.5">
            {f.services.map((s) => (
              <span key={s} className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 font-medium">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 写真 */}
      {f.image !== undefined && (
        <div className="w-full h-52 bg-gray-100 overflow-hidden">
          {f.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={f.image} alt={f.name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-400">
              <svg aria-hidden="true" focusable="false" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-accent tracking-widest">PHOTO</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function FactoryPage() {
  return (
    <>
      <PageHero
        title="工場紹介"
        subtitle="共栄紙業グループは兵庫・大阪に9拠点を展開し、安全・確実な資源リサイクルを実現しています。"
        breadcrumb="工場紹介"
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 概要数値 */}
          <div className="grid grid-cols-3 gap-px bg-gray-200 mb-14">
            {[
              { value: "9", unit: "拠点", label: "グループ合計" },
              { value: "11,340", unit: "㎡以上", label: "グループ総敷地面積" },
              { value: "50台+", unit: "", label: "保有車両" },
            ].map((s) => (
              <div key={s.label} className="bg-white py-6 text-center border-t-4 border-green-700">
                <div className="font-accent text-2xl lg:text-3xl font-bold text-green-700">
                  {s.value}<span className="text-base font-normal text-gray-500 ml-1">{s.unit}</span>
                </div>
                <div className="text-gray-500 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          {/* 共栄紙業 直営工場 */}
          <div className="mb-10">
            <span className="sec-label">Kyoei Shigyo</span>
            <h2 className="sec-title">共栄紙業株式会社　直営工場</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-gray-200 mb-16">
            {kyoeiFactories.map((f) => (
              <FactoryCard key={f.num} f={f} />
            ))}
          </div>

          {/* グループ会社 */}
          <div className="mb-10">
            <span className="sec-label">Group Companies</span>
            <h2 className="sec-title">グループ会社　拠点</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-px bg-gray-200 mb-14">
            {groupFactories.map((f) => (
              <FactoryCard key={f.num} f={f} />
            ))}
          </div>

          {/* 保有許可・認証 */}
          <div className="bg-gray-900 p-8">
            <div className="mb-6">
              <span className="sec-label text-green-400">Certifications</span>
              <h2 className="text-lg font-bold text-white">保有許可・認証</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-700">
              {certifications.map((cert) => (
                <div key={cert.name} className="bg-gray-800 p-5 text-center">
                  <svg aria-hidden="true" focusable="false" className="w-7 h-7 text-green-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                  <div className="text-white font-semibold text-xs mb-1 leading-snug">{cert.name}</div>
                  <div className="text-gray-400 text-xs">{cert.issuer}</div>
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
              <h2 className="font-bold text-gray-900 text-lg mb-1">工場見学も承っています</h2>
              <p className="text-gray-500 text-sm">処理の流れを実際にご確認いただけます。ご希望の方はお問い合わせください。</p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              工場見学を申し込む
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
