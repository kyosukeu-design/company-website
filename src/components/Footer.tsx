import Link from "next/link";
import Image from "next/image";

const sitemapGroups = [
  {
    label: "サービス",
    links: [
      { href: "/service", label: "リサイクル・処分" },
      { href: "/service/waste-management", label: "廃棄物管理" },
      { href: "/service/bpo", label: "BPO（事務作業代行）" },
    ],
  },
  {
    label: "情報",
    links: [
      { href: "/area", label: "回収エリア" },
      { href: "/items", label: "回収品目" },
      { href: "/pricing", label: "料金" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "お問い合わせ" },
    ],
  },
  {
    label: "会社情報",
    links: [
      { href: "/company", label: "会社概要" },
      { href: "/factory", label: "工場紹介" },
      { href: "/recruit", label: "採用情報" },
      { href: "/blog", label: "コラム" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400" style={{ borderTop: "3px solid #4b5cc4" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 lg:gap-16">
          {/* Company */}
          <div>
            <div className="mb-5">
              <div className="mb-3">
                <Image
                  src="/logo-transparent.png"
                  alt="共栄紙業株式会社"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <p className="text-white font-bold text-xl tracking-wide">共栄紙業株式会社</p>
            </div>

            <div className="space-y-1.5 text-xs leading-relaxed mb-5">
              <p className="text-gray-400">〒661-0033　兵庫県尼崎市南武庫之荘10丁目7番9号</p>
              <p>
                <span className="text-gray-500 mr-2">TEL</span>
                <span className="text-gray-300">06-6437-0180</span>
              </p>
              <p>
                <span className="text-gray-500 mr-2">受付時間</span>
                <span className="text-gray-300">平日 8:00〜17:00</span>
              </p>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              関西を中心に創業70年。<br />
              古紙・資源リサイクルを通じて<br />
              企業の持続可能な廃棄物管理を<br />
              サポートしています。
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-accent text-gray-200 text-xs font-bold tracking-widest mb-4 uppercase">Sitemap</h3>
            <div className="flex gap-8 lg:gap-10">
              {sitemapGroups.map((group) => (
                <div key={group.label}>
                  <p className="text-gray-500 text-xs font-bold mb-3 uppercase tracking-wider">{group.label}</p>
                  <ul className="space-y-2.5">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-xs text-gray-400 hover:text-green-400 transition-colors flex items-center gap-1.5"
                        >
                          <span className="w-3 h-px bg-gray-600 inline-block" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-accent text-gray-200 text-xs font-bold tracking-widest mb-4 uppercase">Contact</h3>
            <div className="bg-gray-800 p-5 mb-4 min-w-[200px]">
              <p className="text-gray-500 text-xs mb-1">お電話でのお問い合わせ</p>
              <p className="font-accent text-white font-bold text-xl tracking-wide">06-6437-0180</p>
              <p className="text-gray-500 text-xs mt-1">平日 8:00〜17:00</p>
            </div>
            <Link
              href="/contact"
              className="block text-center text-xs font-bold py-3 px-5 bg-green-700 text-white hover:bg-green-800 transition-colors"
            >
              WEBでお問い合わせ
            </Link>
            <p className="text-xs text-gray-600 text-center mt-2">24時間受付</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 flex items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} 共栄紙業株式会社 All Rights Reserved.
          </p>
          <Link href="/privacy" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
            プライバシーポリシー
          </Link>
        </div>
      </div>
    </footer>
  );
}
