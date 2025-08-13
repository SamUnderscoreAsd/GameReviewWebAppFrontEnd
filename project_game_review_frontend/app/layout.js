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

export default function accountLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center`}
      >
        <header className="bg-green-500 w-full text-center p-6 flex flex-row justify-between">
          <div>
            <p className="bg-black-100">{metadata.title}</p>
          </div>
        </header>
        {children}
        <footer className="bg-green-500 w-full text-center p-6">FOOTER</footer>
      </body>
    </html>
  );
}