import AppLayout from "@/components/applayout";
import { AIPMS } from "@/components/pages";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • AIPMS",
  description:
    "Discover Vetor Labs' AI-Powered Management System (AIPMS), designed to streamline project management, enhance productivity, and drive business growth.",
  openGraph: {
    title: "VetorLabs • AIPMS",
    description:
      "Discover Vetor Labs' AI-Powered Management System (AIPMS), designed to streamline project management, enhance productivity, and drive business growth.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/aipms",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • AIPMS",
    description:
      "Discover Vetor Labs' AI-Powered Management System (AIPMS), designed to streamline project management, enhance productivity, and drive business growth.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <AIPMS />
    </AppLayout>
  );
}
