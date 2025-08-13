"use client";
import React from "react";
import {
  AboutUS,
  Bassat,
  Climax,
  Isaac,
  Kavod,
  Mission,
  Vision,
  Nuevo,
} from "../../../../public/img";
import { AboutUsWidget } from "@/widgets/aboutUsWidget";
import { Card, Carousel } from "@/widgets/teamCarouselWidget";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoGlobeSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Content = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-gray-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-gray-600 dark:text-gray-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-gray-700 dark:text-gray-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

export default function About() {
  const aboutus = [
    {
      quote:
        "Vetor Labs is an innovative digital platform built for both Web2 and Web3 entrepreneurs, businesses, and innovators seeking to leverage technology, artificial intelligence (AI), and blockchain for business success. Our platform is not just a place for users to develop projects; it is a comprehensive solution offering tailored tools, advanced services, and a thriving ecosystem to turn ideas into thriving businesses.",
      name: "About Us",
      src: AboutUS.src,
    },
    {
      quote:
        "Vetor Labs's vision is to build a platform where businesses, regardless of size or industry, can access cutting edge tools and expertise to bring their ideas to life. Whether it's building on the traditional Web2 framework or venturing into the emerging world of Web3, Vetor Labs is the bridge that connects the two worlds and ensures that all businesses can innovate, scale, and succeed.",
      name: "Vison",
      src: Vision.src,
    },
    {
      quote:
        "Vetor Labs’s mission is to provide businesses, entrepreneurs, and creators with the resources, tools, and knowledge they need to turn their visions into reality. Through our platform, we combine AI, blockchain, and robust project management solutions to create a seamless, end to end experience. We aim to make digital transformation accessible to all, allowing businesses to focus on growth and innovation, while we take care of the technology.",
      name: "Mission",
      src: Mission.src,
    },
  ];

  const data = [
    {
      category: "Founder & CEO",
      title: "Ubongabasi Joseph",
      src: Kavod.src,
      content: <Content />,
      icons: [
        { icon: <FaXTwitter />, link: "https://x.com/iamkavod_" },
        { icon: <FaLinkedin />, link: "https://linkedin.com/in/iamkavod" },
        { icon: <IoGlobeSharp />, link: "https://iamkavod.me" },
        { icon: <MdEmail />, link: "mailto:info@iamkavod.me" },
        { icon: <FaGithub />, link: "https://github.com/iamkavod" },
      ],
    },
    {
      category: "Senior Blockchain Engineer",
      title: "Isaac Ekhagu'ere",
      src: Isaac.src,
      content: <Content />,
      icons: [
        { icon: <FaXTwitter />, link: "https://x.com/EVMlord" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/evmlord/" },
        { icon: <IoGlobeSharp />, link: "https://evmlord.dev/" },
        // { icon: <MdEmail />, link: "" },
        // { icon: <FaGithub />, link: "" },
      ],
    },
    // {
    //   category: "Co Founder & CBDC",
    //   title: "Fabian Egbuna",
    //   content: <Content />,
    //   icons: [
    //     { icon: <FaXTwitter />, link: "" },
    //     { icon: <FaLinkedin />, link: "" },
    //     { icon: <IoGlobeSharp />, link: "" },
    //     { icon: <MdEmail />, link: "mailto:" },
    //   ],
    // },
    {
      category: "Founding AI Engineer",
      title: "Bassat Youssry",
      src: Bassat.src,
      content: <Content />,
      icons: [
        // { icon: <FaXTwitter />, link: "" },
        // { icon: <FaLinkedin />, link: "" },
        // { icon: <MdEmail />, link: "" },
        // { icon: <FaGithub />, link: "" },
      ],
    },
    {
      category: "Founding Frontend Engineer",
      title: "Climax Mba",
      src: Climax.src,
      content: <Content />,
      icons: [
        { icon: <FaXTwitter />, link: "https://x.com/climaxmba" },
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/climaxmba" },
        { icon: <IoGlobeSharp />, link: "https://climaxmba.netlify.app" },
        { icon: <MdEmail />, link: "mailto:climaxium150@gmail.com" },
        { icon: <FaGithub />, link: "https://github.com/climaxmba" },
      ],
    },
    // {
    //     category: "Advisor",
    //     title: "David Jimoh",
    //     src: David.src,
    //     content: <Content />,
    //     icons: [
    //         { icon: <FaXTwitter />, link: '' },
    //         { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/david-jimoh-87263a11a' },
    //         { icon: <IoGlobeSharp />, link: '' },
    //         { icon: <MdEmail />, link: '' },
    //     ]
    // },
    // {
    //   category: "Founding Frontend Engineer",
    //   title: "Olaniyan Olamayowa Fatimah",
    //   src: Tolu.src,
    //   content: <Content />,
    //   icons: [
    //     { icon: <FaXTwitter />, link: "https://x.com/olamayorrhh" },
    //     {
    //       icon: <FaLinkedin />,
    //       link: "https://www.linkedin.com/in/olaniyan-olamayowa/",
    //     },
    //     {
    //       icon: <IoGlobeSharp />,
    //       link: "https://my-portfolio-7gu4.vercel.app/",
    //     },
    //     { icon: <MdEmail />, link: "mailto:mayowafolaniyan@gmail.com" },
    //     { icon: <FaGithub />, link: "https://github.com/Olamayorrh" },
    //   ],
    // },
    // {
    //   category: "Founding FullStack Enginner",
    //   title: "Olaniyan Ayoade",
    //   src: Ayoade.src,
    //   content: <Content />,
    //   icons: [
    //     { icon: <FaXTwitter />, link: "http://x.com/joycrowntech" },
    //     {
    //       icon: <FaLinkedin />,
    //       link: "https://www.linkedin.com/in/olaniyanayoade",
    //     },
    //     { icon: <IoGlobeSharp />, link: "https://jctech.vercel.app" },
    //     { icon: <MdEmail />, link: "mailto:olaniyanayoade999@gmail.com" },
    //     { icon: <FaGithub />, link: "https://github.com/Joycrown" },
    //   ],
    // },
    {
      category: "Product Designer",
      title: "Jeffrey Nwachukwu",
      src: Nuevo.src,
      content: <Content />,
      icons: [
        // { icon: <FaXTwitter />, link: "" },
        // { icon: <FaLinkedin />, link: "" },
        // { icon: <IoGlobeSharp />, link: "" },
        // { icon: <MdEmail />, link: "" },
        // { icon: <FaGithub />, link: "" },
      ],
    },
  ];

  const cards = data.map((card, index) => (
    <Card key={index} card={card} index={index} />
  ));

  return (
    <div className="bg-black py-6 px-2 xl:overflow-none lg:overflow-x-hidden md:overflow-x-hidden overflow-x-hidden">
      {/* Hero */}
      <div className="h-[30rem] w-full bg-black bg-grid-white/[.7] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl xl:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-500 py-8">
          Building the Future with Innovation and Purpose
        </h1>
        <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-gray-200 to-gray-500 py-8 text-center">
          building latest in technology to help businesses succeed in an
          ever-evolving digital landscape
        </p>
      </div>

      {/* About Us */}
      <div className="flex justify-center items-center xl:p-20">
        <AboutUsWidget aboutus={aboutus} />
      </div>

      {/* Meet The Team */}
      <div className="w-full h-full py-20">
        <h2 className="max-w-screen xl:px-20 mx-auto text-xl md:text-5xl font-bold text-gray-800 dark:text-gray-200 font-sans">
          Meet Our Team
        </h2>
        <Carousel items={cards} />
      </div>
    </div>
  );
}
