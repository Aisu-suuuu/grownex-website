import type { Metadata } from "next";
import Script from "next/script";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grownex | Independent Branding & Marketing Consultancy",
  description:
    "Grownex is an independent branding and marketing consultancy specializing in strategy-led identity and market execution. We build scalable, commercially effective brands designed to perform in real markets.",
  keywords: [
    "branding",
    "marketing consultancy",
    "brand identity",
    "growth strategy",
    "market execution",
    "go-to-market",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
          <Script src="https://mcp.figma.com/mcp/html-to-design/capture.js" strategy="afterInteractive" />
          <ScrollToTop />
          {children}
        </body>
    </html>
  );
}
