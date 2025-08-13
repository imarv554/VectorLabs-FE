import { FaCircleCheck } from "react-icons/fa6";

export default function PricingUI() {
  return (
    <>
      <div className="py-0">
        {/* Pricing */}
        <div className="mx-auto grid gap-6 max-w-screen xl:grid-cols-3 lg:grid-cols-1 w-full grid-cols-1">
          {/* Fast Track */}
          <div className="h-auto">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div className="mb-2">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="bg-primaryColor mb-2">
                    <h1 className="text-xl text-center text-black">
                      Fast Track Solutions
                    </h1>
                  </div>
                  <p className="text-sm font-normal text-center">
                    Reliable Projects Built with Quality and Precision in Just 4
                    Months
                  </p>
                </div>
                <div className="flex justify-between items-center py-4 lg:gap-0 gap-2">
                  <div className="w-full bg-primaryColorDark p-2 rounded-[20px] shadow-xl text-center">
                    <span className="text-black dark:black font-bold text-xl">
                      $150 - $550
                    </span>
                  </div>
                </div>
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow">
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Effective team: </span>
                    <span className="ml-1">
                      Streamlined processes for timely delivery without
                      sacrificing quality.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Built with Efficiency: </span>
                    <span className="ml-1">
                      A dedicated and experienced team ensures quality and
                      precision in every project.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Zero Extra Fees: </span>
                    <span className="ml-1">
                      Transparent pricing with no hidden charges—what you see is
                      what you get.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Dedicated Project Manager:{" "}
                    </span>
                    <span className="ml-1">
                      {" "}
                      A single point of contact for seamless communication and
                      progress tracking.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Free Consultation: </span>
                    <span className="ml-1">
                      Expert advice tailored to your business needs before we
                      begin.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Sustainability Focus: </span>
                    <span className="ml-1">
                      We use eco-friendly tools and technologies wherever
                      possible.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Client Portal: </span>
                    <span className="ml-1">
                      Access all project updates and files in one user-friendly
                      dashboard.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Milestone-Based Payments:{" "}
                    </span>
                    <span className="ml-1">
                      Pay only as major milestones are completed for peace of
                      mind.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">24/7 Support: </span>
                    <span className="ml-1">
                      Always-on support to address your queries and updates
                      anytime.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Low Fees: </span>
                    <span className="ml-1">
                      Competitive pricing tailored to deliver exceptional value
                      for your investment.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Timely Updates: </span>
                    <span className="ml-1">
                      Regular progress notifications to keep you informed every
                      step of the way.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Completion Alerts: </span>
                    <span className="ml-1">
                      Be the first to know when your project is successfully
                      completed.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Referral Bonus: </span>
                    <span className="ml-1">
                      Earn exclusive rewards for bringing friends and businesses
                      to join us.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Customizable Solutions: </span>
                    <span className="ml-1">
                      Flexibility to adapt to your specific business needs.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      100% Satisfaction Guarantee:{" "}
                    </span>
                    <span className="ml-1">
                      Your satisfaction is our priority—our success is your
                      success.
                    </span>
                  </span>
                </li>
              </ul>
              <a
                className="w-full mt-5 inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-4 text-sm text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring  bg-secondary font-bold focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href=""
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Accelerate Your Vision */}
          <div className="h-full">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-secondary shadow-lg shadow-slate-950/5">
              <div className="mb-1">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="bg-primaryColor px-2 py-3 mb-2">
                    <h1 className="text-xl text-center text-black">
                      Accelerate Your Vision
                    </h1>
                  </div>
                  <p className="text-sm font-normal text-center">
                    Delivering High-Quality Projects in Just 2 Months with
                    Premium Perks
                  </p>
                </div>
                <div className="flex justify-between items-center py-4 lg:gap-0 gap-2">
                  <div className="w-full text-center p-2 rounded-[20px] shadow-xl">
                    <span className="text-black font-bold text-xl">
                      $600 - 1,200
                    </span>
                  </div>
                </div>
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow">
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Effective Team: </span>
                    <span className="ml-1">
                      A highly skilled team committed to fast, flawless
                      execution
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Efficiency at Its Peak: </span>
                    <span className="ml-1">
                      Accelerated processes to deliver top-notch results in
                      record time.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Dedicated Project Manager:{" "}
                    </span>
                    <span className="ml-1">
                      {" "}
                      A single point of contact for seamless communication and
                      progress tracking.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Free Consultation: </span>
                    <span className="ml-1">
                      Expert advice tailored to your business needs before we
                      begin.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Sustainability Focus: </span>
                    <span className="ml-1">
                      We use eco-friendly tools and technologies wherever
                      possible.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Client Portal: </span>
                    <span className="ml-1">
                      Access all project updates and files in one user-friendly
                      dashboard.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Milestone-Based Payments:{" "}
                    </span>
                    <span className="ml-1">
                      Pay only as major milestones are completed for peace of
                      mind.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Zero Extra Fees: </span>
                    <span className="ml-1">
                      Transparent pricing that reflects our commitment to
                      fairness.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Domain Purchase Included:{" "}
                    </span>
                    <span className="ml-1">
                      Save time and hassle—we handle the domain purchase for
                      you.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Hosting Perk: </span>
                    <span className="ml-1">
                      Enjoy complimentary hosting services for a seamless
                      experience.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">24/7 VIP Support: </span>
                    <span className="ml-1">
                      Dedicated priority support ensures your questions are
                      answered instantly.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Cost-Effective: </span>
                    <span className="ml-1">
                      Premium speed without breaking the bank—perfect for
                      growing businesses.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Completion Alerts: </span>
                    <span className="ml-1">
                      Instant notifications as soon as your project is
                      finalized.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Referral Bonus: </span>
                    <span className="ml-1">
                      Get exclusive incentives for referring clients to our
                      Super Fast plan.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Priority Revisions: </span>
                    <span className="ml-1">
                      Need tweaks? We’ll prioritize revisions to meet your exact
                      requirements.
                    </span>
                  </span>
                </li>
              </ul>
              <a
                className="w-full mt-4 inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-4 text-sm text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring  bg-secondary font-bold focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href=""
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Lightning Speed Excellence */}
          <div className="h-full">
            <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white border border-slate-200 dark:border-gray-100 shadow-lg shadow-slate-950/5">
              <div className="mb-1">
                <div className="text-black dark:black font-semibold mb-1">
                  <div className="bg-white py-3 mb-2">
                    <h1 className="text-xl text-center text-black">
                      Lightning Speed Excellence
                    </h1>
                  </div>
                  <p className="text-sm font-normal text-center">
                    Elite Projects Delivered in 1 Month with Unmatched Quality
                    and Service
                  </p>
                </div>
                <div className="flex justify-between items-center py-4 lg:gap-0 gap-2">
                  <div className="w-full text-center p-2 shadow-xl rounded-[20px]">
                    <span className="text-black dark:black font-bold text-xl">
                      Speak with our team on the fees
                    </span>
                  </div>
                </div>
              </div>
              <ul className="text-black dark:text-black text-sm space-y-3 grow mb-2">
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Elite Team Access: </span>
                    <span className="ml-1">
                      Our top-tier team, handpicked for your project, guarantees
                      excellence.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Unparalleled Efficiency: </span>
                    <span className="ml-1">
                      Revolutionary speed meets impeccable quality—no
                      compromises.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Zero Extra Fees: </span>
                    <span className="ml-1">
                      Enjoy a truly premium experience without hidden costs.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Dedicated Project Manager:{" "}
                    </span>
                    <span className="ml-1">
                      {" "}
                      A single point of contact for seamless communication and
                      progress tracking.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Free Consultation: </span>
                    <span className="ml-1">
                      Expert advice tailored to your business needs before we
                      begin.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Sustainability Focus: </span>
                    <span className="ml-1">
                      We use eco-friendly tools and technologies wherever
                      possible.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Client Portal: </span>
                    <span className="ml-1">
                      Access all project updates and files in one user-friendly
                      dashboard.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Milestone-Based Payments:{" "}
                    </span>
                    <span className="ml-1">
                      Pay only as major milestones are completed for peace of
                      mind.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Domain Purchase Included:{" "}
                    </span>
                    <span className="ml-1">
                      Focus on your vision while we secure your domain.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Premium Hosting Perk: </span>
                    <span className="ml-1">
                      Complimentary hosting that ensures fast and reliable
                      performance.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      24/7 White-Glove Support:{" "}
                    </span>
                    <span className="ml-1">
                      Personalized support, available around the clock.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Cost-Effective Premium Service:{" "}
                    </span>
                    <span className="ml-1">
                      Exclusive speed at a price that delivers unparalleled ROI.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Real-Time Notifications: </span>
                    <span className="ml-1">
                      Stay informed with updates in real time throughout the
                      project.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Referral Bonus: </span>
                    <span className="ml-1">
                      Generous rewards for recommending our Exclusive Speed
                      plan.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">
                      Express Delivery Guarantee:{" "}
                    </span>
                    <span className="ml-1">
                      Projects delivered in one month or less—guaranteed.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Post-Launch Support: </span>
                    <span className="ml-1">
                      Extended support to ensure smooth functionality after
                      completion.
                    </span>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaCircleCheck className="text-lg" />
                  <span className="">
                    <span className="font-bold">Exclusive Speed Build: </span>
                    <span className="ml-1">
                      Enjoy the ultimate in speed and precision—your project
                      ready in record time.
                    </span>
                  </span>
                </li>
              </ul>
              <a
                className="w-full mt-4 inline-flex justify-center whitespace-nowrap rounded-lg bg-green px-3.5 py-4 text-sm text-white shadow-sm shadow-indigo-950/10 hover:bg-greenShade focus-visible:outline-none focus-visible:ring  bg-secondary font-bold focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href=""
              >
                Reach out
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
