import AppLayout from "@/components/applayout";
import { Pricing } from "@/components/pages";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • Pricing",
  description:
    "Explore Vetor Labs' flexible pricing plans tailored for Web2 and Web3 entrepreneurs. Find the perfect plan to unlock AI, blockchain, and business tools for your needs.",
  openGraph: {
    title: "VetorLabs • Pricing",
    description:
      "Explore Vetor Labs' flexible pricing plans tailored for Web2 and Web3 entrepreneurs. Find the perfect plan to unlock AI, blockchain, and business tools for your needs.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/pricing",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • Pricing",
    description:
      "Explore Vetor Labs' flexible pricing plans tailored for Web2 and Web3 entrepreneurs. Find the perfect plan to unlock AI, blockchain, and business tools for your needs.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <Pricing />
    </AppLayout>
  );
}
