import { CardHoverEffect } from "@/widgets/cardHoverEffect";
import {
  FaEnvelope,
  FaInfoCircle,
  FaRocket,
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
      "Learn more about our mission, vision, and the innovative solutions we provide at Affidex Lab.",
    link: "/about",
    icon: <FaInfoCircle />,
  },
  {
    title: "Services",
    description:
      "Explore the range of services we offer, designed to empower businesses and individuals.",
    link: "/services",
    icon: <FaTools />,
  },
  {
    title: "Products",
    description:
      "Discover our innovative MVP products including Cipher Wallet and Gamify, showcasing our commitment to cutting-edge solutions.",
    link: "/products",
    icon: <FaRocket />,
  },
  {
    title: "Contact Us",
    description:
      "Have questions or need support? Reach out to our team for assistance.",
    link: "/contact",
    icon: <FaEnvelope />,
  },
];
