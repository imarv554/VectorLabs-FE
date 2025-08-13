"use client";
import type React from "react";
import { cn } from "@/lib/util";
import homeData from "@/data/home.data";

const FeatureCard = ({
  children,
  className,
  titleClass,
  desClass,
}: {
  children: React.ReactNode;
  className?: string;
  titleClass?: string;
  desClass?: string;
}) => {
  return (
    <div
      className={cn(
        `p-4 lg:p-8 relative overflow-hidden`,
        className,
        titleClass,
        desClass,
      )}
    >
      {children}
    </div>
  );
};

const FeatureTitle = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <p className=" max-w-screen mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base  max-w-4xl text-left mx-auto",
        "text-gray-500 text-center font-normal dark:text-gray-300",
        "text-left max-w-sm mx-0 md:text-sm my-2",
      )}
    >
      {children}
    </p>
  );
};

export default function Services() {
  const { bodysection } = homeData.homepage;

  return (
    <div className="relative z-20 py-10 lg:py-40 max-w-screen mx-auto">
      <div className="lg:px-8">
        {bodysection?.[0]?.services?.[0].title.map((title, t) => (
          <div
            key={t}
            className="flex flex-col gap-6 justify-center items-center"
          >
            <h1 className="lg:text-6xl text-3xl text-white">{title.title}</h1>
            <p className="lg:text-xl text-sm text-gray-400">{title.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="relative ">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-gray-800">
          {bodysection?.[0]?.services?.[0].services.map((service, s) => (
            <FeatureCard key={s} className={service.className}>
              <FeatureTitle>{service.title}</FeatureTitle>
              <FeatureDescription>{service.description}</FeatureDescription>
              <div className=" h-full w-full">{service.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}
