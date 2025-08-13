"use client";
import { useState, useRef, useEffect } from "react";
import homeData from "@/data/home.data";
import { Card } from "@/components/ui/card";
import Services from "@/components/ui/services";
import { BuildEffect } from "@/components/ui";

export default function Body() {
  const { bodysection } = homeData.homepage;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dropdownRefs = useRef<HTMLDivElement[] | null[]>([]);

  // Toggle dropdown open/close
  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Handle click outside to close all dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRefs.current.every(
          (ref) => ref && !ref.contains(event.target as Node),
        )
      ) {
        setOpenIndex(null); // Close all dropdowns if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="xl:px-20 lg:px-0 px-2">
      <div>
        {/* Benefits */}
        {bodysection?.[0]?.benefits.map((benefits, b) => (
          <div key={b}>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-10">
                {benefits?.title.map((title, t) => (
                  <div key={t} className="flex flex-col lg:gap-10 gap-5">
                    <p className="text-secondary">{title.title}</p>
                    <h1 className="lg:text-7xl text-4xl text-white lg:w-[900px] capitalize">
                      {title.subtitle}
                    </h1>
                    <p className="text-gray-600 lg:text-2xl lg:w-[900px]">
                      {title.text}
                    </p>
                  </div>
                ))}
                <Card />
              </div>
            </div>

            {/* Services */}
            <div className="mt-20">
              <Services />
            </div>

            {/* How it works */}
            <div className="bg-white rounded-lg xl:p-20 lg:py-20 lg:px-8 p-4">
              {bodysection?.[0]?.howitworks.map((howitworks, hiw) => (
                <div
                  key={hiw}
                  className=" grid xl:grid-cols-2 grid-cols-1 gap-5"
                >
                  <div>
                    {howitworks?.title.map((title, t) => (
                      <div key={t} className="flex flex-col gap-5">
                        <p className="text-lg capitalize text-gray-600">
                          {title.title}
                        </p>
                        <h1 className="lg:text-[80px] text-[30px] text-black capitalize font-bold">
                          {title.subtitle}
                        </h1>
                      </div>
                    ))}
                  </div>
                  <div>
                    {howitworks?.accordion.map((accordion, a) => (
                      <div
                        key={a}
                        className="rounded-lg lg:py-3 py-3 transition-all duration-300 border-b"
                        // ref={(el) => dropdownRefs.current[a] = el}
                        ref={(el) => {
                          if (el) dropdownRefs.current[a] = el;
                        }}
                      >
                        <button
                          type="button"
                          className="flex items-center justify-between w-full lg:px-4 px-1 py-1 focus:outline-none text-black"
                          onClick={() => toggleDropdown(a)}
                        >
                          <div className="flex items-center gap-3">
                            <p className="text-gray-700 font-bold lg:text-[35px] text-[20px]">
                              {accordion.sn}
                            </p>
                            <p className="lg:text-[35px] text-[20px] text-start font-bold capitalize">
                              {accordion.title}
                            </p>
                          </div>
                          <div className="flex items-center justify-center w-8 h-8">
                            <span
                              className={` text-gray-600 transition-transform duration-200 ${
                                openIndex === a
                                  ? "transform rotate-180 bg-secondary text-white flex justify-center items-center p-3 rounded-full"
                                  : ""
                              }`}
                            >
                              {accordion.icon}
                            </span>
                          </div>
                        </button>
                        <div
                          className={`overflow-hidden transition-max-height duration-300 ${
                            openIndex === a ? "max-h-screen" : "max-h-0"
                          }`}
                          style={{
                            maxHeight: openIndex === a ? "500px" : "0",
                          }}
                        >
                          <div className="p-4 pt-0">
                            <ul className="text-black lg:text-[20px] text-[14px] text-start ml-10 list-disc flex flex-col gap-4">
                              <li>{accordion.text}</li>
                              {accordion.subtitleA && accordion.subtextA && (
                                <li className="ml-5">
                                  <span className="font-bold">
                                    {accordion.subtitleA}
                                  </span>
                                  <span className="ml-2">
                                    {accordion.subtextA}
                                  </span>
                                </li>
                              )}
                              {accordion.subtitleB && accordion.subtextB && (
                                <li className="ml-5">
                                  <span className="font-bold">
                                    {accordion.subtitleB}
                                  </span>
                                  <span className="ml-2">
                                    {accordion.subtextB}
                                  </span>
                                </li>
                              )}
                              {accordion.subtitleC && accordion.subtextC && (
                                <li className="ml-5">
                                  <span className="font-bold">
                                    {accordion.subtitleC}
                                  </span>
                                  <span className="ml-2">
                                    {accordion.subtextC}
                                  </span>
                                </li>
                              )}
                              <li>{accordion.textB}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div>
          <BuildEffect />
        </div>
      </div>
    </div>
  );
}
