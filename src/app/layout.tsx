import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tachyon Medical Systems Pvt. Ltd. | Premium Medical Equipment Since 1992",
  description: "Leading provider of refurbished and new medical equipment including MRI, CT Scanners, PET-CT, Cath Labs, and Mammography systems. Trusted since 1992.",
  keywords: "medical equipment, MRI, CT scanner, PET-CT, Cath Lab, mammography, refurbished medical equipment, medical equipment India",
  openGraph: {
    title: "Tachyon Medical Systems Pvt. Ltd.",
    description: "Premium Medical Equipment Solutions Since 1992",
    type: "website",
    url: "https://www.tachyonmedical.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white dark:bg-[#0d1b2a] text-gray-900 dark:text-gray-100`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
