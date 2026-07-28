import type { Metadata } from "next";
import { Inter, Barlow_Condensed, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  weight: ["200", "300", "400", "700", "800", "900"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan Vishwakarma — Software Engineer & Product Architect",
  description: "I design and build software that turns complex problems into elegant, reliable digital products.",
  openGraph: {
    title: "Aryan Vishwakarma — Software Engineer & Product Architect",
    description: "I design and build software that turns complex problems into elegant, reliable digital products.",
    url: "https://aryanvishwakarma.dev",
    siteName: "Aryan Vishwakarma",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aryan Vishwakarma — Software Engineer & Product Architect",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Vishwakarma — Software Engineer & Product Architect",
    description: "I design and build software that turns complex problems into elegant, reliable digital products.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlowCondensed.variable} ${geistMono.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex bg-page-light dark:bg-page-dark selection:bg-[#635BFF] selection:text-white">
        <Navigation />
        <div className="flex-1 lg:pl-[240px] flex flex-col min-w-0">
          <SmoothScroll>{children}</SmoothScroll>
        </div>
      </body>
    </html>
  );
}
