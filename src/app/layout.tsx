import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import HomeHeader from "@/sections/home-header";
import HomeFooter from "@/sections/home-footer";
import ConditionalFooterBanner from "@/components/conditional-footer-banner";
import WhatsappChatButton from "@/components/whatsapp-button";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // include needed weights
});


export const metadata: Metadata = {
  title: "Ahmad Group | Construction, Concrete, Tiles, Rice & More",
  description:
    "Official website of Ahmad Group, a leading construction and industrial company in Pakistan. We design and develop projects by Paandaaa.com, featuring Ahmad Concrete, Ahmad Tiles, Ahmad Rice, A.M Builders, and more.",
  keywords: [
    "Ahmad Group",
    "Ahmad Concrete",
    "Ahmad Tiles",
    "Ahmad Rice",
    "A.M Builders",
    "Construction Company Pakistan",
    "Industrial Services",
    "Paandaaa.com",
  ],
  authors: [{ name: "Paandaaa.com", url: "https://paandaaa.com" }],
  creator: "Paandaaa.com",
  openGraph: {
    title: "Ahmad Group | Construction & Industrial Services",
    description:
      "Official website of Ahmad Group: Ahmad Concrete, Ahmad Tiles, Ahmad Rice, A.M Builders. Designed & developed by Paandaaa.com",
    url: "https://ahmadgroup.com",
    siteName: "Ahmad Group",
    type: "website",
    images: [
      {
        url: "https://ahmadgroup.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmad Group Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmad Group | Construction & Industrial Services",
    description:
      "Official website of Ahmad Group, including Ahmad Concrete, Ahmad Tiles, Ahmad Rice, and A.M Builders. Developed by Paandaaa.com",
    site: "@paandaaa",
    images: ["https://ahmadgroup.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <HomeHeader />
        {children}
        <ConditionalFooterBanner />
        <HomeFooter />
        <WhatsappChatButton />
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}