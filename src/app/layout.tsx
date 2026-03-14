import type { Metadata } from "next";
import { Noto_Sans_JP, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-noto",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const BASE_URL = "https://kyoei-shigyo.jp";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "共栄紙業株式会社 | 兵庫・大阪の古紙・資源リサイクル",
    template: "%s | 共栄紙業株式会社",
  },
  description:
    "共栄紙業株式会社は兵庫・大阪を中心に古紙・資源リサイクルを行う専門企業です。企業からの回収依頼を承っております。",
  keywords: ["古紙回収", "資源リサイクル", "段ボール回収", "兵庫", "大阪", "企業回収"],
  alternates: { canonical: BASE_URL },
  openGraph: {
    siteName: "共栄紙業株式会社",
    locale: "ja_JP",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "共栄紙業株式会社",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description: "兵庫・大阪を中心に古紙・資源リサイクル・機密書類処理・産業廃棄物収集運搬を行う専門企業。",
  address: {
    "@type": "PostalAddress",
    streetAddress: "潮江1丁目",
    addressLocality: "尼崎市",
    addressRegion: "兵庫県",
    postalCode: "660-0805",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "078-XXX-XXXX",
    contactType: "customer service",
    areaServed: ["兵庫県", "大阪府"],
    availableLanguage: "Japanese",
  },
  areaServed: [
    { "@type": "State", name: "兵庫県" },
    { "@type": "State", name: "大阪府" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${montserrat.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
