import Root from "./Components/Root";
import RootContent from "./Components/RootContent";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://apexbratai.vercel.app/"),
  keywords: ["apex brat", "Apex Brat", "apex brat solution", "Apex brat", "ai"],
  title: {
    default: "Apex Brat Solution",
    template: "$s | Apex Brat",
  },
  openGraph: {
    description:
      "ApexBrat offers cutting-edge AI solutions, tech news, tutorials, and resources for developers. Stay updated with the latest trends in programming, tools, and AI-powered development.",
  },
  author: "ApexBrat Team",
  links: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body className="antialiased h-[100vh] bg-white dark:bg-gray-900">
        <Root>
          <RootContent>{children}</RootContent>
        </Root>
      </body>
    </html>
  );
}
