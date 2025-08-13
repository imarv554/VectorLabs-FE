import AppLayout from "@/components/applayout";
import PrivacyPolicy from "@/components/pages/privacypolicy";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • Privacy Policy",
  description:
    "Read Vetor Labs' Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and security are our top priorities.",
  openGraph: {
    title: "VetorLabs • Privacy Policy",
    description:
      "Read Vetor Labs' Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and security are our top priorities.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/privacy-policy",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • Privacy Policy",
    description:
      "Read Vetor Labs' Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and security are our top priorities.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <PrivacyPolicy />
    </AppLayout>
  );
}
