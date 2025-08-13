"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";
import { FaCode, FaRobot, FaRocket } from "react-icons/fa";

export function SkeletonOne() {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-2">
          <span className="text-white lg:text-[300px] text-[200px]">
            <FaRocket />
          </span>
        </div>
      </div>
    </div>
  );
}

export function SkeletonThree() {
  return (
    <div className="w-full mx-auto bg-transparent dark:bg-transparent group h-full">
      <div className="flex flex-1 w-full h-full flex-col space-y-2 relative">
        <span className="text-white lg:text-[300px] text-[200px]">
          <FaRobot />
        </span>
      </div>
    </div>
  );
}

export function SkeletonTwo() {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col">
          <span className="text-white lg:text-[300px] text-[200px]">
            <FaCode />
          </span>
        </div>
      </div>
    </div>
  );
}

export function SkeletonFour() {
  return (
    <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
      <Globe className="absolute -right-10 md:-right-10 -bottom-80 md:-bottom-72" />
    </div>
  );
}

export function Globe({ className }: { className?: string }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let phi = 0;

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
}
