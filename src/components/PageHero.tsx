import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <section className="pt-[100px] lg:pt-[112px] bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        {/* Breadcrumb */}
        <nav className="font-accent flex items-center gap-1.5 text-xs text-gray-500 mb-5">
          <Link href="/" className="hover:text-green-700 transition-colors">ホーム</Link>
          <svg aria-hidden="true" focusable="false" className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-700">{breadcrumb}</span>
        </nav>

        {/* Title */}
        <div className="flex items-start gap-4">
          <div className="w-1 self-stretch bg-green-700 shrink-0" />
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-snug">{title}</h1>
            {subtitle && (
              <p className="text-gray-500 text-sm mt-2">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
