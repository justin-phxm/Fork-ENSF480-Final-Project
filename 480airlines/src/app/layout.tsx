import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AOSinit from "./AOSinit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Providers from "./components/Providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "480 Airlines",
  description: "Your next travel companion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <AOSinit />
        <body className={inter.className}>
          <Providers>
            <Navbar></Navbar>
            {children}
            <Footer></Footer>
          </Providers>
        </body>
      </html>
    </>
  );
}
