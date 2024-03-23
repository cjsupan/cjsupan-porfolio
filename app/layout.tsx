import Head from "next/head";
import { NextSeo } from "next-seo";
import Providers from "./providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

const seo = {
  title: "Cj Supan - Portfolio",
  description: "cj supan's portfolio",
  openGraph: {
    type: "website",
    url: "https://cjsupan-porfolio.vercel.app/",
    title: "Cj Supan - Portfolio",
    description: "cj supan's portfolio",
    images: [
      {
        url: "https://imgur.com/a/ZyBrqgG",
        width: 1200,
        height: 630,
        alt: "cj supan's portfolio",
      },
    ],
  },
  twitter: {
    handle: "@cjsupan",
    site: "@cjsupan",
    cardType: "summary_large_image",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cj Supan - Portfolio",
  description: "cj supan's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
