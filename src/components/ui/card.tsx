import React from "react";
import { Icon } from "@/widgets";

import homeData from "@/data/home.data";

export function Card() {
  const { bodysection } = homeData.homepage;

  return (
    <div className="grid xl:grid-cols-4 lg:colss-grid-2 md:grid-cols-2 grid-cols-1 gap-10">
      {bodysection?.[0].benefits?.[0].boxes.map((boxes, i) => (
        <div
          key={i}
          className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-full p-4 relative min-h-[20rem] h-auto"
        >
          {/* <div className="text-white text-5xl">{boxes.icon}</div> */}
          <div>
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
          </div>

          <div>
            <h2 className="dark:text-white text-black mt-4 lg:text-5xl text-3xl font-font">
              {boxes.title}
            </h2>
            <p className="lg:text-md text-sm font-light rounded-full mt-4 text-black dark:text-gray-300 py-0.5">
              {boxes.subtext}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
