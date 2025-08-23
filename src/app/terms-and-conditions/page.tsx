import AppLayout from "@/components/applayout";
import TermsAndConditions from "@/components/pages/termsandconditions";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Affidex Lab • Terms & Conditions",
  description:
    "Review Affidex Lab's Terms and Conditions to understand the rules and guidelines for using our platform. Stay informed about your rights and responsibilities.",
  openGraph: {
    title: "Affidex Lab • Terms & Conditions",
    description:
      "Review Affidex Lab's Terms and Conditions to understand the rules and guidelines for using our platform. Stay informed about your rights and responsibilities.",
    images: [{ type: "image/webp", url: "/vl-light.webp" }],
    url: "https://affidexlab.netlify.app/terms-and-conditions",
    siteName: "Affidex Lab",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affidex Lab • Terms & Conditions",
    description:
      "Review Affidex Lab's Terms and Conditions to understand the rules and guidelines for using our platform. Stay informed about your rights and responsibilities.",
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
