import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "共栄紙業株式会社 | 関西の古紙・資源リサイクル専門";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
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
        {/* グリーンアクセントバー（上部） */}
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

        {/* 会社名バッジ */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#15803d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "16px", height: "16px", backgroundColor: "#fff" }} />
          </div>
          <span style={{ color: "#9ca3af", fontSize: "20px", letterSpacing: "0.1em" }}>
            共栄紙業株式会社
          </span>
        </div>

        {/* メインタイトル */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.2,
              marginBottom: "24px",
            }}
          >
            関西の古紙・資源リサイクル専門
            <br />
            廃棄物管理は全国対応
          </div>
          <div style={{ color: "#6b7280", fontSize: "26px", lineHeight: 1.6 }}>
            古紙回収 / 機密書類処理 / 金属スクラップ回収 / 産業廃棄物収集運搬
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
              letterSpacing: "0.05em",
            }}
          >
            お問い合わせ
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
