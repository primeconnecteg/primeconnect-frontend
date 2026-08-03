import type { Metadata } from "next";
import { Poppins, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const vietnam = Be_Vietnam_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-vietnam",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeconnecteg.com"),
  title: "Prime Connect EG | Enterprise Smart Port & System Integration Solutions",
  description: "Prime Connect EG is an enterprise technology & system integration company in Egypt.",
  icons: {
    icon: [
      { url: "/Prime_Connect_Icon_Transparent_2048.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/Prime_Connect_Icon_Transparent_2048.png",
    apple: "/Prime_Connect_Icon_Transparent_2048.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${vietnam.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/Prime_Connect_Icon_Transparent_2048.png" type="image/png" />
        <link rel="shortcut icon" href="/Prime_Connect_Icon_Transparent_2048.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Prime_Connect_Icon_Transparent_2048.png" />
      </head>
      <body className="min-h-screen bg-[#F2F4F7] antialiased font-sans flex flex-col selection:bg-[#075CE0] selection:text-white">
        {children}
      </body>
    </html>
  );
}
