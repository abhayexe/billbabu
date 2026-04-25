import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BillBabu - Smart POS & Inventory Management for Indian Businesses",
  description:
    "Complete Point of Sale, billing, and ledger management tool designed for retail and wholesale businesses in India.",
  verification: {
    google: "IajWpTTk6M-v3BecdGDia2ZndoUnupqeVHq0_7mtDyo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}