"use client";
import React from "react";
import { FaRocket, FaCode, FaBrain, FaShieldAlt, FaMobile, FaCloud, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";

const ServicesPage = () => {
  const services = [
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "MVP Development",
      description: "Rapidly prototype and launch minimum viable products that solve real problems. We focus on bringing innovative ideas to market quickly and efficiently.",
      features: [
        "Rapid prototyping",
        "User testing & feedback",
        "Iterative development",
        "Market validation"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Blockchain Development",
      description: "Build secure, scalable blockchain solutions including smart contracts, DeFi protocols, and Web3 applications with privacy-first architecture.",
      features: [
        "Smart contract development",
        "DeFi protocol creation",
        "Wallet integration",
        "Security auditing"
      ],
      gradient: "from-green-500 to-blue-600"
    },
    {
      icon: <FaBrain className="w-8 h-8" />,
      title: "AI Integration",
      description: "Leverage artificial intelligence to create intuitive, powerful tools. From natural language processing to machine learning models.",
      features: [
        "Custom AI models",
        "Natural language processing",
        "Machine learning pipelines",
        "AI-powered automation"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <FaCode className="w-8 h-8" />,
      title: "Custom Software Development",
      description: "End-to-end software development services for Web2 and Web3 applications, tailored to your specific business needs.",
      features: [
        "Full-stack development",
        "API development",
        "Database design",
        "Performance optimization"
      ],
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: <FaMobile className="w-8 h-8" />,
      title: "Mobile App Development", 
      description: "Create cross-platform mobile applications that provide seamless user experiences across iOS and Android devices.",
      features: [
        "Cross-platform development",
        "Native performance",
        "User-centric design",
        "App store optimization"
      ],
      gradient: "from-teal-500 to-green-600"
    },
    {
      icon: <FaCloud className="w-8 h-8" />,
      title: "Cloud Infrastructure",
      description: "Design and implement scalable cloud infrastructure solutions with focus on security, performance, and cost optimization.",
      features: [
        "AWS/GCP deployment",
        "DevOps automation",
        "Monitoring & analytics",
        "Security implementation"
      ],
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your vision, requirements, and goals to create a comprehensive project roadmap."
    },
    {
      number: "02", 
      title: "Design & Architecture",
      description: "Our team designs the technical architecture and user experience to ensure optimal performance and usability."
    },
    {
      number: "03",
      title: "Development & Testing",
      description: "We build your solution using agile methodologies with continuous testing and quality assurance."
    },
    {
      number: "04",
      title: "Deployment & Support",
      description: "We deploy your solution and provide ongoing support, maintenance, and optimization services."
    }
  ];

  return (
    <div className="bg-black min-h-screen xl:p-8 lg:px-5 p-5">
      {/* Hero Section */}
      <div className="text-center py-16 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Services</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          We offer comprehensive development services to help you build the next generation of blockchain and AI-powered solutions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="mb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* Icon */}
                <div className={`p-3 rounded-full bg-gradient-to-r ${service.gradient} text-white mb-6 w-fit`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gray-700 transform translate-x-0 translate-y-0 z-0"></div>
              )}
              
              {/* Step */}
              <div className="relative z-10 bg-gray-900 rounded-xl p-6 border border-gray-800">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose Affidex Lab?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We combine deep technical expertise with a user-first approach to deliver solutions that truly make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <FaUsers className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Team</h3>
            <p className="text-gray-400">
              Our team combines years of experience in blockchain, AI, and software development.
            </p>
          </div>
          
          <div className="text-center">
            <FaLightbulb className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Innovation Focus</h3>
            <p className="text-gray-400">
              We stay at the forefront of technology trends to bring you cutting-edge solutions.
            </p>
          </div>
          
          <div className="text-center">
            <FaChartLine className="w-12 h-12 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-400">
              Our track record speaks for itself with successful projects and satisfied clients.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 bg-gray-900 rounded-2xl border border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Let's discuss how we can help you build innovative solutions that drive your business forward.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get Started
          </a>
          <a
            href="/products"
            className="border border-purple-600 text-purple-400 py-3 px-8 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            View Our Work
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;