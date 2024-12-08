export default function robot() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://apexbratai.vercel.app/sitemap.xml",
  };
}
