import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LiquidBackground } from "@/components/effects/LiquidBackground";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Data Overflow 2026",
  description: "Beyond Data, Beyond Limits.",
  icons: {
    icon: "/do-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${manrope.variable} ${cormorant.variable} antialiased selection:text-white`}
      >
        <div className="noise-overlay" />
        <LiquidBackground />
        <Navbar />

        <CustomCursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}
