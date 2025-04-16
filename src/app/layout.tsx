import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import "./globals.css";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "Diego Surita",
  description:
    "Hi, welcome to my website. My name is Diego Surita and I'm a Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
          <div className="container px-5 mx-auto flex flex-col flex-1 h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <GoogleAnalytics gaId="G-KEGV160RYL" />
      </body>
    </html>
  );
}
