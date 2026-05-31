import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan — Reddit Community Growth Strategist",
  description:
    "I grow Reddit communities from zero into thriving, high-engagement audiences. 45K+ members built, 4.4M+ annual views generated. Trusted by founders, brands, and growing communities.",
  keywords: [
    "Reddit growth",
    "community building",
    "subreddit growth",
    "Reddit marketing",
    "community management",
    "organic growth",
    "Reddit strategy",
    "community strategist",
  ],
  authors: [{ name: "Aryan" }],
  creator: "Aryan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Aryan — Reddit Community Growth Strategist",
    description:
      "From 0 Members to Millions of Views. Organic Reddit Growth for Brands, Founders, and Communities.",
    siteName: "Aryan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan — Reddit Community Growth Strategist",
    description:
      "From 0 Members to Millions of Views. Organic Reddit Growth for Brands, Founders, and Communities.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
