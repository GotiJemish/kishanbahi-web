import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import LenisScroller from "./components/LenisScroller";

export const metadata: Metadata = {
  title: "Kishan Studio — Web Design & UI/UX",
  description:
    "Kishan Studio builds premium web design, UI/UX, and product experiences with motion-led storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#050505] text-white selection:bg-cyan-300/30 selection:text-white">
        <div className="noise-bg"></div>
        <LenisScroller>
          <SiteNav />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </LenisScroller>
      </body>
    </html>
  );
}
