"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

type NavItem =
  | { href: string; label: string; children?: never }
  | { href?: never; label: string; children: { href: string; label: string }[] };

const navItems: NavItem[] = [
  {
    label: "サービス一覧",
    children: [
      { href: "/service", label: "リサイクル・処分" },
      { href: "/service/waste-management", label: "廃棄物管理" },
      { href: "/service/bpo", label: "BPO（事務作業代行）" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  { href: "/area", label: "回収エリア" },
  { href: "/items", label: "回収品目" },
  { href: "/pricing", label: "料金" },
  {
    label: "会社情報",
    children: [
      { href: "/company", label: "会社概要" },
      { href: "/factory", label: "工場紹介" },
      { href: "/recruit", label: "採用情報" },
      { href: "/blog", label: "コラム" },
    ],
  },
];

const isDropdownActive = (label: string, pathname: string) => {
  if (label === "サービス一覧") return pathname.startsWith("/service") || pathname === "/faq";
  if (label === "会社情報") return ["/company", "/factory", "/recruit", "/blog"].includes(pathname);
  return false;
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenLabel, setMobileOpenLabel] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMobile = (label: string) =>
    setMobileOpenLabel((prev) => (prev === label ? null : label));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm">
      {/* ── Top bar ── */}
      <div className="bg-blue-800 text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
          <p className="hidden sm:block text-blue-200">
            関西の総合リサイクル企業
          </p>
          <div className="flex items-center gap-3 ml-auto">
            <span className="text-blue-200 text-xs hidden sm:inline">お気軽にご相談ください</span>
            <Link
              href="/contact"
              className="bg-white text-blue-800 font-bold px-4 py-1 text-xs hover:bg-blue-50 transition-colors flex items-center gap-1.5"
            >
              <svg aria-hidden="true" focusable="false" className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
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
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logo.jpg"
                alt="共栄紙業株式会社"
                width={180}
                height={54}
                className="h-10 lg:h-12 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-stretch h-full">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative flex items-stretch"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 xl:px-4 text-sm font-medium transition-colors border-b-2 -mb-px ${
                        isDropdownActive(item.label, pathname)
                          ? "text-green-700 border-green-700"
                          : "text-gray-700 border-transparent hover:text-green-700 hover:border-green-400"
                      }`}
                    >
                      {item.label}
                      <svg aria-hidden="true" focusable="false" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 w-48 bg-white border border-gray-200 shadow-lg z-50">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center px-4 py-3 text-sm border-b border-gray-100 last:border-0 transition-colors ${
                              pathname === child.href || (child.href === "/service" && pathname.startsWith("/service/") && !pathname.startsWith("/service/waste") && !pathname.startsWith("/service/bpo"))
                                ? "text-green-700 font-semibold bg-green-50"
                                : "text-gray-700 hover:text-green-700 hover:bg-green-50"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
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
                )
              )}
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
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => toggleMobile(item.label)}
                    className={`w-full flex items-center justify-between py-3.5 border-b border-gray-100 text-sm ${
                      isDropdownActive(item.label, pathname) ? "text-green-700 font-semibold" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                    <svg
                      aria-hidden="true" focusable="false"
                      className={`w-4 h-4 text-gray-400 transition-transform ${mobileOpenLabel === item.label ? "rotate-90" : ""}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {mobileOpenLabel === item.label && (
                    <div className="bg-gray-50 border-b border-gray-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between pl-6 pr-4 py-3 border-b border-gray-100 last:border-0 text-sm ${
                            pathname === child.href ? "text-green-700 font-semibold" : "text-gray-600"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-3 h-px bg-gray-400 inline-block" />
                            {child.label}
                          </span>
                          <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between py-3.5 border-b border-gray-100 text-sm ${
                    pathname === item.href ? "text-green-700 font-semibold" : "text-gray-700"
                  }`}
                >
                  {item.label}
                  <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between py-3.5 border-b border-gray-100 text-sm text-gray-700"
            >
              お問い合わせ
              <svg aria-hidden="true" focusable="false" className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
