import Link from "next/link";

const navLinks = [
  { href: "/service", label: "サービス" },
  { href: "/items", label: "回収できるもの" },
  { href: "/area", label: "回収エリア" },
  { href: "/results", label: "実績" },
  { href: "/factory", label: "工場紹介" },
  { href: "/flow", label: "回収の流れ" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-10 lg:gap-16">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-7 h-7 bg-green-700 flex items-center justify-center shrink-0">
                <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-sm">共栄紙業株式会社</div>
                <div className="font-accent text-gray-500 text-xs tracking-widest">KYOEI SHIGYO CO., LTD.</div>
              </div>
            </div>

            <div className="space-y-1.5 text-xs leading-relaxed mb-5">
              <p>〒xxx-xxxx　兵庫県○○市○○町x-x-x</p>
              <p>
                <span className="text-gray-500 mr-2">TEL</span>
                <span className="text-gray-300">078-xxx-xxxx</span>
              </p>
              <p>
                <span className="text-gray-500 mr-2">FAX</span>
                <span className="text-gray-300">078-xxx-xxxx</span>
              </p>
              <p>
                <span className="text-gray-500 mr-2">受付時間</span>
                <span className="text-gray-300">平日 8:00〜17:00</span>
              </p>
            </div>

            <p className="text-xs leading-relaxed">
              兵庫・大阪を中心に創業40年。古紙・資源リサイクルを通じて
              企業の持続可能な廃棄物管理をサポートしています。
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="font-accent text-gray-200 text-xs font-bold tracking-widest mb-4 uppercase">Sitemap</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
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

          {/* Contact */}
          <div>
            <h3 className="font-accent text-gray-200 text-xs font-bold tracking-widest mb-4 uppercase">Contact</h3>
            <div className="bg-gray-800 p-5 mb-4 min-w-[200px]">
              <p className="text-gray-500 text-xs mb-1">お電話でのお問い合わせ</p>
              <p className="font-accent text-white font-bold text-xl tracking-wide">078-xxx-xxxx</p>
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
