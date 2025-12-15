// src/utils/affiliate.ts
export function buildAmazonAffiliateUrl({ asin, url, tag }: { asin?: string; url?: string; tag?: string }) {
  const associateTag = tag ?? import.meta.env.PUBLIC_AMAZON_ASSOCIATE_TAG ?? "";

  // Si te pasan ASIN, construir URL estándar para Amazon en ES:
  if (asin) {
    // cambiar dominio según tu mercado si necesitas .com / .es / .co.uk
    const domain = "https://www.amazon.es";
    const base = `${domain}/dp/${encodeURIComponent(asin)}`;
    return associateTag ? `${base}/?tag=${encodeURIComponent(associateTag)}` : base;
  }

  // Si te pasan URL completa, añadir param tag si no existe
  if (url) {
    try {
      const u = new URL(url);
      if (associateTag && !u.searchParams.get("tag")) {
        u.searchParams.set("tag", associateTag);
      }
      return u.toString();
    } catch {
      return url; // fallback
    }
  }

  return "";
}
