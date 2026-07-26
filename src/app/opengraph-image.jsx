import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Junaid Faiz — Full Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #312e81 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            JF
          </div>
          <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.9 }}>
            junaid-faiz.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
            Junaid Faiz
          </div>
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "#c4b5fd",
              maxWidth: 900,
            }}
          >
            Full Stack Developer & AI Engineer
          </div>
          <div style={{ fontSize: 24, color: "#94a3b8", maxWidth: 920 }}>
            React · Next.js · NestJS · LangChain · LangGraph · GraphQL
          </div>
        </div>

        <div style={{ fontSize: 22, color: "#64748b" }}>
          Lahore, Pakistan · Production web apps & LLM-powered products
        </div>
      </div>
    ),
    { ...size }
  );
}
