import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { CommandPalette } from "@/components/CommandPalette";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ethanol India — India's ethanol blending & water cost",
  description:
    "Open-data dashboard tracking India's petrol consumption, the Ethanol Blended Petrol (EBP) programme, the water footprint of ethanol feedstocks, fuel price break-ups, the impact of E20 on vehicles, suppliers, global blending policies and the water-stress debate — every figure tagged with its source.",
  keywords: [
    "ethanol",
    "E20",
    "India",
    "petrol",
    "blending",
    "water footprint",
    "fuel prices",
    "EBP programme",
    "ethanol india",
  ],
  authors: [{ name: "Rudy" }],
  creator: "Rudy",
  openGraph: {
    title: "Ethanol India — India's ethanol blending & water cost",
    description:
      "Open-data dashboard tracking India's ethanol blending programme, water footprint, and fuel prices.",
    url: "https://e20watch.in",
    siteName: "Ethanol India",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ethanol India — India's ethanol blending & water cost",
    description:
      "Open-data dashboard tracking India's ethanol blending programme, water footprint, and fuel prices.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#050505" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          {children}
          <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
