import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Jason Goncalves - Business Builder & Serial Entrepreneur",
  description: "Building innovative ventures since 1999. MBA class valedictorian with a passion for entrepreneurship and transformative business ideas.",
  keywords: ["entrepreneur", "business builder", "MBA", "Kellogg-Schulich", "Tario Ventures"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
