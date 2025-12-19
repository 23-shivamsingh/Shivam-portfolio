import "./globals.css";
import { Russo_One, Sora } from "next/font/google";
import ClientWrapper from "./components/ClientWrapper";

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${russo.variable} ${sora.variable}`}>
      <body className="bg-wave">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
