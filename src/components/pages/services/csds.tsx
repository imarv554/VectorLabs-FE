"use client";
import React, { useState } from "react";
import { CSDSHoverEffect } from "@/widgets/csdsHoverEffect";
import {
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaTools,
  FaBrain,
  FaCloud,
  FaUsers,
  FaGamepad,
  FaLock,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  ServicesHeroWidget,
  Highlight,
} from "../../../widgets/servicesHeroWidget";

export default function CSDC() {
  const [visibleCount, setVisibleCount] = useState(5);
  const services = [
    {
      title: "Web Development",
      description:
        "At Vetor Labs, we create innovative, responsive, and scalable websites that meet the unique needs of businesses. We specialize in using modern technologies like React, Angular, and Vue to ensure high performance, fast loading times, and seamless user experiences. Whether you're launching a simple blog or a complex web application, our web development team works to bring your ideas to life with attention to detail and usability at the forefront.",
      link: "/pricing",
      icon: <FaCode />,
    },
    {
      title: "App Development",
      description:
        "Our app development team builds robust, user-friendly mobile applications tailored to your business needs. Whether it's a native iOS app using Swift or Android app using Kotlin, or a cross-platform solution like React Native or Flutter, we ensure the highest quality of performance and seamless integration with your back-end systems. Our goal is to deliver apps that provide an intuitive experience for your users, while offering reliable functionality and scalability.",
      link: "/pricing",
      icon: <FaMobileAlt />,
    },
    {
      title: "E-Commerce Development",
      description:
        "We empower businesses by building secure, scalable, and user-friendly e-commerce platforms. Whether it's a custom-built solution or platforms like Shopify, WooCommerce, or Magento, Vetor Labs provides end-to-end development. From integrating secure payment gateways and product management systems to delivering responsive mobile and desktop experiences, we ensure your online store meets customer expectations and business goals.",
      link: "/pricing",
      icon: <FaShoppingCart />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Leverage the power of AI and machine learning to enhance your business operations with Vetor Labs. We specialize in building intelligent solutions that can automate tasks, make real-time predictions, and provide deep insights into business data. Whether it's improving customer experience with chatbots or using predictive analytics for business decision-making, our AI services bring efficiency and innovative solutions to your organization.",
      link: "/pricing",
      icon: <FaBrain />,
    },
    {
      title: "Blockchain & Smart Contract Development",
      description:
        "At Vetor Labs, we believe in the transformative power of Web3 technologies and blockchain. We offer solutions for decentralized applications (dApps) built on blockchain, helping businesses improve transparency, security, and efficiency. From building smart contracts on Ethereum to creating decentralized finance (DeFi) solutions, we bring innovative Web3 solutions to life that disrupt traditional systems and give more control back to users.",
      link: "/pricing",
      icon: <FaTools />,
    },
    {
      title: "Cloud Solutions",
      description:
        "Our cloud solutions are designed to scale with your business. We provide cloud migration, infrastructure as a service (IaaS), platform as a service (PaaS), and storage solutions to ensure your business is agile, scalable, and secure. Whether you choose AWS, Google Cloud, or Azure, we help you migrate to the cloud, optimize performance, and manage resources effectively for cost-saving and security.",
      link: "/pricing",
      icon: <FaCloud />,
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "With cyber threats on the rise, safeguarding your business data is more important than ever. Vetor Labs provides cybersecurity solutions that protect your digital assets and ensure business continuity. We offer services like vulnerability assessments, penetration testing, and data encryption to help businesses stay secure. Our team is committed to ensuring your company can thrive in an increasingly digital world while staying protected from evolving security threats.",
      link: "/pricing",
      icon: <FaLock />,
    },
    {
      title: "Custom Software Development",
      description:
        "We offer custom software development tailored to the specific needs of your business. Whether you need a custom CRM, ERP system, or SaaS application, our team works with you to build software solutions that drive efficiency and growth. At Vetor Labs, we follow an agile methodology to deliver high-quality, scalable, and user-friendly solutions that empower your organization.",
      link: "/pricing",
      icon: <FaCode />,
    },
    {
      title: "Game Development",
      description:
        "Our game development services cover everything from concept to launch. Whether it's a mobile game, PC game, or web-based game, we use tools like Unity and Unreal Engine to create immersive and engaging experiences. We combine creativity and technical expertise to design games that capture users' attention and provide memorable gameplay experiences.",
      link: "/pricing",
      icon: <FaGamepad />,
    },
    {
      title: "IoT Development",
      description:
        "We develop IoT solutions that connect physical devices to the digital world, providing real-time monitoring, control, and automation. Vetor Labs helps businesses in industries such as healthcare, manufacturing, and smart homes build secure and scalable IoT systems. By integrating IoT with machine learning, we offer insights that help improve operational efficiency, enhance productivity, and optimize business processes.",
      link: "/pricing",
      icon: <FaUsers />,
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Our SEO and digital marketing services are designed to boost your brand’s visibility online. From on-page and off-page SEO to content marketing, PPC, and social media campaigns, we use data-driven strategies to help you reach your target audience and drive traffic to your website. Our approach focuses on measurable results, ensuring that every campaign contributes to your business growth and brand awareness.",
      link: "/pricing",
      icon: <FaTools />,
    },
    {
      title: "UI/UX Design",
      description:
        "User experience is at the heart of every product we create. At Vetor Labs, we design user interfaces that are not only visually appealing but also intuitive and user-friendly. Whether it's mobile apps, websites, or software platforms, we focus on providing seamless experiences that make it easy for your customers to interact with your brand. Our goal is to ensure that your digital presence is both functional and delightful.",
      link: "/pricing",
      icon: <FaTools />,
    },
  ];

  const handleSeeMore = () => {
    setVisibleCount(visibleCount + 3);
  };
  return (
    <div className="max-w-screen mx-auto xl:px-8 lg:px-8 px-3 py-10 bg-black">
      <ServicesHeroWidget>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white max-w-screen leading-relaxed lg:leading-snug text-center mx-auto "
        >
          {" "}
          <p>
            Discover what we can build for you — from custom software solutions
            to immersive Web3 applications.
          </p>
          <Highlight className="text-black dark:text-white mx-3">
            These are just a glimpse of what’s possible.
          </Highlight>
        </motion.h1>
      </ServicesHeroWidget>
      <CSDSHoverEffect items={services.slice(0, visibleCount)} />
      {visibleCount < services.length && (
        <div className="text-center mt-5 xl:px-20 lg:px-1 md:px-5 px-1">
          <button
            onClick={handleSeeMore}
            className="bg-white text-black py-2 px-4 rounded-md w-full font-bold xl:text-2xl lg:text-xl md:text-lg text-sm"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
}
