import AppLayout from "@/components/applayout";
import { Contact } from "@/components/pages";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Affidex Lab • Contact",
  description:
    "Get in touch with Affidex Lab. Whether you have questions, need support, or want to collaborate with our incubation laboratory, our team is here to help. Contact us today!",
  openGraph: {
    title: "Affidex Lab • Contact",
    description:
      "Get in touch with Affidex Lab. Whether you have questions, need support, or want to collaborate with our incubation laboratory, our team is here to help. Contact us today!",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://affidexlab.netlify.app/contact",
    siteName: "Affidex Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affidex Lab • Contact",
    description:
      "Get in touch with Affidex Lab. Whether you have questions, need support, or want to collaborate with our incubation laboratory, our team is here to help. Contact us today!",
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
