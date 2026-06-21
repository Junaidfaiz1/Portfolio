export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://junaidfaiz.vercel.app/sitemap.xml",
  };
}
