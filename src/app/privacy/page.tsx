import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "共栄紙業株式会社のプライバシーポリシー。個人情報の取り扱いについて定めています。",
};

const sections = [
  {
    title: "1. 個人情報の収集について",
    content: "当社は、お問い合わせ・お見積り依頼・サービスのご利用にあたり、お名前・会社名・メールアドレス・電話番号・住所等の個人情報をご提供いただく場合があります。個人情報は、お客様の同意のもとで収集いたします。",
  },
  {
    title: "2. 個人情報の利用目的",
    content: "収集した個人情報は、以下の目的のために利用いたします。",
    list: [
      "お問い合わせ・お見積りへの回答および連絡",
      "サービスの提供・契約の履行",
      "サービスに関するご案内・情報提供（お客様の同意がある場合）",
      "法令に基づく対応",
    ],
  },
  {
    title: "3. 個人情報の第三者提供",
    content: "当社は、以下の場合を除き、お客様の個人情報を第三者に提供・開示いたしません。",
    list: [
      "お客様の事前の同意がある場合",
      "法令に基づき開示が必要な場合",
      "人の生命・身体・財産の保護のために必要で、お客様の同意を得ることが困難な場合",
    ],
  },
  {
    title: "4. 個人情報の管理",
    content: "当社は、個人情報の紛失・破壊・改ざん・漏洩を防ぐため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業員に対して、適切な監督を行います。",
  },
  {
    title: "5. 個人情報の開示・訂正・削除",
    content: "お客様は、当社が保有するご自身の個人情報について、開示・訂正・削除を請求することができます。ご請求の場合は、下記お問い合わせ先までご連絡ください。ご本人確認のうえ、合理的な期間内に対応いたします。",
  },
  {
    title: "6. Cookieの使用について",
    content: "当社ウェブサイトでは、ウェブサイトの利便性向上・アクセス解析のためにCookieを使用する場合があります。ブラウザの設定によりCookieの使用を無効にすることができますが、一部のサービスが正常に動作しない場合があります。",
  },
  {
    title: "7. プライバシーポリシーの変更",
    content: "当社は、法令の改正・事業内容の変更等により、本プライバシーポリシーを変更する場合があります。変更後のプライバシーポリシーは、当社ウェブサイト上に掲載した時点から効力を生じます。",
  },
  {
    title: "8. お問い合わせ",
    content: "個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。",
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="プライバシーポリシー"
        subtitle="共栄紙業株式会社における個人情報の取り扱いについて定めています。"
        breadcrumb="プライバシーポリシー"
      />

      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 p-5 bg-gray-50 border-l-4 border-green-700">
            <p className="text-gray-700 text-sm leading-relaxed">
              共栄紙業株式会社（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、
              個人情報の保護に関する法律（個人情報保護法）および関連法令を遵守します。
            </p>
            <p className="text-gray-500 text-xs mt-2">制定日：2024年1月1日</p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-bold text-gray-900 text-base mb-3 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">{section.content}</p>
                {section.list && (
                  <ul className="mt-3 space-y-1.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1 h-1 bg-green-600 shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.contact && (
                  <div className="mt-4 p-5 bg-gray-50 border border-gray-200">
                    <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">会社名：</span>共栄紙業株式会社</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">所在地：</span>〒660-0805 兵庫県尼崎市潮江1丁目</p>
                    <p className="text-sm text-gray-700 mb-1"><span className="font-semibold">電話：</span>078-XXX-XXXX（平日 9:00〜17:00）</p>
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">フォーム：</span>
                      <Link href="/contact" className="text-green-700 hover:underline">
                        お問い合わせフォーム
                      </Link>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
