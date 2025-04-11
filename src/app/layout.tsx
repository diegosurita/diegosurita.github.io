import type { Metadata } from "next";
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
          <div className="container mx-auto flex flex-col flex-1 h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KEGV160RYL"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KEGV160RYL');
            `,
          }}
        />
      </body>
    </html>
  );
}
