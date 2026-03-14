import { ImageResponse } from "next/og";
import { getCityBySlug } from "@/data/locations";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  const title = city ? `${city.name}の古紙・資源回収` : "対応エリア";
  const subtitle = city
    ? `${city.pref}${city.name}の古紙回収・機密書類処理・金属スクラップ・産業廃棄物収集運搬`
    : "兵庫・大阪エリアのサービス詳細";
  const badge = city ? city.pref : "対応エリア";
  const note = city ? city.accessNote : "";

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

        {/* 会社名 + エリアバッジ */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "48px" }}>
          <span style={{ color: "#9ca3af", fontSize: "20px", letterSpacing: "0.08em" }}>
            共栄紙業株式会社
          </span>
          <div
            style={{
              backgroundColor: "#15803d",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              padding: "4px 16px",
              letterSpacing: "0.05em",
            }}
          >
            {badge}
          </div>
        </div>

        {/* メインタイトル */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "64px",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "28px",
            }}
          >
            {title}
          </div>
          <div style={{ color: "#9ca3af", fontSize: "26px", lineHeight: 1.6 }}>
            {subtitle}
          </div>
          {note && (
            <div
              style={{
                color: "#6b7280",
                fontSize: "20px",
                marginTop: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#15803d",
                  borderRadius: "50%",
                }}
              />
              {note}
            </div>
          )}
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
