import Root from "./Components/Root";
import RootContent from "./Components/RootContent";
import Head from "next/head"; // SEO metadata uchun Head import qilish
import "./globals.css";

export const metadata = {
  title: "ApexBrat - AI Solutions and Tech Platform for Developers",
  description:
    "ApexBrat offers cutting-edge AI solutions, tech news, tutorials, and resources for developers. Stay updated with the latest trends in programming, tools, and AI-powered development.",
  author: "ApexBrat Team",
  keywords:
    "Apex Brat, AI solutions, developer resources, tech platform, programming tutorials, AI news, tech guides",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <Head>
        {/* SEO Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={metadata.keywords} />
        {/* Title */}
        <title>{metadata.title}</title>
        {/* Open Graph for Social Media */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/logo.svg" />{" "}
        {/* Open Graph image */}
        <meta property="og:url" content="https://apexbratai.vercel.app/" />
        <meta property="og:type" content="website" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/logo.svg" /> {/* Twitter image */}
        {/* Hreflang for Regional SEO */}
        <link
          rel="alternate"
          href="https://apexbratai.vercel.app/"
          hreflang="uz"
        />
        {/* Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/logo.svg" />
      </Head>

      <body className="antialiased h-[100vh] bg-white dark:bg-gray-900">
        <Root>
          <RootContent>{children}</RootContent>
        </Root>
      </body>
    </html>
  );
}
