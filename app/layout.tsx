import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

import Header from "@@/layout/Header";
import Footer from "@@/layout/Footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const roboto = Roboto({ weight: ["300", "400", "500"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
