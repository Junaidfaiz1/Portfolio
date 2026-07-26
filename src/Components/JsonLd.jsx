/**
 * Injects JSON-LD structured data for rich results / AI search.
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data["@context"]
      ? data
      : { "@context": "https://schema.org", ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload),
      }}
    />
  );
}
