import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Leone | Software Engineer",
  description: "James Leone is a software engineer based in Wilbraham, Massachusetts. He is a recent graduate from the University of Massachusetts - Amherst with one year of experience. He is passionate about creating software solutions that drive client success and generate positive impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    {/*  bg-sky-200 */}

      <body
        className={`relative ${inter.className} bg-background text-dark-gray w-full h-full bg-blue-300 antialiased`}
      >
        <Header />
        {/* sky 200, sky-200/70,*/}
        <div className="blue-dot z-[-1] absolute left-1/5 w-150 h-[80%] bg-blue-400/10 blur-3xl"></div>
        {children}
      </body>
    </html>
  );
}
