import AppLayout from "@/components/applayout";
import { ComingSoon } from "@/components/ui";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • Coming Soon",
  description:
    "Stay tuned for exciting new features and updates from Vetor Labs. We're working hard to bring you cutting-edge tools for Web2 and Web3 entrepreneurs.",
  openGraph: {
    title: "VetorLabs • Coming Soon",
    description:
      "Stay tuned for exciting new features and updates from Vetor Labs. We're working hard to bring you cutting-edge tools for Web2 and Web3 entrepreneurs.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/coming-soon",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • Roadmap",
    description:
      "Stay tuned for exciting new features and updates from Vetor Labs. We're working hard to bring you cutting-edge tools for Web2 and Web3 entrepreneurs.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout>
      <ComingSoon />
    </AppLayout>
  );
}
