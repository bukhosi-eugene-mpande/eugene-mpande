import type { Metadata } from "next";
import { Poor_Story, Exo_2 } from "next/font/google";
import "./globals.css";

const poorStory = Poor_Story({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poor-story",
});

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo-2",
});

export const metadata: Metadata = {
  title: "Eugene Mpande",
  description: "Personal website for Bukhosi Eugene Mpande – software developer and CS student.",
  icons: { icon: "/images/white-logo.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${poorStory.variable} ${exo2.variable}`}>
      <body className="min-h-full flex flex-col bg-gray-50">{children}</body>
    </html>
  );
}
