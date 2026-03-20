"use client";
import { useState, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type TabType = "collection" | "waste-mgmt" | "other";

type BaseInfo = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  prefecture: string;
  city: string;
};

type CollectionForm = BaseInfo & {
  items: string[];
  itemVolumes: Record<string, string>;
  frequency: string;
  locationCount: string;
  currentStatus: string;
  desiredTiming: string;
  images: File[];
  note: string;
};

type WasteMgmtForm = BaseInfo & {
  locationCount: string;
  annualCost: string;
  challenges: string[];
  desiredServices: string[];
  note: string;
};

type OtherForm = BaseInfo & {
  content: string;
};

// ─── Options ──────────────────────────────────────────────────────────────────

const prefectures = [
  "北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県",
  "茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県",
  "新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県",
  "静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県",
  "奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県",
  "徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県",
  "熊本県","大分県","宮崎県","鹿児島県","沖縄県",
];

const collectItems = [
  { id: "koshu", label: "古紙・段ボール" },
  { id: "plastic", label: "廃プラスチック" },
  { id: "foam", label: "発泡スチロール" },
  { id: "container", label: "飲料容器（缶・瓶・ペット）" },
  { id: "confidential", label: "機密書類" },
  { id: "metal", label: "金属スクラップ" },
  { id: "sanpai", label: "産業廃棄物（その他）" },
  { id: "other", label: "その他" },
];

const frequencies = ["週2回以上", "週1回", "月2回", "月1回", "スポット（単発）", "未定"];
const locationCounts = ["1拠点", "2〜5拠点", "6〜20拠点", "21拠点以上"];
const currentStatuses = ["自社で保管・処分している", "現在別の業者に委託中", "まだ体制が整っていない", "検討を始めたばかり"];
const desiredTimings = ["できるだけ早く（1ヶ月以内）", "3ヶ月以内", "半年以内", "時期は未定"];
const annualCosts = ["100万円未満", "100〜300万円", "300〜500万円", "500万円〜1,000万円", "1,000万円以上", "把握していない"];
const challengeOptions = ["コスト削減・最適化", "業者管理の一本化", "マニフェスト管理の効率化", "法令対応・行政手続き", "データ管理・レポート", "担当者の工数削減", "その他"];
const desiredServiceOptions = ["廃棄物管理コンサルティング", "廃棄物処理業務の代行", "BPO（バックオフィス代行）", "まずは相談したい"];

// ─── Helpers ─────────────────────────────────────────────────────────────────

const inputClass = (hasError?: boolean) =>
  `w-full px-4 py-2.5 border text-sm focus:outline-none focus:ring-2 focus:ring-green-500 ${
    hasError ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"
  }`;

const labelClass = "block text-sm font-semibold text-gray-700 mb-1";
const requiredMark = <span className="text-red-500 ml-0.5">*</span>;

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-4 pt-2">
      <span className="w-1 h-5 bg-green-700 shrink-0" />
      <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">{children}</h3>
    </div>
  );
}

// ─── Success Screen ───────────────────────────────────────────────────────────

function SuccessScreen() {
  return (
    <div className="bg-green-50 border-l-4 border-green-700 p-10 text-center">
      <div className="w-16 h-16 bg-green-700 flex items-center justify-center mx-auto mb-5">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900 mb-2">お問い合わせを受け付けました</h2>
      <p className="text-gray-600 text-sm leading-relaxed">
        ご入力いただいたメールアドレスに確認メールをお送りしました。<br />
        通常2営業日以内に担当者よりご連絡いたします。<br />
        お急ぎの場合は <span className="font-bold">06-6437-0180</span> までお電話ください。
      </p>
    </div>
  );
}

// ─── Base Info Fields ─────────────────────────────────────────────────────────

function BaseInfoFields({
  form,
  errors,
  onChange,
}: {
  form: BaseInfo;
  errors: Partial<Record<string, string>>;
  onChange: (key: keyof BaseInfo, value: string) => void;
}) {
  return (
    <>
      <SectionTitle>基本情報</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>会社名{requiredMark}</label>
          <input type="text" value={form.companyName} onChange={(e) => onChange("companyName", e.target.value)}
            placeholder="株式会社○○" className={inputClass(!!errors.companyName)} />
          {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
        </div>
        <div>
          <label className={labelClass}>ご担当者名{requiredMark}</label>
          <input type="text" value={form.contactName} onChange={(e) => onChange("contactName", e.target.value)}
            placeholder="山田 太郎" className={inputClass(!!errors.contactName)} />
          {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>}
        </div>
        <div>
          <label className={labelClass}>メールアドレス{requiredMark}</label>
          <input type="email" value={form.email} onChange={(e) => onChange("email", e.target.value)}
            placeholder="info@example.com" className={inputClass(!!errors.email)} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <div>
          <label className={labelClass}>電話番号</label>
          <input type="tel" value={form.phone} onChange={(e) => onChange("phone", e.target.value)}
            placeholder="06-xxxx-xxxx" className={inputClass()} />
        </div>
        <div>
          <label className={labelClass}>都道府県</label>
          <select value={form.prefecture} onChange={(e) => onChange("prefecture", e.target.value)}
            className={inputClass()}>
            <option value="">選択してください</option>
            {prefectures.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>市区町村・住所</label>
          <input type="text" value={form.city} onChange={(e) => onChange("city", e.target.value)}
            placeholder="尼崎市南武庫之荘" className={inputClass()} />
        </div>
      </div>
    </>
  );
}

// ─── Collection Form ──────────────────────────────────────────────────────────

function CollectionFormComponent() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [form, setForm] = useState<CollectionForm>({
    companyName: "", contactName: "", email: "", phone: "",
    prefecture: "", city: "",
    items: [], itemVolumes: {}, frequency: "",
    locationCount: "", currentStatus: "", desiredTiming: "",
    images: [], note: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateBase = (key: keyof BaseInfo, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleItem = (id: string) => {
    setForm((prev) => {
      const newItems = prev.items.includes(id)
        ? prev.items.filter((i) => i !== id)
        : [...prev.items, id];
      const newVolumes = { ...prev.itemVolumes };
      if (!newItems.includes(id)) delete newVolumes[id];
      return { ...prev, items: newItems, itemVolumes: newVolumes };
    });
  };

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const valid = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, 5);
    setForm((prev) => ({ ...prev, images: [...prev.images, ...valid].slice(0, 5) }));
  };

  const removeImage = (idx: number) =>
    setForm((prev) => ({ ...prev, images: prev.images.filter((_, i) => i !== idx) }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.companyName) e.companyName = "会社名を入力してください";
    if (!form.contactName) e.contactName = "ご担当者名を入力してください";
    if (!form.email) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    if (form.items.length === 0) e.items = "品目を1つ以上選択してください";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Collection form:", form);
    setSubmitted(true);
  };

  if (submitted) return <SuccessScreen />;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BaseInfoFields form={form} errors={errors} onChange={updateBase} />

      {/* 品目 */}
      <div>
        <SectionTitle>回収品目・数量</SectionTitle>
        <div className="mb-2">
          <label className={labelClass}>回収をご希望の品目{requiredMark}<span className="text-gray-400 font-normal ml-1">（複数選択可）</span></label>
          <div className="flex flex-wrap gap-2 mt-2">
            {collectItems.map((item) => {
              const active = form.items.includes(item.id);
              return (
                <button type="button" key={item.id} onClick={() => toggleItem(item.id)}
                  className={`px-4 py-2 text-sm border font-medium transition-colors ${
                    active ? "bg-green-700 text-white border-green-700" : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
                  }`}>
                  {item.label}
                </button>
              );
            })}
          </div>
          {errors.items && <p className="text-red-500 text-xs mt-2">{errors.items}</p>}
        </div>

        {/* 選択した品目の月間発生量 */}
        {form.items.length > 0 && (
          <div className="mt-4 border border-gray-200 bg-gray-50 p-4 space-y-3">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">月間おおよその発生量（任意）</p>
            {form.items.map((id) => {
              const item = collectItems.find((c) => c.id === id)!;
              return (
                <div key={id} className="flex items-center gap-3">
                  <span className="text-sm text-gray-700 w-44 shrink-0">{item.label}</span>
                  <input type="text"
                    value={form.itemVolumes[id] || ""}
                    onChange={(e) => setForm((prev) => ({ ...prev, itemVolumes: { ...prev.itemVolumes, [id]: e.target.value } }))}
                    placeholder="例：段ボール 500kg/月、10箱/月 など"
                    className="flex-1 px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* 回収条件 */}
      <div>
        <SectionTitle>回収条件</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>希望回収頻度</label>
            <select value={form.frequency} onChange={(e) => setForm({ ...form, frequency: e.target.value })}
              className={inputClass()}>
              <option value="">選択してください</option>
              {frequencies.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>対象拠点数</label>
            <select value={form.locationCount} onChange={(e) => setForm({ ...form, locationCount: e.target.value })}
              className={inputClass()}>
              <option value="">選択してください</option>
              {locationCounts.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>現在の処理状況</label>
            <select value={form.currentStatus} onChange={(e) => setForm({ ...form, currentStatus: e.target.value })}
              className={inputClass()}>
              <option value="">選択してください</option>
              {currentStatuses.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>ご希望の対応時期</label>
            <select value={form.desiredTiming} onChange={(e) => setForm({ ...form, desiredTiming: e.target.value })}
              className={inputClass()}>
              <option value="">選択してください</option>
              {desiredTimings.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* 現場画像 */}
      <div>
        <SectionTitle>現場画像（任意）</SectionTitle>
        <p className="text-xs text-gray-500 mb-3">保管場所・廃棄物の状況など、画像があると迅速なご提案が可能です。最大5枚・各10MB以内</p>
        <div
          className="border-2 border-dashed border-gray-300 bg-gray-50 p-6 text-center cursor-pointer hover:border-green-500 transition-colors"
          onClick={() => fileInputRef.current?.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => { e.preventDefault(); handleFiles(e.dataTransfer.files); }}
        >
          <svg aria-hidden="true" className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm text-gray-600">クリックまたはドラッグ＆ドロップで画像を追加</p>
          <p className="text-xs text-gray-400 mt-1">JPG / PNG / HEIC 対応</p>
          <input ref={fileInputRef} type="file" accept="image/*" multiple className="hidden"
            onChange={(e) => handleFiles(e.target.files)} />
        </div>
        {form.images.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {form.images.map((file, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-green-50 border border-green-200 px-3 py-1.5 text-xs text-green-800">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01" />
                </svg>
                <span className="max-w-[160px] truncate">{file.name}</span>
                <button type="button" onClick={() => removeImage(idx)} className="text-green-600 hover:text-red-500 transition-colors ml-1">✕</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 備考 */}
      <div>
        <SectionTitle>備考・その他ご要望</SectionTitle>
        <textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}
          rows={4} placeholder="現在の課題・ご要望・ご質問などをご自由にご記入ください。"
          className={`${inputClass()} resize-none`} />
      </div>

      <PrivacyNote />
      <SubmitButton />
    </form>
  );
}

// ─── Waste Mgmt Form ──────────────────────────────────────────────────────────

function WasteMgmtFormComponent() {
  const [form, setForm] = useState<WasteMgmtForm>({
    companyName: "", contactName: "", email: "", phone: "",
    prefecture: "", city: "",
    locationCount: "", annualCost: "", challenges: [], desiredServices: [], note: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateBase = (key: keyof BaseInfo, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggleChallenge = (v: string) =>
    setForm((prev) => ({
      ...prev,
      challenges: prev.challenges.includes(v) ? prev.challenges.filter((c) => c !== v) : [...prev.challenges, v],
    }));

  const toggleService = (v: string) =>
    setForm((prev) => ({
      ...prev,
      desiredServices: prev.desiredServices.includes(v) ? prev.desiredServices.filter((s) => s !== v) : [...prev.desiredServices, v],
    }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.companyName) e.companyName = "会社名を入力してください";
    if (!form.contactName) e.contactName = "ご担当者名を入力してください";
    if (!form.email) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Waste mgmt form:", form);
    setSubmitted(true);
  };

  if (submitted) return <SuccessScreen />;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BaseInfoFields form={form} errors={errors} onChange={updateBase} />

      {/* 企業状況 */}
      <div>
        <SectionTitle>現在の状況</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>事業所・拠点数</label>
            <select value={form.locationCount} onChange={(e) => setForm({ ...form, locationCount: e.target.value })}
              className={inputClass()}>
              <option value="">選択してください</option>
              {locationCounts.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>年間廃棄物処理費用の目安</label>
            <select value={form.annualCost} onChange={(e) => setForm({ ...form, annualCost: e.target.value })}
              className={inputClass()}>
              <option value="">選択してください</option>
              {annualCosts.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* 課題 */}
      <div>
        <SectionTitle>現状の課題</SectionTitle>
        <label className={labelClass}>当てはまるものをすべて選択してください</label>
        <div className="flex flex-wrap gap-2 mt-2">
          {challengeOptions.map((opt) => {
            const active = form.challenges.includes(opt);
            return (
              <button type="button" key={opt} onClick={() => toggleChallenge(opt)}
                className={`px-4 py-2 text-sm border font-medium transition-colors ${
                  active ? "bg-green-700 text-white border-green-700" : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
                }`}>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* 希望サービス */}
      <div>
        <SectionTitle>ご希望のサービス</SectionTitle>
        <div className="flex flex-wrap gap-2">
          {desiredServiceOptions.map((opt) => {
            const active = form.desiredServices.includes(opt);
            return (
              <button type="button" key={opt} onClick={() => toggleService(opt)}
                className={`px-4 py-2 text-sm border font-medium transition-colors ${
                  active ? "bg-green-700 text-white border-green-700" : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
                }`}>
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* 備考 */}
      <div>
        <SectionTitle>ご相談内容・備考</SectionTitle>
        <textarea value={form.note} onChange={(e) => setForm({ ...form, note: e.target.value })}
          rows={4} placeholder="現在の廃棄物管理の課題や、具体的にご相談したい内容をご記入ください。"
          className={`${inputClass()} resize-none`} />
      </div>

      <PrivacyNote />
      <SubmitButton />
    </form>
  );
}

// ─── Other Form ───────────────────────────────────────────────────────────────

function OtherFormComponent() {
  const [form, setForm] = useState<OtherForm>({
    companyName: "", contactName: "", email: "", phone: "",
    prefecture: "", city: "", content: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const updateBase = (key: keyof BaseInfo, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.companyName) e.companyName = "会社名を入力してください";
    if (!form.contactName) e.contactName = "ご担当者名を入力してください";
    if (!form.email) e.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "正しいメールアドレスを入力してください";
    if (!form.content) e.content = "お問い合わせ内容を入力してください";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("Other form:", form);
    setSubmitted(true);
  };

  if (submitted) return <SuccessScreen />;

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <BaseInfoFields form={form} errors={errors} onChange={updateBase} />

      <div>
        <SectionTitle>お問い合わせ内容</SectionTitle>
        <textarea value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
          rows={6} placeholder="ご質問・ご要望などをご記入ください。"
          className={`${inputClass(!!errors.content)} resize-none`} />
        {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content}</p>}
      </div>

      <PrivacyNote />
      <SubmitButton />
    </form>
  );
}

// ─── Shared ───────────────────────────────────────────────────────────────────

function PrivacyNote() {
  return (
    <div className="bg-gray-50 border border-gray-200 p-4 text-xs text-gray-500">
      ご入力いただいた個人情報は、お問い合わせへの回答・サービスのご案内のみに使用し、第三者への提供は行いません。
      詳細は<a href="/privacy" className="underline hover:text-green-700">プライバシーポリシー</a>をご確認ください。
    </div>
  );
}

function SubmitButton() {
  return (
    <button type="submit"
      className="w-full py-4 bg-green-700 text-white font-bold text-base hover:bg-green-800 transition-colors">
      送信する
    </button>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

const tabs: { id: TabType; label: string; sub: string }[] = [
  { id: "collection", label: "回収・お見積り", sub: "古紙・廃プラ・機密書類 など" },
  { id: "waste-mgmt", label: "廃棄物管理・BPO", sub: "管理代行・コンサルティング" },
  { id: "other", label: "その他", sub: "一般的なご質問など" },
];

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<TabType>("collection");

  return (
    <div>
      {/* タブ */}
      <div className="grid grid-cols-3 gap-px bg-gray-200 mb-8">
        {tabs.map((tab) => {
          const active = activeTab === tab.id;
          return (
            <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-4 text-left transition-colors ${
                active ? "bg-green-700 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
              }`}>
              <p className={`font-bold text-sm leading-snug ${active ? "text-white" : "text-gray-800"}`}>
                {tab.label}
              </p>
              <p className={`text-xs mt-0.5 ${active ? "text-green-200" : "text-gray-400"}`}>
                {tab.sub}
              </p>
            </button>
          );
        })}
      </div>

      {/* フォーム本体 */}
      {activeTab === "collection" && <CollectionFormComponent />}
      {activeTab === "waste-mgmt" && <WasteMgmtFormComponent />}
      {activeTab === "other" && <OtherFormComponent />}
    </div>
  );
}
