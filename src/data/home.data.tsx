import { Logo, VLDark, Software, VlLight } from "../../public/img";
import { GoArrowDownRight } from "react-icons/go";
import {
  FaTelegramPlane,
  FaDiscord,
  FaDollarSign,
  FaBriefcase,
  FaComments,
  FaRocket,
  FaUsers,
  FaCode,
  FaRobot,
  FaShoppingCart,
  FaInfoCircle,
  FaTools,
  FaEnvelope,
  FaTelegram,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter, FaChevronDown } from "react-icons/fa6";
import {
  SkeletonFour,
  SkeletonOne,
  SkeletonThree,
  SkeletonTwo,
} from "@/widgets/skeleton";

const homeData = {
  homepage: {
    header: [
      { icon: Logo, name: "affidex-logo" },
      { icon: VLDark, name: "affidex-logo" },
      // menu buttons
      { menu: "home", link: "/" },
      { menu: "products", link: "/products" },
      { menu: "services", link: "/services" },
      { menu: "white paper", link: "/white-paper" },
      { menu: "about", link: "/about" },
      { menu: "contact", link: "/contact" },
      { dashMenu: "contact", link: "/contact" },

    ],

    herosection: [
      {
        hero: [
          {
            title: "Welcome to Affidex Lab",
            subtitle:
              "Formerly CreedTech Group, we've evolved into an incubation laboratory focused on building the next generation of blockchain and AI-powered solutions.",
            img: Software,
            name: "dashboard",
          },
        ],
        button: [
          { title: "explore our products", link: "/products" },
          { title: "learn about us", link: "/about" },
        ],
      },
    ],

    bodysection: [
      {
        benefits: [
          {
            title: [
              {
                title: "What We Do",
                subtitle: "We incubate innovative projects that push the boundaries of blockchain technology and artificial intelligence",
                text: "As an incubation laboratory, we focus on building the next generation of blockchain and AI-powered solutions.",
              },
            ],
            boxes: [
              {
                icon: <FaDollarSign />,
                title: "Privacy-First Solutions",
                subtext:
                  "Building secure, privacy-focused applications that put user control first. Our solutions prioritize data protection and user privacy in everything we develop.",
              },
              {
                icon: <FaRobot />,
                title: "AI Innovation",
                subtext:
                  "Leveraging artificial intelligence to create intuitive, powerful tools for everyone. We harness AI to solve complex problems and create user-friendly experiences.",
              },
              {
                icon: <FaRocket />,
                title: "MVP Development",
                subtext:
                  "Rapidly prototyping and launching minimum viable products that solve real problems. We focus on bringing innovative ideas to market quickly and efficiently.",
              },
              {
                icon: <FaComments />,
                title: "Clear Client Communication",
                subtext:
                  "Stay informed and aligned with regular updates, detailed reports, and open channels of communication. We value transparency and ensure you’re always in the loop at every stage of your project.",
              },
            ],
          },
        ],
        services: [
          {
            title: [
              {
                title: "Unleashing Potential: Your Gateway to Web3 Excellence",
                subtitle:
                  "From idea to execution, we provide tailored solutions that drive success in the ever-evolving world of Web3.",
              },
            ],
            services: [
              {
                icon: <FaRocket />,
                title: "A-Z Project Launch",
                description:
                  "Comprehensive support from ideation to execution for successful project launches.",
                skeleton: <SkeletonOne />,
                className:
                  "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-gray-800 lg:h-[800px]",
                titleClass: "lg:text-5xl text-2xl",
                desClass: "lg:text-md text-sm",
              },
              {
                icon: <FaCode />,
                title: "Custom Software Development",
                description:
                  "Tailored software solutions to meet your specific business needs.",
                skeleton: <SkeletonTwo />,
                className:
                  "border-b col-span-1 lg:col-span-2 dark:border-gray-800 lg:h-[800px]",
              },
              {
                icon: <FaRobot />,
                title: "AI & Project Management",
                description:
                  "Integrating AI technologies to optimize project workflows and decision-making.",
                skeleton: <SkeletonThree />,
                className:
                  "col-span-1 lg:col-span-3 lg:border-r  dark:border-gray-800 lg:h-[450px]",
              },
              {
                icon: <FaUsers />,
                title: "Global Availability & Support",
                description:
                  "Round-the-clock support and accessibility for a global audience.",
                skeleton: <SkeletonFour />,
                className: "col-span-1 lg:col-span-3 border-b lg:border-none",
              },
            ],
          },
        ],
      },
    ],

    footersection: [
      {
        footer: [
          {
            title: [{ title: "Stay Connected with Affidex Lab" }],
            sectionTwo: [
              {
                icon: <FaInfoCircle />,
                title: "About Us",
                text: "Learn more about our mission, vision, and the innovative solutions we provide at Affidex Lab.",
                buttontext: "Discover More",
                link: "/about",
              },
              {
                icon: <FaTools />,
                title: "Services",
                text: "Explore the range of services we offer, designed to empower businesses and individuals.",
                buttontext: "View Services",
                link: "/services",
              },
              {
                icon: <FaRocket />,
                title: "Products",
                text: "Explore our innovative MVP products including Cipher Wallet and Gamify, showcasing our commitment to cutting-edge solutions.",
                buttontext: "View Products",
                link: "/products",
              },
              {
                icon: <FaEnvelope />,
                title: "Contact Us",
                text: "Have questions or need support? Reach out to our team for assistance.",
                buttontext: "Get in Touch",
                link: "/contact",
              },
            ],
            sectionThree: [
              {
                numb: [{ numb: "+1 123 456 7890" }],
                socials: [
                  // { title: 'Join Our Community' },
                  {
                    icon: <FaXTwitter />,
                    link: "https://twitter.com/affidexlab",
                  },
                  { icon: <FaTelegram />, link: "https://t.me/affidexlab" },
                  { icon: <FaDiscord />, link: "https://discord.gg/affidexlab" },
                  {
                    icon: <FaYoutube />,
                    link: "https://youtube.com/affidexlab",
                  },
                ],
                copy: [
                  {
                    title: [
                      { copy: "© 2025 Affidex Lab. All Rights Reserved." },
                    ],
                    buttons: [
                      { title: "Privacy Policy", link: "/privacy-policy" },
                      {
                        title: "Terms And Conditions",
                        link: "/terms-and-conditions",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export default homeData;
