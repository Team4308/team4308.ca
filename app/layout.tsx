import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

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
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <body
        className={`${jostFont.className} bg-background text-text flex min-h-screen flex-col antialiased`}
      >
        <NavBar />
        <div className="text-foreground mx-auto mt-16 w-full max-w-7xl px-4 py-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
