"use client";
import React from "react";
import { FaFileAlt, FaDownload, FaLightbulb, FaRocket, FaCog, FaUsers, FaShieldAlt, FaChartLine } from "react-icons/fa";

const WhitePaperPage = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      icon: <FaLightbulb className="w-5 h-5" />,
    },
    {
      id: "mission-vision",
      title: "Mission & Vision", 
      icon: <FaRocket className="w-5 h-5" />,
    },
    {
      id: "technology",
      title: "Technology Stack",
      icon: <FaCog className="w-5 h-5" />,
    },
    {
      id: "products",
      title: "Product Portfolio",
      icon: <FaShieldAlt className="w-5 h-5" />,
    },
    {
      id: "roadmap",
      title: "Roadmap",
      icon: <FaChartLine className="w-5 h-5" />,
    },
    {
      id: "team",
      title: "Team",
      icon: <FaUsers className="w-5 h-5" />,
    }
  ];

  return (
    <div className="bg-black min-h-screen xl:p-8 lg:px-5 p-5">
      {/* Hero Section */}
      <div className="text-center py-16 mb-12">
        <FaFileAlt className="w-16 h-16 text-purple-500 mx-auto mb-6" />
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Affidex Lab <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">White Paper</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          A comprehensive overview of our incubation laboratory, mission, technology, and vision for the future of blockchain and AI solutions.
        </p>
        <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center space-x-2">
          <FaDownload className="w-4 h-4" />
          <span>Download PDF</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-8">
        {/* Table of Contents */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 sticky top-8">
            <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors py-2 text-sm"
                >
                  {section.icon}
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Introduction */}
          <section id="introduction" className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
              <FaLightbulb className="text-purple-500" />
              <span>Introduction</span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Affidex Lab represents the evolution of CreedTech Group into a specialized incubation laboratory focused on developing core utility projects in the blockchain and artificial intelligence domains. Our transformation reflects a strategic pivot towards building foundational technologies that will shape the future of decentralized systems and intelligent applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                As an incubation laboratory, we operate at the intersection of innovation and practicality, taking promising concepts from ideation through MVP development and market validation. Our approach combines rigorous technical development with user-centered design principles to create solutions that are both cutting-edge and accessible.
              </p>
              <p className="text-gray-300 leading-relaxed">
                This white paper outlines our comprehensive approach to innovation, detailing our technological capabilities, product portfolio, and strategic vision for contributing to the next generation of digital infrastructure.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section id="mission-vision" className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
              <FaRocket className="text-purple-500" />
              <span>Mission & Vision</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To incubate and develop innovative blockchain and AI solutions that prioritize user privacy, accessibility, and real-world utility. We bridge the gap between complex technologies and practical applications, making advanced systems usable for everyone.
                </p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To become the leading incubation laboratory for core utility projects, fostering an ecosystem where privacy-first solutions and AI-powered tools work together to create a more secure, intelligent, and accessible digital future.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-800/30">
              <h3 className="text-xl font-semibold text-white mb-4">Core Values</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Privacy by Design</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>User-Centric Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Innovation Through Iteration</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Open Collaboration</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Technology Stack */}
          <section id="technology" className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
              <FaCog className="text-purple-500" />
              <span>Technology Stack</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Blockchain Technologies</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Ethereum & EVM-compatible chains</li>
                  <li>• Solidity smart contract development</li>
                  <li>• Layer 2 scaling solutions</li>
                  <li>• Cross-chain interoperability</li>
                  <li>• DeFi protocol integration</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">AI & Machine Learning</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• Generative AI models</li>
                  <li>• Machine Learning pipelines</li>
                  <li>• AI model optimization</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Development Stack</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• React & Next.js</li>
                  <li>• Node.js & TypeScript</li>
                  <li>• Python for AI development</li>
                  <li>• Docker containerization</li>
                  <li>• Cloud infrastructure (AWS, GCP)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Product Portfolio */}
          <section id="products" className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
              <FaShieldAlt className="text-purple-500" />
              <span>Product Portfolio</span>
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg p-6 border border-blue-800/30">
                <h3 className="text-2xl font-semibold text-white mb-4">Cipher Wallet</h3>
                <p className="text-gray-300 mb-4">
                  Revolutionary crypto wallet that eliminates the need for seed phrases through Shamir's Secret Sharing technology. Features biometric recovery and duress auto-lock for maximum security.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Key Innovations:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Seedless architecture</li>
                      <li>• Biometric authentication</li>
                      <li>• Social recovery mechanisms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Security Features:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Duress protection</li>
                      <li>• Multi-signature support</li>
                      <li>• Hardware wallet integration</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg p-6 border border-green-800/30">
                <h3 className="text-2xl font-semibold text-white mb-4">Gamify</h3>
                <p className="text-gray-300 mb-4">
                  AI-powered platform that democratizes game development by enabling anyone to create engaging games through natural language prompts, removing technical barriers to creativity.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Core Features:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Natural language interface</li>
                      <li>• AI-powered game generation</li>
                      <li>• Real-time collaboration</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Target Users:</h4>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• Non-technical creators</li>
                      <li>• Educational institutions</li>
                      <li>• Rapid prototyping teams</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
              <FaChartLine className="text-purple-500" />
              <span>Roadmap</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">Q1</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Foundation & MVP Launch</h3>
                  <p className="text-gray-300 text-sm">Complete Cipher Wallet and Gamify MVPs, establish core infrastructure</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">Q2</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Market Expansion</h3>
                  <p className="text-gray-300 text-sm">User acquisition, partnerships, and product refinement based on feedback</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">Q3</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Next-Gen Products</h3>
                  <p className="text-gray-300 text-sm">Launch new incubation projects, expand AI capabilities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">Q4</div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Ecosystem Growth</h3>
                  <p className="text-gray-300 text-sm">Platform integrations, developer tools, community building</p>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section id="team" className="bg-gray-900 rounded-xl p-8 border border-gray-800">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center space-x-3">
              <FaUsers className="text-purple-500" />
              <span>Our Team</span>
            </h2>
            
            <div className="text-center">
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
                Our diverse team combines expertise in blockchain development, artificial intelligence, user experience design, and product management. United by a shared vision of creating accessible, privacy-first technologies, we bring together years of experience from leading tech companies and successful startups.
              </p>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-6 border border-purple-800/30 text-center">
              <h3 className="text-xl font-semibold text-white mb-4">Join Our Mission</h3>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals who share our passion for innovation and privacy-first technology.
              </p>
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-8 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Get In Touch
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WhitePaperPage;