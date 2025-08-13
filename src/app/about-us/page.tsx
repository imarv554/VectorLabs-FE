import AppLayout from "@/components/applayout";
import { About } from "@/components/pages";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • About",
  description:
    "Learn more about Vetor Labs and our mission to empower entrepreneurs with AI, blockchain, and advanced business tools. Discover our team, values, and vision for the future.",
  openGraph: {
    title: "VetorLabs • About",
    description:
      "Learn more about Vetor Labs and our mission to empower entrepreneurs with AI, blockchain, and advanced business tools. Discover our team, values, and vision for the future.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/about-us",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • About",
    description:
      "Learn more about Vetor Labs and our mission to empower entrepreneurs with AI, blockchain, and advanced business tools. Discover our team, values, and vision for the future.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <About />
    </AppLayout>
  );
}
