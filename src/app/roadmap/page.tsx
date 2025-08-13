import AppLayout from "@/components/applayout";
import { Roadmap } from "@/components/ui";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • Roadmap",
  description:
    "Explore the future of Vetor Labs with our detailed roadmap. Discover upcoming features and innovations.",
  openGraph: {
    title: "VetorLabs • Roadmap",
    description:
      "Explore the future of Vetor Labs with our detailed roadmap. Discover upcoming features and innovations.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/roadmap",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • Roadmap",
    description:
      "Explore the future of Vetor Labs with our detailed roadmap. Discover upcoming features and innovations.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <Roadmap />
    </AppLayout>
  );
}
