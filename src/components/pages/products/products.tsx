"use client";
import React from "react";
import { FaShieldAlt, FaGamepad, FaLock, FaFingerprint, FaPalette, FaRocket } from "react-icons/fa";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: "Cipher Wallet",
      category: "Blockchain Security",
      description: "A revolutionary crypto wallet that eliminates seed phrases using Shamir's Secret Sharing, featuring biometric recovery and duress auto-lock for maximum security.",
      icon: <FaShieldAlt className="w-8 h-8" />,
      features: [
        "No seed phrases required",
        "Shamir's Secret Sharing technology",
        "Biometric recovery system",
        "Duress auto-lock protection",
        "Enhanced security architecture"
      ],
      status: "MVP",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Gamify",
      category: "AI Platform",
      description: "An AI-powered platform that enables anyone to create engaging games through natural language prompts, democratizing game development for creators worldwide.",
      icon: <FaGamepad className="w-8 h-8" />,
      features: [
        "Natural language game creation",
        "AI-powered development tools",
        "No coding required",
        "Rapid prototyping",
        "Accessible to everyone"
      ],
      status: "MVP",
      gradient: "from-green-500 to-teal-600"
    }
  ];

  const pastProjects = [
    {
      title: "Blockchain Infrastructure",
      description: "Built scalable blockchain solutions for enterprise clients",
      icon: <FaLock className="w-6 h-6" />,
    },
    {
      title: "AI Integration Services", 
      description: "Developed AI-powered tools for various business applications",
      icon: <FaFingerprint className="w-6 h-6" />,
    },
    {
      title: "Custom Software Solutions",
      description: "Created tailored software solutions for Web2 and Web3 businesses",
      icon: <FaPalette className="w-6 h-6" />,
    }
  ];

  return (
    <div className="bg-black min-h-screen xl:p-8 lg:px-5 p-5">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Products</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Discover our innovative MVP products and explore the cutting-edge solutions we've built for the future of blockchain and AI.
        </p>
      </div>

      {/* Current MVPs Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Current MVPs</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="bg-gray-900 rounded-2xl p-8 h-full border border-gray-800 hover:border-gray-600 transition-all duration-300 group-hover:transform group-hover:scale-105">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${product.gradient} text-white`}>
                    {product.icon}
                  </div>
                  <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">
                    {product.status}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-purple-400 font-medium mb-4">{product.category}</p>
                  <p className="text-gray-300 leading-relaxed">{product.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <div className="mt-8">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past Projects Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Past Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pastProjects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-colors">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-800 rounded-lg text-purple-400">
                  {project.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              </div>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-16 bg-gray-900 rounded-2xl border border-gray-800">
        <FaRocket className="w-16 h-16 text-purple-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Build the Future?</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join us in our mission to create innovative solutions that push the boundaries of blockchain and AI technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </a>
          <a
            href="/about"
            className="border border-purple-600 text-purple-400 py-3 px-8 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
          >
            Learn About Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;