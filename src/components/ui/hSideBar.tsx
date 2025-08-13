"use client";
import { cn } from "@/lib/util";
import homeData from "@/data/home.data";

export function HSidebar() {
  return (
    <div
      className={cn(
        "rounded-md flex justify-center items-center bg-black dark:bg-black w-full flex-1 xl:max-w-screen mx-auto border border-gray-200 dark:border-gray-700 overflow-hidden",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-[60vh]",
      )}
    >
      <Dashboard />
    </div>
  );
}

const Dashboard = () => {
  const { herosection } = homeData.homepage;
  return (
    <div className="xl:px-0 lg:px-0 md:px-0 px-0">
      {herosection?.[0]?.hero.map((img, i) => (
        <div key={i}>
          <img
            src={img.img.src}
            alt={img.name}
            className="xl:w-[1400px] xl:h-full lg:w-auto lg:h-auto md:w-auto md:h-auto w-auto h-auto"
          />
        </div>
      ))}
    </div>
  );
};
