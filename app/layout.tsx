import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ArtistProvider } from "@/context/ArtistContext";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artistly.com",
  description: "Created for Artistly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ArtistProvider>
            {children}
          </ArtistProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
