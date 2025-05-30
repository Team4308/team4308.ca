import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";

const jostFont = Jost({
  variable: "--font-jost-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Absolute Robotics",
  description: "Website for Team 4308 Absolute Robotics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
      <body
        className={`${jostFont.className} antialiased bg-background color-foreground`}
      >
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
