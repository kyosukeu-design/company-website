"use client";
import { useState } from "react";

type FormData = {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  area: string;
  inquiryType: string;
  items: string[];
  frequency: string;
  message: string;
};

const inquiryTypes = [
  "定期回収の依頼",
  "スポット回収の依頼",
  "機密文書処理の依頼",
  "買取についての相談",
  "料金・見積りの依頼",
  "その他",
];

const collectItems = [
  "段ボール",
  "新聞・雑誌",
  "コピー用紙・上質紙",
  "機密文書",
  "金属スクラップ",
  "プラスチック類",
  "その他",
];

const frequencies = ["週1回以上", "週1回", "月2回", "月1回", "スポット（随時）", "未定"];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    area: "",
    inquiryType: "",
    items: [],
    frequency: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!form.companyName) newErrors.companyName = "会社名を入力してください";
    if (!form.contactName) newErrors.contactName = "ご担当者名を入力してください";
    if (!form.email) newErrors.email = "メールアドレスを入力してください";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "正しいメールアドレスを入力してください";
    if (!form.inquiryType) newErrors.inquiryType = "お問い合わせ種別を選択してください";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    // In production, send to API
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  const toggleItem = (item: string) => {
    setForm((prev) => ({
      ...prev,
      items: prev.items.includes(item)
        ? prev.items.filter((i) => i !== item)
        : [...prev.items, item],
    }));
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 p-10 text-center border-l-4 border-l-green-700">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">お問い合わせを受け付けました</h2>
        <p className="text-gray-600 text-sm">
          ご入力いただいたメールアドレスに確認メールをお送りしました。<br />
          通常2営業日以内に担当者よりご連絡いたします。<br />
          お急ぎの場合は 078-xxx-xxxx までお電話ください。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            会社名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
            placeholder="株式会社○○"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.companyName ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.companyName && <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            ご担当者名 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.contactName}
            onChange={(e) => setForm({ ...form, contactName: e.target.value })}
            placeholder="山田 太郎"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.contactName ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.contactName && <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="info@example.com"
            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.email ? "border-red-400" : "border-gray-300"
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">電話番号</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="06-xxxx-xxxx"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          お問い合わせ種別 <span className="text-red-500">*</span>
        </label>
        <select
          value={form.inquiryType}
          onChange={(e) => setForm({ ...form, inquiryType: e.target.value })}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 ${
            errors.inquiryType ? "border-red-400" : "border-gray-300"
          }`}
        >
          <option value="">選択してください</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.inquiryType && <p className="text-red-500 text-xs mt-1">{errors.inquiryType}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">回収をご希望の品目（複数選択可）</label>
        <div className="flex flex-wrap gap-2">
          {collectItems.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => toggleItem(item)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${
                form.items.includes(item)
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">ご希望の回収頻度</label>
          <select
            value={form.frequency}
            onChange={(e) => setForm({ ...form, frequency: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">選択してください</option>
            {frequencies.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">ご所在地（市区町村）</label>
          <input
            type="text"
            value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
            placeholder="例：神戸市中央区"
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">お問い合わせ内容・ご質問</label>
        <textarea
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={5}
          placeholder="ご質問・ご要望をご記入ください。回収量の目安・現在の状況等をお知らせいただくとよりスムーズです。"
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
        />
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-xs text-gray-500">
        ご入力いただいた個人情報は、お問い合わせへの回答・サービスのご案内のみに使用し、第三者への提供は行いません。
        詳細はプライバシーポリシーをご確認ください。
      </div>

      <button
        type="submit"
        className="w-full py-4 bg-green-700 text-white font-bold text-base border-2 border-green-700 hover:bg-green-800 hover:border-green-800 transition-colors"
      >
        送信する
      </button>
    </form>
  );
}
