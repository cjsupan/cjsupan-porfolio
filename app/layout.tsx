import Providers from "./providers";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";

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
