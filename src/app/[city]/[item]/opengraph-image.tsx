import { ImageResponse } from "next/og";
import { getCityBySlug, getItemBySlug } from "@/data/locations";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ city: string; item: string }>;
}) {
  const { city: citySlug, item: itemSlug } = await params;
  const city = getCityBySlug(citySlug);
  const item = getItemBySlug(itemSlug);

  const title = city && item ? `${city.name}の${item.shortName}` : "サービス詳細";
  const tagline = item ? item.tagline : "";
  const category = item ? item.legalCategory : "";
  const pref = city ? city.pref : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#111827",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* グリーンアクセントバー */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "8px",
            backgroundColor: "#15803d",
          }}
        />

        {/* 会社名 + カテゴリバッジ */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <span style={{ color: "#9ca3af", fontSize: "20px", letterSpacing: "0.08em" }}>
            共栄紙業株式会社
          </span>
          {category && (
            <div
              style={{
                border: "1px solid #15803d",
                color: "#4ade80",
                fontSize: "16px",
                fontWeight: 600,
                padding: "4px 16px",
                letterSpacing: "0.05em",
              }}
            >
              {category}
            </div>
          )}
          {pref && (
            <div
              style={{
                backgroundColor: "#1f2937",
                color: "#9ca3af",
                fontSize: "16px",
                padding: "4px 16px",
              }}
            >
              {pref}
            </div>
          )}
        </div>

        {/* メインタイトル */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: "28px",
            }}
          >
            {title}
          </div>
          <div style={{ color: "#9ca3af", fontSize: "26px", lineHeight: 1.6 }}>
            {tagline}
          </div>
        </div>

        {/* フッター */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #374151",
            paddingTop: "28px",
          }}
        >
          <span style={{ color: "#4b5563", fontSize: "20px" }}>kyoei-shigyo.jp</span>
          <div
            style={{
              backgroundColor: "#15803d",
              color: "#ffffff",
              fontSize: "18px",
              fontWeight: 700,
              padding: "10px 28px",
            }}
          >
            無料でお問い合わせ
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
