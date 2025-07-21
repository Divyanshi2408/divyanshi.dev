import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Divyanshi.dev",
  description: "Portfolio of Divyanshi — Full Stack Developer specialized in React, Next.js, and MERN stack.",
  keywords: ["Divyanshi Pal", "Full Stack Developer", "React", "Next.js", "Portfolio", "MERN Stack", "Frontend Developer"],
  authors: [{ name: "Divyanshi Pal", url: "https://divyanshi-dev.vercel.app" }],
  creator: "Divyanshi Pal",
  metadataBase: new URL("https://divyanshi-dev.vercel.app"),
  openGraph: {
    title: "Divyanshi.dev",
    description: "Portfolio of Divyanshi — Full Stack Developer specialized in React, Next.js, and MERN stack.",
    url: "https://divyanshi-dev.vercel.app",
    siteName: "Divyanshi.dev",
    images: [
      {
        url: "/og-image.png", // Optional: Add a social preview image (1200x630)
        width: 1200,
        height: 630,
        alt: "Divyanshi.dev Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyanshi.dev",
    description: "Portfolio of Divyanshi — Full Stack Developer specialized in React and MERN stack.",
    creator: "@yourTwitterHandle", // optional
    images: ["/og-image.png"], // same as Open Graph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" sizes="32x32" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://divyanshi-dev.vercel.app" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
