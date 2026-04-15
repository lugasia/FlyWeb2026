import { ImageResponse } from "next/og";

export const alt = "Flycomm — AI-Powered Network Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0c1222 0%, #1a2744 50%, #0c1222 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #00a6f4, #0077b6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            F
          </div>
          <div style={{ fontSize: 56, fontWeight: 700, color: "#ffffff" }}>
            Flycomm
          </div>
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#00a6f4",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          AI-Powered Network Intelligence
        </div>
        <div style={{ fontSize: 20, color: "#8899aa" }}>
          See What Others Can't
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "40px",
          }}
        >
          {["94% Accuracy", "<1hr Deploy", "3x ROI"].map((stat) => (
            <div
              key={stat}
              style={{
                padding: "10px 24px",
                borderRadius: "8px",
                border: "1px solid #1e3a5f",
                background: "rgba(0, 166, 244, 0.08)",
                color: "#c9a84c",
                fontSize: 16,
                fontWeight: 600,
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
