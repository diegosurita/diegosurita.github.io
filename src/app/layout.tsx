import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

export const metadata: Metadata = {
  title: "Diego Surita",
  description:
    "Hi, welcome to my website. My name is Diego Surita and I'm a Software Engineer",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>
        <div className="container px-5 mx-auto flex flex-col flex-1 min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
        <GoogleAnalytics gaId="G-KEGV160RYL" />
      </body>
    </html>
  );
}
