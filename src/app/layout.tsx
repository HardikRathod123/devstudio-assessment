import type { Metadata } from "next";
import { Barlow_Semi_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";

const getDmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow-semi-condensed",
  weight: ["400", "500", "600"],
});

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
      <body
        className={`${getDmSans.variable} ${barlowSemiCondensed.variable} bg-background font-sans text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
