import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Temesgen Nemie | Software Engineer Portfolio",
  description: "Software Engineering graduate specializing in Full Stack Development, React, Next.js, and Node.js. Explore my projects and professional journey.",
  keywords: ["Software Engineer", "Full Stack Developer", "React Developer", "Next.js", "Portfolio", "Temesgen Nemie"],
  authors: [{ name: "Temesgen Nemie" }],
  creator: "Temesgen Nemie",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://temesgen-nemie.vercel.app/",
    title: "Temesgen Nemie | Software Engineer Portfolio",
    description: "Building immersive web experiences with modern technologies.",
    siteName: "Temesgen Nemie Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Temesgen Nemie | Software Engineer Portfolio",
    description: "Building immersive web experiences with modern technologies.",
    creator: "@temesgen_nemie",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-white dark:bg-[#030014] text-gray-900 dark:text-gray-100 antialiased selection:bg-purple-500/30`}>
        {children}
      </body>
    </html>
  );
}
