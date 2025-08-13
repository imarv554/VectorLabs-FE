import { CardHoverEffect } from "@/widgets/cardHoverEffect";
import {
  FaEnvelope,
  FaInfoCircle,
  FaShoppingCart,
  FaTools,
} from "react-icons/fa";

export function CardEffect() {
  return (
    <div className="max-w-screen mx-auto xl:px-8 lg:px-8">
      <CardHoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "About Us",
    description:
      "Learn more about our mission, vision, and the innovative solutions we provide at Vetor Labs.",
    link: "/about-us",
    icon: <FaInfoCircle />,
  },
  {
    title: "Services",
    description:
      "Explore the range of services we offer, designed to empower businesses and individuals.",
    link: "/csds",
    icon: <FaTools />,
  },
  {
    title: "Marketplace",
    description:
      "List your products or browse our marketplace to connect with opportunities and developers.",
    link: "https://marketplace.vetorlabs.com",
    icon: <FaShoppingCart />,
  },
  {
    title: "Contact Us",
    description:
      "Have questions or need support? Reach out to our team for assistance.",
    link: "/contact",
    icon: <FaEnvelope />,
  },
];
