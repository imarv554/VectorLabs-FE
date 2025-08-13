"use client";
import React from "react";
import { cn } from "@/lib/util";
import { Boxes } from "@/widgets/comingSoonWidget";
import { useRouter } from "next/navigation";

export function ComingSoon() {
  const router = useRouter();

  const handleClick = () => {
    router.replace("/");
  };

  return (
    <div className="h-screen relative w-full overflow-hidden bg-gray-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-gray-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes className={undefined} />
      <div className="flex flex-col gap-5 z-20">
        <div className="flex flex-col gap-2">
          <h1
            className={cn(
              "xl:text-7xl lg:text-5xl md:text-3xl text-2xl text-white relative text-center",
            )}
          >
            Page Not Yet Available
          </h1>
          <p className="text-center mt-2 text-gray-200 relative xl:text-2xl lg:text-xl md:text-lg text-sm">
            We are still building
          </p>
        </div>
        <button
          onClick={handleClick}
          className="bg-white text-black xl:p-5 lg:p-4 md:p-3 p-2 rounded-full capitalize font-bold text-xl"
        >
          Back to Home Page
        </button>
      </div>
    </div>
  );
}
