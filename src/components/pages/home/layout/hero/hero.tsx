"use client";
import homeData from "@/data/home.data";
import { HSidebar } from "@/components/ui";
import { TypeWidget } from "@/widgets/typewidget";

export default function Hero() {
  const { herosection } = homeData.homepage;
  const words = [
    {
      text: "Future Of Connectivity",
      className: "text-secondary",
    },
  ];

  return (
    <div className="flex justify-center items-center py-40 gap-20 w-full xl:px-0 lg:px-10 xl:overflow-none lg:overflow-none md:overflow-none">
      <div className="flex justify-center w-full">
        {herosection?.map((hero, i) => (
          <div key={i} className="flex flex-col lg:gap-40 gap-20">
            <div className="">
              {hero?.hero?.map((he, h) => (
                <div key={h} className="text-white flex flex-col gap-10">
                  <div className="flex flex-col gap-5">
                    <div>
                      <h1 className="xl:text-7xl lg:text-6xl md:text-4xl text-2xl capitalize text-center font-bold">
                        {he.title}
                      </h1>
                      <TypeWidget words={words} />
                    </div>
                    <p className="text-center lg:text-xl text-lg">
                      {he.subtitle}
                    </p>
                  </div>
                  <div className="text-black flex lg:flex-row flex-col justify-center lg:gap-6 gap-2 p-3 rounded-full">
                    {hero?.button.map((btn, i) => (
                      <a
                        key={i}
                        href={btn.link}
                        className="bg-white lg:px-20 lg:py-5 px-10 py-3 rounded-full lg:text-xl text-sm font-bold capitalize hover:bg-secondary hover:border hover:border-white hover:text-white border-[2px] border-secondary lg:w-80 w-full text-center"
                      >
                        {btn.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <HSidebar />
          </div>
        ))}
      </div>
    </div>
  );
}
