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
      <head>
       
      
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/logo.svg" />
      </head>

      <body className="antialiased h-[100vh] bg-white dark:bg-gray-900">
        <Root>
          <RootContent>{children}</RootContent>
        </Root>
      </body>
    </html>
  );
}
