import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";  // ← correct: Geist + Geist_Mono
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",  // good practice: prevents flash of invisible text
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chinem - Portfolio",
  description: "Beginner web developer portfolio – Next.js & TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-gray-50 font-sans">  {/* font-sans applies geistSans automatically */}
        <Header />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}