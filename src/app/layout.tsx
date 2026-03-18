import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/Footer";

const zzzFont = localFont({
  src: "./fonts/zzz.ttf",
  variable: "--font-zzz",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZZZ Trust Guide",
  description: "Agent Trust Guide for Zenless Zone Zero",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${zzzFont.variable} antialiased bg-background text-foreground transition-colors duration-300 flex flex-col min-h-screen`}
      >
        <ThemeProvider>
          <Navbar />

          <div className="grow">{children}</div>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
