import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Flycomm — AI-Powered Network Intelligence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Embed the real Flycomm logo (white variant) so shared links show the brand mark.
  const logo = await readFile(join(process.cwd(), "public/icons/flycomm-logo-white.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Flycomm"
          width={520}
          height={113}
          style={{ marginBottom: "36px" }}
        />
        <div
          style={{
            fontSize: 30,
            color: "#00a6f4",
            fontWeight: 600,
            marginBottom: "12px",
          }}
        >
          AI-Powered Network Intelligence
        </div>
        <div style={{ fontSize: 20, color: "#8899aa" }}>
          See What Others Can&apos;t
        </div>
        <div
          style={{
            display: "flex",
            gap: "32px",
            marginTop: "44px",
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
