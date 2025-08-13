import AppLayout from "@/components/applayout";
import TermsAndConditions from "@/components/pages/termsandconditions";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "VetorLabs • Terms & Conditions",
  description:
    "Review Vetor Labs' Terms and Conditions to understand the rules and guidelines for using our platform. Stay informed about your rights and responsibilities.",
  openGraph: {
    title: "VetorLabs • Terms & Conditions",
    description:
      "Review Vetor Labs' Terms and Conditions to understand the rules and guidelines for using our platform. Stay informed about your rights and responsibilities.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://vetorlabs.com/terms-and-conditions",
    siteName: "VetorLabs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VetorLabs • Terms & Conditions",
    description:
      "Review Vetor Labs' Terms and Conditions to understand the rules and guidelines for using our platform. Stay informed about your rights and responsibilities.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
  },
  icons: [{ rel: "icon", type: "image/webp", url: "/vl-light.webp" }],
};

export default function Page() {
  return (
    <AppLayout showHeaderFooter>
      <TermsAndConditions />
    </AppLayout>
  );
}
