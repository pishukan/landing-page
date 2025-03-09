import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { bodoniModa, openSans } from "../font";
import WeChatButton from "@/components/hover-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pishukan Seafood",
  description: "Delivering the finest seafood from Gwadar to the world.",
  keywords: "seafood export, fresh seafood, Gwadar fish, Pishukan seafood, seafood wholesale",
  icons: {
    icon: '/favicon.ico', // This explicitly references your favicon
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bodoniModa.variable} ${openSans.variable} antialiased`}
      >
        {children}
        <WeChatButton />
      </body>
    </html>
  );
}
