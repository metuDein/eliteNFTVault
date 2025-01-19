import { Geist, Geist_Mono, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/context/Provider";
import { DataProvider } from "@/components/context/DataProvider";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import { AppKit } from "@/components/context/AppKit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify weights as needed
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"], // Specify weights if available for DM Mono
});

export const metadata = {
  metadataBase: new URL("https://www.elitenftvault.pro"),
  title: "EliteNFTVault | Exclusive NFT Collectibles",
  description:
    "EliteNFTVault is your gateway to premium digital collectibles. Discover, trade, and showcase exclusive NFTs in a secure and luxurious environment tailored for collectors and creators alike.",
  alternates: {
    canonical: "https://www.elitenftvault.pro",
    languages: {
      "en-US": "/en-US",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.elitenftvault.pro",
    title: "EliteNFTVault | Exclusive NFT Collectibles",
    description:
      "EliteNFTVault is your gateway to premium digital collectibles. Discover, trade, and showcase exclusive NFTs in a secure and luxurious environment tailored for collectors and creators alike.",
    images: [
      {
        url: "/favicon-32x32.png",
        width: 800,
        height: 600,
        alt: "logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteNFTVault | Exclusive NFT Collectibles",
    description:
      "EliteNFTVault is your gateway to premium digital collectibles. Discover, trade, and showcase exclusive NFTs in a secure and luxurious environment tailored for collectors and creators alike.",
    images: ["/apple-touch-icon.png"],
  },
  icons: {
    icon: ["/apple-touch-icon.png?.v=2"],
    apple: ["/apple-touch-icon.png?.v=1"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmMono.variable} antialiased`}>
        <Provider>
          <AppKit>
            <DataProvider>
              <Header />
              {children}
              <Footer />
              <ToastContainer />
            </DataProvider>
          </AppKit>
        </Provider>
      </body>
    </html>
  );
}
