"use client";
import React from "react";
import AiPmsUI from "@/components/ui/aipmsUI";
import { motion } from "framer-motion";
import { ServicesHeroWidget, Highlight } from "@/widgets/servicesHeroWidget";

export default function AiPMS() {
  return (
    <main className="max-w-screen mx-auto xl:px-0 lg:px-2 md:px-2 px-1 py-6 bg-black">
      <section className="xl:px-20 lg:px-0 md:px-0 px-2">
        {/* AIPMS Hero */}
        <ServicesHeroWidget>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-gray-700 dark:text-white max-w-screen leading-relaxed lg:leading-snug text-center mx-auto "
          >
            {" "}
            <p>Affordable, Scalable Plans to Fit Every Business Need</p>
            <Highlight className="text-black dark:text-white mx-3">
              —From Starter to Elite, We Have the Right Solution for You
            </Highlight>
          </motion.h1>
        </ServicesHeroWidget>

        {/* Pricing Section */}
        <div className="max-w-screen mx-auto">
          <AiPmsUI />
        </div>
      </section>
    </main>
  );
}
