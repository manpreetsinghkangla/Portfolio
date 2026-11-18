import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const title = "Manpreet Singh | AI/ML Researcher · Computer Vision · Medical AI";
const description = "Portfolio of Manpreet Singh, AI/ML researcher and PhD aspirant exploring deep learning, computational pathology, computer vision, multi-scale learning, and interpretable artificial intelligence.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["computational pathology", "medical image analysis", "multiple instance learning", "DLBCL", "computer vision", "deep learning", "PhD applicant"],
  authors: [{ name: "Manpreet Singh" }],
  openGraph: { title, description, type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#08090D" }, { media: "(prefers-color-scheme: light)", color: "#F4F5F8" }],
};

// Applies a saved theme before first paint (no flash). "auto" = follow the browser setting.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript><style>{`#ld{display:none}.rv{opacity:1;transform:none}.name em{transform:none}`}</style></noscript>
      </head>
      <body suppressHydrationWarning>
        <div id="ld" role="status" aria-label="Loading"><div><span className="mono">MS / initialising</span><i /></div></div>
        {children}
      </body>
    </html>
  );
}
