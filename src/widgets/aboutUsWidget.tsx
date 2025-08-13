"use client";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const AboutUsWidget = ({
  aboutus,
  autoplay = false,
}: {
  aboutus: {
    src: string;
    name: string;
    designation?: string;
    quote: string;
  }[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [rotations, setRotations] = useState<number[]>([]); // Store rotations

  useEffect(() => {
    // Generate random rotations on the client
    setRotations(aboutus.map(() => Math.floor(Math.random() * 21) - 10));
  }, [aboutus]);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % aboutus.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + aboutus.length) % aboutus.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="xl:max-w-screen mx-auto antialiased font-sans px-2 md:px-2 xl:px-5 lg:px-12 py-20 mb-20 bg-white rounded-lg">
      <div className="relative grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 xl:gap-20 md:text-center xl:text-start lg:text-center text-center">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence initial={false}>
              {aboutus.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: rotations[index] || 0,
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : rotations[index] || 0,
                    zIndex: isActive(index) ? 99 : aboutus.length + 2 - index,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 10,
                    rotate: rotations[index] || 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  {isActive(index) && (
                    <img
                      src={item.src}
                      alt={item.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="h-full w-[400px] rounded-3xl object-cover object-center xl:mx-0 mx-auto"
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-10 py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="xl:text-4xl text-2xl font-bold dark:text-black text-black">
              {aboutus[active].name}
            </h3>
            <p className=" tex-sm text-gray-500 dark:text-gray-500">
              {aboutus[active].designation}
            </p>
            <motion.p className="xl:text-xl text-lg text-gray-500 mt-8 dark:text-gray-700">
              {aboutus[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex xl:justify-start justify-center items-center gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-gray-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-gray-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
