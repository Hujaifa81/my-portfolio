import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/ui/smooth-scroll";
import NoiseOverlay from "@/components/ui/noise-overlay";
import CustomCursor from "@/components/ui/custom-cursor";
import FloatingDock from "@/components/layout/floating-dock";

export const metadata: Metadata = {
  title: "Next Gen Portfolio",
  description: "A high-end Fullstack developer portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-void-black text-white selection:bg-neon-violet selection:text-white">
        <SmoothScroll>
          <NoiseOverlay />
          <CustomCursor />
          <FloatingDock />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
