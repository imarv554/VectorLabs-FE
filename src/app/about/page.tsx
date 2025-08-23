import AppLayout from "@/components/applayout";
import AboutPage from "@/components/pages/about/about";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Affidex Lab • About",
  description:
    "Learn more about Affidex Lab, formerly CreedTech Group. Discover our mission to build the next generation of blockchain and AI-powered solutions through our incubation laboratory.",
  openGraph: {
    title: "Affidex Lab • About",
    description:
      "Learn more about Affidex Lab, formerly CreedTech Group. Discover our mission to build the next generation of blockchain and AI-powered solutions through our incubation laboratory.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://affidexlab.netlify.app/about",
    siteName: "Affidex Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affidex Lab • About",
    description:
      "Learn more about Affidex Lab, formerly CreedTech Group. Discover our mission to build the next generation of blockchain and AI-powered solutions through our incubation laboratory.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <AboutPage />
    </AppLayout>
  );
}