import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Prime Connect EG | Egypt's Premier BPO Growth Engine",
  description:
    "A high-performance BPO client acquisition engine connecting elite Egyptian talent with global outsourcing partners to drive seamless growth and CRM-integrated success.",
  keywords: [
    "BPO Egypt",
    "Outsourcing Egypt",
    "Client Acquisition Engine",
    "Offshore Call Center",
    "Egyptian BPO Talent",
    "GCC Time Zone BPO",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
  openGraph: {
    title: "Prime Connect EG | Egypt's Premier BPO Growth Engine",
    description:
      "Connecting elite Egyptian talent with global outsourcing partners to drive seamless growth and CRM-integrated success.",
    siteName: "Prime Connect EG",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className="min-h-screen bg-white text-navy-dark antialiased font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
