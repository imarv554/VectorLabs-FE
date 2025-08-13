"use client";
import { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";

export default function AiPmsUI() {
  const [isAnnual, setIsAnnual] = useState(true);
  const discountPercent = 10; // Discount percentage

  // Pricing configuration for the tiers
  const pricing = {
    tier1: { monthly: 0.95 },
    tier2: { monthly: 2.0 },
    tier3: { monthly: 5.0 },
    tier4: { monthly: 10.0 },
  };

  // Function to calculate yearly price from monthly price
  const calculateYearlyPrice = (monthlyPrice: number) => {
    const yearlyPrice = monthlyPrice * 12;
    return discountPercent > 0
      ? (yearlyPrice - (yearlyPrice * discountPercent) / 100).toFixed(2)
      : yearlyPrice.toFixed(2);
  };

  // Function to get the price based on the toggle
  const getPrice = (monthlyPrice: number) => {
    return isAnnual
      ? calculateYearlyPrice(monthlyPrice)
      : monthlyPrice.toFixed(2);
  };

  return (
    <>
      <div className="py-20">
        {/* Pricing toggle */}
        <div className="flex justify-center max-w-[20rem] m-auto mb-8 lg:mb-16">
          <div className="relative flex w-full p-1 border border-secondary rounded-full">
            <span
              className="absolute inset-0 m-1 pointer-events-none"
              aria-hidden="true"
            >
              <span
                className={`absolute inset-0 w-1/2 bg-primaryColor rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out ${isAnnual ? "translate-x-0" : "translate-x-full"}`}
              ></span>
            </span>

            {/* Monthly Button */}
            <button
              className={`relative flex-1 text-sm font-medium h-12 w-90 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? "text-secondary" : "text-white bg-secondary"}`}
              onClick={() => setIsAnnual(false)} // Set to Monthly
              aria-pressed={!isAnnual}
            >
              Monthly
            </button>

            {/* Yearly Button */}
            <button
              className={`relative flex-1 text-sm font-medium h-12 w-90 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${isAnnual ? "text-white bg-secondary" : "text-secondary"}`}
              onClick={() => setIsAnnual(true)} // Set to Yearly
              aria-pressed={isAnnual}
            >
              Yearly
              {discountPercent > 0 && (
                <span className={isAnnual ? "text-white" : "text-secondary"}>
                  {" "}
                  -{discountPercent}%
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="mx-auto grid gap-6 max-w-screen xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 w-full">
          {/* Starter Edge */}
          <div className="h-auto">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div className="mb-2">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="px-2 py-3 mb-2">
                    <h1 className="text-xl text-center text-black">
                      Starter Edge
                    </h1>
                  </div>
                  <p className="text-center py-2">
                    <span className="font-normal text-sm">
                      Individuals and small businesses exploring project
                      management and AI tools.
                    </span>
                  </p>
                </div>
                <div className="flex justify-center w-full items-baseline shadow text-center p-2 rounded-[20px]">
                  <span className="text-black font-bold text-xl text-center">
                    {isAnnual ? "Yearly: $" : "Monthly: $"}
                  </span>
                  <span className="text-black dark:black font-bold text-xl text-center">
                    {isAnnual
                      ? getPrice(pricing.tier1.monthly)
                      : getPrice(pricing.tier1.monthly)}
                  </span>
                  <span className="text-black font-medium text-center">
                    {isAnnual ? " /Yr" : " /Mo"}
                  </span>
                </div>
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow">
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>AI-powered task automation.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Up to 3 active projects per month.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Basic project templates and workflows.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Task tracking.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Dashboard access with limited analytics.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>24/7 email support.</span>
                </li>
              </ul>
              <a
                className="w-full mt-5 inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-950/10 focus-visible:outline-none focus-visible:ring  bg-secondary focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Growth Pro */}
          <div className="h-auto">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div className="mb-2">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="px-2 py-3 mb-2">
                    <h1 className="text-xl text-center text-black">
                      Growth Pro
                    </h1>
                  </div>
                  <p className="text-center py-2">
                    <span className="font-normal text-sm">
                      Individuals and small businesses exploring project
                      management and AI tools.
                    </span>
                  </p>
                </div>
                <div className="flex justify-center w-full items-baseline shadow text-center p-2 rounded-[20px]">
                  <span className="text-black font-bold text-xl text-center">
                    {isAnnual ? "Yearly: $" : "Monthly: $"}
                  </span>
                  <span className="text-black dark:black font-bold text-xl text-center">
                    {isAnnual
                      ? getPrice(pricing.tier2.monthly)
                      : getPrice(pricing.tier2.monthly)}
                  </span>
                  <span className="text-black font-medium text-center">
                    {isAnnual ? " /Yr" : " /Mo"}
                  </span>
                </div>
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow">
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>All features in Starter Edge.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Up to 10 active projects per month.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>
                    Advanced AI insights (e.g., task prioritization and
                    predictive analytics).
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Customizable project templates and workflows.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Team collaboration tools for real-time updates</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Integrated time tracking and reporting.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Resource management tools.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>24/7 email and live chat support.</span>
                </li>
              </ul>
              <a
                className="w-full mt-5 inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-950/10 focus-visible:outline-none focus-visible:ring  bg-secondary focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Elite Mastery */}
          <div className="h-auto">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div className="mb-2">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="px-2 py-3 mb-2">
                    <h1 className="text-xl text-center text-black">
                      Elite Mastery
                    </h1>
                  </div>
                  <p className="text-center py-2">
                    <span className="font-normal text-sm">
                      Individuals and small businesses exploring project
                      management and AI tools.
                    </span>
                  </p>
                </div>
                <div className="flex justify-center w-full items-baseline shadow text-center p-2 rounded-[20px]">
                  <span className="text-black font-bold text-xl text-center">
                    {isAnnual ? "Yearly: $" : "Monthly: $"}
                  </span>
                  <span className="text-black dark:black font-bold text-xl text-center">
                    {isAnnual
                      ? getPrice(pricing.tier3.monthly)
                      : getPrice(pricing.tier3.monthly)}
                  </span>
                  <span className="text-black font-medium text-center">
                    {isAnnual ? " /Yr" : " /Mo"}
                  </span>
                </div>
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow">
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>All features in Starter Edge and Growth Pro.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Unlimited active projects.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>
                    Dedicated project manager for personalized assistance.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>
                    Real-time collaboration with external stakeholders.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>KPI dashboards with exportable reports.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>API access for custom solutions.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>
                    24/7 priority support (email, live chat, and phone).
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Exclusive training sessions and webinars.</span>
                </li>
              </ul>
              <a
                className="w-full mt-5 inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-950/10 focus-visible:outline-none focus-visible:ring  bg-secondary focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Business Innovator  */}
          <div className="h-auto">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div className="mb-2">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="px-2 py-3 mb-2">
                    <h1 className="text-xl text-center text-black">
                      Business Innovator
                    </h1>
                  </div>
                  <p className="text-center py-2">
                    <span className="font-normal text-sm">
                      Designed for Growing Enterprises: Transform Your Business
                      with Expert Consulting, Whitepapers, and Scalable
                      Solutions
                    </span>
                  </p>
                </div>
                <div className="flex justify-center w-full items-baseline shadow text-center p-2 rounded-[20px]">
                  <span className="text-black font-bold text-xl text-center">
                    {isAnnual ? "Yearly: $" : "Monthly: $"}
                  </span>
                  <span className="text-black dark:black font-bold text-xl text-center">
                    {isAnnual
                      ? getPrice(pricing.tier4.monthly)
                      : getPrice(pricing.tier4.monthly)}
                  </span>
                  <span className="text-black font-medium text-center">
                    {isAnnual ? " /Yr" : " /Mo"}
                  </span>
                </div>
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow">
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>
                    All features in Starter Edge, Growth Pro, and Elite Mastery.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Business plan writing and reorganization.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>
                    Whitepaper drafting, reorganization, and polishing (for
                    startups and established businesses).
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Market analysis tools integrated with AI.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Financial model assistance (AI-powered).</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Pitch deck creation assistance.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>
                    Dedicated business consultant support (monthly check-ins).
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>
                    Collaboration tools for investor-ready documentation.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Branding and presentation templates.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Custom APIs for unique business needs.</span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck />
                  <span>Enterprise-grade security and data management.</span>
                </li>
              </ul>
              <a
                className="w-full mt-5 inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-950/10 focus-visible:outline-none focus-visible:ring  bg-secondary focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#"
              >
                Subscribe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
