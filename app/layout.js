import "./globals.css";
import { Russo_One, Sora } from "next/font/google";
import Script from "next/script";
import ClientWrapper from "./components/ClientWrapper";
import Analytics from "./components/Analytics";

const russo = Russo_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-russo-one",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-sora",
});

export const metadata = {
  title: "Shivam Portfolio",
  description: "My personal portfolio built with Next.js",

  // Google Search Console verification (already correct)
  verification: {
    google: "ZDma2V5NE2mIn7LNfkKxgZGGQW4QGrmSFVWfQpZWIi4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${russo.variable} ${sora.variable}`}>
      <head>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />

        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>

      <body className="bg-wave">
        {/* Page view tracking */}
        <Analytics />

        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
