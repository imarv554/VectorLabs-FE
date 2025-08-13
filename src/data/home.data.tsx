import { Logo, VLDark, VLDashboard, VlLight } from "../../public/img";
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
      { icon: Logo, name: "vl-logo" },
      { icon: VLDark, name: "vl-logo" },
      // menu buttons
      { menu: "solutions", link: "" },
      { menu: "about", link: "" },
      { menu: "VL labs", link: "" },
      { menu: "token", link: "" },
      { dashMenu: "get started", link: "https://marketplace.vetorlabs.com" },
      {
        subHeader: [
          {
            solutions: [
              {
                services: [
                  { title: "services" },
                  {
                    title: "CSDS",
                    shortName: "CSDS",
                    subText: "Custom Web2 & Web3 Development",
                    link: "/csds",
                  },
                  {
                    title: "MpRS",
                    shortName: "MpRS",
                    subText: "Connect Businesses & Developers",
                    link: "https://marketplace.vetorlabs.com",
                  },
                  {
                    title: "AI & PMS",
                    shortName: "AI & PMS",
                    subText: "AI & Project Management Tools Subscription",
                    link: "/aipms",
                  },
                ],
                regions: [
                  { title: "regions" },
                  {
                    title: "UAE",
                    subText: "licensing and headquarters",
                    text: "coming soon",
                  },
                ],
                buttons: [
                  { title: "others" },
                  {
                    title: "Pricing",
                    subText: "Discover Our Affordable Plans",
                    link: "/pricing",
                    icon: <GoArrowDownRight />,
                  },
                  {
                    title: "Sustainability",
                    subText: "Learn About Our Green Initiatives",
                    link: "/coming-soon",
                    icon: <GoArrowDownRight />,
                  },
                ],
              },
            ],

            about: [
              {
                aboutUS: [
                  {
                    title: "about VL",
                    subText: "Learn more about our vision and mission",
                  },
                  {
                    title: "about us",
                    subText: "Discover who we are and what drives us",
                    link: "/about-us",
                  },
                  {
                    title: "sustainability",
                    subText:
                      "Understand our commitment to a sustainable future",
                    link: "/coming-soon",
                  },
                ],

                resources: [
                  {
                    title: "resources",
                    subText: "Explore useful tools and insights",
                  },
                  {
                    title: "careers",
                    subText: "Join our growing team and make an impact",
                    link: "/coming-soon",
                  },
                  {
                    title: "partner panel",
                    subText: "Collaborate with us for exciting opportunities",
                    link: "/coming-soon",
                    text: "coming soon",
                  },
                ],

                button: [
                  { title: "contact us" },
                  {
                    title: "email",
                    subText: "hello@vetorlabs.com",
                    link: "mailto:hello@vetorlabs.com",
                    icon: <GoArrowDownRight />,
                  },
                ],
              },
            ],
            lab: [
              {
                vlTools: [
                  { title: "VL Labs" },
                  {
                    title: "Visual Loom",
                    subText: "A design software powered by vetorlabs.",
                    link: "https://visualloom.vetorlabs.com",
                  },
                  {
                    title: "VL Labs",
                    subText: "Innovation hub for impactful solutions.",
                    link: "/coming-soon",
                  },
                  {
                    title: "SaSS Products",
                    subText: "Scalable SaaS solutions for businesses.",
                    link: "/coming-soon",
                  },
                ],
                bSoln: [
                  { title: "Business Solutions" },
                  {
                    title: "Software Solutions",
                    subText: "Custom software tailored to your business needs.",
                    link: "/coming-soon",
                  },
                  {
                    title: "Analytics & Insights",
                    subText: "Transform data into actionable insights.",
                    link: "/coming-soon",
                  },
                  {
                    title: "Customer Engagement",
                    subText:
                      "Tools to enhance customer interaction and retention.",
                    link: "/coming-soon",
                  },
                ],
                marketGrowth: [
                  { title: "Marketing & Growth" },
                  {
                    title: "Web2 Solutions",
                    subText:
                      "Scalable tools for traditional marketing platforms.",
                    link: "/coming-soon",
                  },
                  {
                    title: "Web3 Innovations",
                    subText:
                      "Cutting-edge marketing for blockchain ecosystems.",
                    link: "/coming-soon",
                  },
                  {
                    title: "Custom Strategies",
                    subText: "Tailored growth plans to fit any business model.",
                    link: "/coming-soon",
                  },
                ],
              },
            ],
            token: [
              {
                overview: [
                  { title: "Project Overview" },
                  {
                    title: "Whitepaper",
                    subText: "Explore our detailed project goals.",
                    link: "https://whitepaper.vetorlabs.com",
                  },
                  {
                    title: "Roadmap",
                    subText: "Discover key milestones and future plans.",
                    link: "/roadmap",
                  },
                  {
                    title: "Stake",
                    subText: "Stake and delegate your tokens for rewards",
                    link: "https://stake.vetorlabs.com",
                  },
                  {
                    title: "VetorScan",
                    subText: "VetorChain explorer",
                    link: "https://explorer.vetorlabs.com",
                  },
                ],
                economics: [
                  { title: "Token Economics" },
                  {
                    title: "Tokenomics",
                    subText: "Understand token structure and allocation.",
                    link: "https://whitepaper.vetorlabs.com/introduction/vlt/tokenomics",
                  },
                  {
                    title: "Faucet",
                    subText: "Claim VLT Tokens every 24hours.",
                    link: "https://faucet.vetorlabs.com",
                    text: "VLT Faucet",
                  },
                  {
                    title: "Buy Token",
                    subText: "Purchase tokens and join the network.",
                    link: "/coming-soon",
                    text: "coming soon",
                  },
                ],
                participation: [
                  { title: "Social Media" },
                  {
                    name: "X",
                    icon: <FaXTwitter />,
                    link: "https://twitter.com",
                  },
                  {
                    name: "Telegram",
                    icon: <FaTelegramPlane />,
                    link: "https://telegram.org",
                  },
                  {
                    name: "Discord",
                    icon: <FaDiscord />,
                    link: "https://discord.com",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],

    herosection: [
      {
        hero: [
          {
            title: "Innovative Solutions for the",
            subtitle:
              "Your vision, our code. We strive to transform your ideas into impactful digital solutions",
            img: VLDashboard,
            name: "dashboard",
          },
        ],
        button: [
          { title: "get started", link: "https://marketplace.vetorlabs.com" },
          { title: "learn more", link: "/about-us" },
        ],
      },
    ],

    bodysection: [
      {
        benefits: [
          {
            title: [
              {
                title: "Benefits",
                subtitle: "Your benefits from using our services",
                text: "Embarking on a journey as true Web3 natives, we aim to lead the blockchain revolution with innovative solutions and unmatched expertise.",
              },
            ],
            boxes: [
              {
                icon: <FaDollarSign />,
                sn: "01",
                title: "Flexible Pricing Options",
                subtext:
                  "Our pricing models are designed to fit businesses of all sizes, offering affordability without compromising quality. Gain maximum value from every dollar spent with tailored, transparent plans.",
              },
              {
                icon: <FaBriefcase />,
                sn: "02",
                title: "Streamline Workflows",
                subtext:
                  "Optimize your operations with dynamic workflows tailored to meet your needs. Achieve seamless integration with your processes while boosting productivity and minimizing operational complexity.",
              },
              {
                icon: <FaUsers />,
                sn: "03",
                title: "Dedicated Expert Teams",
                subtext:
                  "Partner with a team of skilled professionals who bring industry expertise and a results-driven approach. Experience reliable support, fast execution, and collaboration every step of the way.",
              },
              {
                icon: <FaComments />,
                sn: "04",
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
        howitworks: [
          {
            title: [
              {
                title: "How it works",
                subtitle: "Streamlining tasks for maximum efficiency",
              },
            ],
            accordion: [
              {
                sn: "01",
                title: "Connect Account",
                text: "Securely connect your wallet for transactions, storing digital assets, or managing activities. Alternatively, sign in with your email for simple and secure access tailored to your preferences.",
                textB:
                  "This step establishes a secure link, ensuring your information is protected and enabling personalized access to relevant features based on your role.",
                icon: <FaChevronDown />,
              },
              {
                sn: "02",
                title: "Choose Role",
                text: "After signing in, you’ll go through onboarding to select your role. Choose to be a project owner, user, or marketplace participant, based on your goals and interests.",
                textB:
                  "Onboarding customizes your experience by providing the tools and features you need to succeed in your selected role.",
                icon: <FaChevronDown />,
              },
              {
                sn: "03",
                title: "Start Role Tasks",
                text: "Begin engaging in tasks specific to your role.",
                subtitleA: "Project Owners:",
                subtextA:
                  "Plan and develop your project. Collaborate with developers, track milestones, and ensure progress aligns with your goals.",
                subtitleB: "Users:",
                subtextB:
                  "Explore the platform, interact with available services, and utilize features tailored for you.",
                subtitleC: "Marketplace Participants:",
                subtextC:
                  "Upload products or services, or browse offerings from others to make purchases.",
                textB:
                  "Each role has dedicated workflows and resources to help you achieve your objectives efficiently.",
                icon: <FaChevronDown />,
              },
              {
                sn: "04",
                title: "Make Payment",
                text: "Complete payments or subscriptions to access services and premium features.",
                subtitleA: "Project Owners:",
                subtextA:
                  "Payments are essential to begin or continue development.",
                subtitleB: "Users:",
                subtextB:
                  "Subscribe to unlock exclusive features or make purchases tailored to your needs.",
                subtitleC: "Marketplace Participants:",
                subtextC:
                  "Utilize paid options to enhance visibility or access premium resources.",
                textB:
                  "Our secure payment system ensures safe and transparent transactions with receipts provided for every action.",
                icon: <FaChevronDown />,
              },
              {
                sn: "05",
                title: "Track Progress",
                text: "Stay updated on progress and provide necessary feedback.",
                subtitleA: "Project Owners:",
                subtextA:
                  "Monitor milestones, receive updates, and refine outcomes based on project needs.",
                subtitleB: "Users and Buyers:",
                subtextB:
                  "Track your subscriptions or purchased items to ensure timely delivery and quality.",
                textB:
                  "This step ensures alignment between expectations and results through effective communication and collaboration.",
                icon: <FaChevronDown />,
              },
              {
                sn: "06",
                title: "Complete Process",
                text: "The process concludes successfully with all deliverables met.",
                subtitleA: "Projects:",
                subtextA:
                  "Delivered to your satisfaction, marking the completion of your vision.",
                subtitleB: "Purchases:",
                subtextB: "Finalized and delivered with quality assurance.",
                subtitleC: "Subscriptions:",
                subtextC:
                  "Activated and available for use as per the agreed terms.",
                textB:
                  "A final summary ensures satisfaction and opens opportunities for ongoing support or future engagement.",
                icon: <FaChevronDown />,
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
            title: [{ title: "Stay Connected with Vetor Labs" }],
            sectionTwo: [
              {
                icon: <FaInfoCircle />,
                title: "About Us",
                text: "Learn more about our mission, vision, and the innovative solutions we provide at Vetor Labs.",
                buttontext: "Discover More",
                link: "/about-us",
              },
              {
                icon: <FaTools />,
                title: "Services",
                text: "Explore the range of services we offer, designed to empower businesses and individuals.",
                buttontext: "View Services",
                link: "/csds",
              },
              {
                icon: <FaShoppingCart />,
                title: "Marketplace",
                text: "List your products or browse our marketplace to connect with opportunities and developers.",
                buttontext: "Visit Marketplace",
                link: "/marketplace",
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
                    link: "https://twitter.com/vetorlabs",
                  },
                  { icon: <FaTelegram />, link: "https://t.me/vetorlabs" },
                  { icon: <FaDiscord />, link: "https://discord.gg/vetorlabs" },
                  {
                    icon: <FaYoutube />,
                    link: "https://youtube.com/vetorlabs",
                  },
                ],
                copy: [
                  {
                    title: [
                      { copy: "© 2025 Vetor Labs. All Rights Reserved." },
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
