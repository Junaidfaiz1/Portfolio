import { Inter } from "next/font/google";
import "./globals.css";
import Transition from "@/Components/Transition";
import JsonLd from "@/Components/JsonLd";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE_DEFAULT,
  SITE_DESCRIPTION,
  DEFAULT_KEYWORDS,
  OG_IMAGE,
  personSchema,
  websiteSchema,
  organizationSchema,
} from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  applicationName: `${SITE_NAME} Portfolio`,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
    creator: "@JunaidFaiz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4f46e5" },
    { media: "(prefers-color-scheme: dark)", color: "#4f46e5" },
  ],
  // Add Bing / Yandex / Pinterest codes when you have them:
  // yandex: "...", other: { "msvalidate.01": "...", "p:domain_verify": "..." }
  verification: {
    google: "2SmbFkTTbLXA0U7S8OUPsmR8F2Ulfa3SAa1-XjSZDrU",
  },
};

export default function RootLayout({ children }) {
  const structuredData = [
    personSchema(),
    websiteSchema(),
    organizationSchema(),
  ];

  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.variable}`}>
        <JsonLd data={structuredData} />
        <Transition>{children}</Transition>
      </body>
    </html>
  );
}
