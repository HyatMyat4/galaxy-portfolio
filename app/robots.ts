const BASE_URL = "https://www.bite-point.com";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
