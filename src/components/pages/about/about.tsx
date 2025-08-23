"use client";
import React from "react";
import { FaRocket, FaEye, FaBullseye, FaHistory, FaUsers, FaLightbulb, FaShieldAlt } from "react-icons/fa";

const AboutPage = () => {
  const values = [
    {
      icon: <FaShieldAlt className="w-6 h-6" />,
      title: "Privacy by Design",
      description: "We build privacy-first solutions that put user control and data protection at the forefront of everything we create."
    },
    {
      icon: <FaUsers className="w-6 h-6" />,
      title: "User-Centric Development",
      description: "Our development process centers around real user needs, ensuring our solutions are both powerful and accessible."
    },
    {
      icon: <FaLightbulb className="w-6 h-6" />,
      title: "Innovation Through Iteration",
      description: "We believe in rapid prototyping and continuous improvement to bring the best possible solutions to market."
    },
    {
      icon: <FaRocket className="w-6 h-6" />,
      title: "Open Collaboration",
      description: "We foster an environment of open communication and collaboration to drive innovation and success."
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "CreedTech Group Founded",
      description: "Started as a technology consultancy focusing on Web2 development and digital transformation."
    },
    {
      year: "2022",
      title: "Blockchain Expansion",
      description: "Expanded into Web3 and blockchain development, building solutions for the decentralized ecosystem."
    },
    {
      year: "2023",
      title: "AI Integration",
      description: "Integrated artificial intelligence capabilities to enhance our development offerings and create smarter solutions."
    },
    {
      year: "2024",
      title: "Affidex Lab Evolution",
      description: "Transformed into Affidex Lab, an incubation laboratory focused on core utility projects and MVP development."
    }
  ];

  return (
    <div className="bg-black min-h-screen xl:p-8 lg:px-5 p-5">
      {/* Hero Section */}
      <div className="text-center py-16 mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Affidex Lab</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Formerly CreedTech Group, we've evolved into an incubation laboratory focused on building the next generation of blockchain and AI-powered solutions.
        </p>
      </div>

      {/* Story Section */}
      <div className="mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-6">
              <FaHistory className="text-purple-500 w-8 h-8" />
              <h2 className="text-3xl font-bold text-white">Our Story</h2>
            </div>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Affidex Lab represents the natural evolution of CreedTech Group, born from our vision to create meaningful, utility-focused projects that push the boundaries of what's possible with blockchain and artificial intelligence technologies.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our transformation from a traditional development consultancy to a specialized incubation laboratory reflects our deep commitment to innovation and our belief that the future belongs to those who can seamlessly integrate privacy-first design with cutting-edge technology.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Today, we focus on developing minimum viable products that solve real-world problems, with our flagship projects Cipher Wallet and Gamify demonstrating our ability to turn complex technologies into accessible, user-friendly solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission, Vision, and Values */}
      <div className="mb-20">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Mission */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-6">
              <FaBullseye className="text-purple-500 w-8 h-8" />
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To incubate and develop innovative blockchain and AI solutions that prioritize user privacy, accessibility, and real-world utility. We bridge the gap between complex technologies and practical applications, making advanced systems usable for everyone.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center space-x-3 mb-6">
              <FaEye className="text-purple-500 w-8 h-8" />
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To become the leading incubation laboratory for core utility projects, fostering an ecosystem where privacy-first solutions and AI-powered tools work together to create a more secure, intelligent, and accessible digital future.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-colors">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-600 rounded-lg text-white">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gray-900 rounded-xl p-6 border border-gray-800">
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-300">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What Sets Us Apart */}
      <div className="mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Privacy-First Approach</h3>
              <p className="text-gray-400">
                We build solutions that prioritize user privacy and data protection from the ground up, never as an afterthought.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaLightbulb className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation Focus</h3>
              <p className="text-gray-400">
                We stay at the cutting edge of blockchain and AI technology to create solutions that truly make a difference.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">User-Centric Design</h3>
              <p className="text-gray-400">
                Every solution we create is designed with real users in mind, ensuring accessibility and usability at every step.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 bg-gray-900 rounded-2xl border border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Mission?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Whether you're interested in our products, services, or potential partnerships, we'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="/products"
            className="border border-purple-600 text-purple-400 py-3 px-8 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Explore Our Products
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;