import { ImageResponse } from "next/og";
import { blogPosts } from "@/data/faq";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  const title = post ? post.title : "コラム・ブログ";
  const description = post ? post.description : "古紙・資源リサイクル・廃棄物管理に関する解説記事";
  const category = post ? post.category : "";
  const readingTime = post ? post.readingTime : "";

  // タイトルが長い場合の折り返し調整
  const fontSize = title.length > 24 ? "44px" : "52px";

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

        {/* 会社名 + カテゴリ */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <span style={{ color: "#9ca3af", fontSize: "20px", letterSpacing: "0.08em" }}>
            共栄紙業株式会社
          </span>
          <span style={{ color: "#4b5563", fontSize: "20px" }}>/</span>
          <span style={{ color: "#9ca3af", fontSize: "20px" }}>コラム・ブログ</span>
          {category && (
            <div
              style={{
                backgroundColor: "#15803d",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 700,
                padding: "4px 16px",
              }}
            >
              {category}
            </div>
          )}
        </div>

        {/* 記事タイトル */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize,
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "28px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              color: "#9ca3af",
              fontSize: "22px",
              lineHeight: 1.6,
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
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
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            <span style={{ color: "#4b5563", fontSize: "20px" }}>kyoei-shigyo.jp</span>
            {readingTime && (
              <span style={{ color: "#4b5563", fontSize: "18px" }}>
                読了目安 {readingTime}
              </span>
            )}
          </div>
          <div
            style={{
              border: "1px solid #374151",
              color: "#9ca3af",
              fontSize: "18px",
              padding: "8px 24px",
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
