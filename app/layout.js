import { Geist, Geist_Mono } from "next/font/google";
import { Icon } from "lucide-react";
import { User } from "lucide-react";
import navbar from "@/components/navbar";
import Navbar from "@/components/navbar";
import "./globals.css";;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Game Review Project",
  description: "A platform to see and share your options of games.",
};

const headerFooterColor = 'bg-contrast';

export default function accountLayout({ children }) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={`${geistSans.variable} ${geistMono.variable} h-full`}>
        <div className="antialiased flex flex-col ">
          <div className={`${headerFooterColor} w-full text-center py-5 flex flex-row justify-between`}>
            <div>
              <p className="text-black text-2xl mx-5">{metadata.title}</p>
            </div>
          </div>

          <main className="w-full bg-background">{children}</main>
          <footer className={`${headerFooterColor} flex w-full text-center p-6`}></footer>
        </div>
      </body>
    </html>
  );
}