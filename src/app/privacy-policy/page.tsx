import AppLayout from "@/components/applayout";
import PrivacyPolicy from "@/components/pages/privacypolicy";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Affidex Lab • Privacy Policy",
  description:
    "Read Affidex Lab's Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and security are our top priorities.",
  openGraph: {
    title: "Affidex Lab • Privacy Policy",
    description:
      "Read Affidex Lab's Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and security are our top priorities.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://affidexlab.netlify.app/privacy-policy",
    siteName: "Affidex Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affidex Lab • Privacy Policy",
    description:
      "Read Affidex Lab's Privacy Policy to understand how we collect, use, and protect your personal data. Your privacy and security are our top priorities.",
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
