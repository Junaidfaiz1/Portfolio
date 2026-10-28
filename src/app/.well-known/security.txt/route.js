import { SITE_URL } from "@/lib/seo";
import { contact } from "@/data/site";

export const dynamic = "force-static";

// RFC 9116 — Expires must be less than a year ahead; it moves with each build.
export function GET() {
  const expires = new Date(Date.now() + 180 * 24 * 60 * 60 * 1000).toISOString();
  const body = `Contact: mailto:${contact.email}
Expires: ${expires}
Preferred-Languages: en
Canonical: ${SITE_URL}/.well-known/security.txt
`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
