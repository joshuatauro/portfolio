import "./globals.css";
import { Cherry_Swash, Inter } from "next/font/google";

import { inter } from "./fonts";
import SocialLinks from "@/components/SocialLinks";

export const metadata = {
  title: "Joshua Tauro || Fullstack Developer",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocialLinks />
        {children}
      </body>
    </html>
  );
}
