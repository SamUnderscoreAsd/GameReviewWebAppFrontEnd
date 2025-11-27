import { Geist, Geist_Mono } from "next/font/google";
import { Icon } from "lucide-react";
import { User } from "lucide-react";
import navbar from "@/components/navbar";
import "../globals.css";
import Navbar from "@/components/navbar";

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

export default function RootLayout({ children }) {

  return (
      <div>
        {children}
      </div>
  );
}
