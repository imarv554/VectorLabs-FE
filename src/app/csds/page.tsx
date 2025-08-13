import AppLayout from "@/components/applayout";
import { CSDS } from "@/components/pages";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • CSDS",
  description:
    "Discover Vetor Labs' Custom Software Development Solutions (CSDS), designed to help businesses build scalable, secure, and innovative software applications.",
  openGraph: {
    title: "VetorLabs • CSDS",
    description:
      "Discover Vetor Labs' Custom Software Development Solutions (CSDS), designed to help businesses build scalable, secure, and innovative software applications.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/csds",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • CSDS",
    description:
      "Discover Vetor Labs' Custom Software Development Solutions (CSDS), designed to help businesses build scalable, secure, and innovative software applications.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <CSDS />
    </AppLayout>
  );
}
