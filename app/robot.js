export default function robots() {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: ["/dashboard"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/dashboard"],
      },
    ],
    sitemap: "https://apexbratai.vercel.app/sitemap.xml",
  };
}
