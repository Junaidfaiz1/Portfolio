import { ImageResponse } from "next/og";
import { SITE_HOST } from "@/lib/seo";

export const runtime = "edge";
export const alt = "Junaid Faiz — Full Stack Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const photo = await fetch(
    new URL("../../public/og-photo.jpg", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e1b4b 45%, #312e81 100%)",
          color: "#f8fafc",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 600, opacity: 0.9 }}>
            {SITE_HOST}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
              Junaid Faiz
            </div>
            <div style={{ fontSize: 32, fontWeight: 500, color: "#c4b5fd" }}>
              Full Stack Developer & AI Engineer
            </div>
            <div style={{ fontSize: 24, color: "#94a3b8" }}>
              React · Next.js · NestJS · LangChain · LangGraph · GraphQL
            </div>
          </div>

          <div style={{ fontSize: 22, color: "#64748b" }}>
            Lahore, Pakistan · Production web apps & LLM products
          </div>
        </div>

        {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
        <img src={photo} width={630} height={630} style={{ objectFit: "cover" }} />
      </div>
    ),
    { ...size }
  );
}
