import { ImageResponse } from "next/og";
import { blogPosts } from "@/lib/content";

export const alt = "Flycomm Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  const title = post?.title ?? "Flycomm Blog";
  const category = post?.category ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "60px",
          background: "linear-gradient(135deg, #0c1222 0%, #1a2744 50%, #0c1222 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {category && (
          <div
            style={{
              display: "flex",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                padding: "6px 16px",
                borderRadius: "20px",
                background: "#00a6f4",
                color: "#ffffff",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {category}
            </div>
          </div>
        )}
        <div
          style={{
            fontSize: title.length > 60 ? 36 : 44,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            marginBottom: "32px",
            maxWidth: "900px",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #00a6f4, #0077b6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            F
          </div>
          <div style={{ fontSize: 18, color: "#8899aa" }}>
            Flycomm Blog
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
