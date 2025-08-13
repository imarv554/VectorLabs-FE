import AppLayout from "@/components/applayout";
import { Contact } from "@/components/pages";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • Contact",
  description:
    "Get in touch with Vetor Labs. Whether you have questions, need support, or want to collaborate, our team is here to help. Contact us today!",
  openGraph: {
    title: "VetorLabs • Contact",
    description:
      "Get in touch with Vetor Labs. Whether you have questions, need support, or want to collaborate, our team is here to help. Contact us today!",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/contact",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • Contact",
    description:
      "Get in touch with Vetor Labs. Whether you have questions, need support, or want to collaborate, our team is here to help. Contact us today!",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <Contact />
    </AppLayout>
  );
}
