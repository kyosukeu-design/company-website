"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/service", label: "サービス" },
  { href: "/items", label: "回収できるもの" },
  { href: "/area", label: "回収エリア" },
  { href: "/results", label: "実績" },
  { href: "/factory", label: "工場紹介" },
  { href: "/flow", label: "回収の流れ" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* ── Top bar ── */}
      <div className="bg-green-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <p className="hidden sm:block text-green-200">
            兵庫・大阪の古紙・資源リサイクル専門企業
          </p>
          <div className="flex items-center gap-5 ml-auto">
            <span className="flex items-center gap-1.5 text-green-100">
              <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-accent font-semibold text-white tracking-wide">078-xxx-xxxx</span>
              <span className="text-green-300 hidden sm:inline">（平日 8:00〜17:00）</span>
            </span>
            <Link
              href="/contact"
              className="bg-white text-green-800 font-bold px-3 py-1 text-xs hover:bg-green-50 transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <div className="bg-white border-b-2 border-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[68px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <div className="w-8 h-8 bg-green-700 flex items-center justify-center">
                <svg aria-hidden="true" focusable="false" className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                </svg>
              </div>
              <div className="leading-tight">
                <div className="text-green-800 font-bold text-base lg:text-lg tracking-tight">共栄紙業株式会社</div>
                <div className="font-accent text-gray-500 text-xs tracking-widest">KYOEI SHIGYO CO., LTD.</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-stretch h-full">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative flex items-center px-3 xl:px-4 text-sm font-medium transition-colors border-b-2 -mb-px ${
                    pathname === item.href
                      ? "text-green-700 border-green-700"
                      : "text-gray-700 border-transparent hover:text-green-700 hover:border-green-400"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700"
              aria-label="メニュー"
            >
              <svg aria-hidden="true" focusable="false" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4">
            {[...navItems, { href: "/contact", label: "お問い合わせ" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-3.5 border-b border-gray-100 text-sm ${
                  pathname === item.href
                    ? "text-green-700 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.label}
                <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
