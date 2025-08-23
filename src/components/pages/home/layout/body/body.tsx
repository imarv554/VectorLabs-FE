"use client";

import homeData from "@/data/home.data";
import { Card } from "@/components/ui/card";
import Services from "@/components/ui/services";


export default function Body() {
  const { bodysection } = homeData.homepage;


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


          </div>
        ))}


      </div>
    </div>
  );
}
