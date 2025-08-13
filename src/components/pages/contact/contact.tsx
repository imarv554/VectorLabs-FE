"use client";
import React from "react";
import { ContactWidget } from "@/widgets/contactWidget";
import contactData from "@/data/contact.data";
import { cn } from "@/lib/util";
import {
  AIPMS,
  Builds,
  Connect,
  Designing,
  Friendly,
  Launch,
  LowCost,
  Markets,
  Notify,
  OnTime,
  Pace,
  Productivity,
  Sales,
  Smooth,
  Teams,
} from "../../../../public/img";

export const products = [
  {
    title: "Design",
    link: "/coming-soon",
    thumbnail: Designing.src,
  },
  {
    title: "Build",
    link: "/coming-soon",
    thumbnail: Builds.src,
  },
  {
    title: "Low Cost",
    link: "/coming-soon",
    thumbnail: LowCost.src,
  },
  {
    title: "User Friendly",
    link: "/coming-soon",
    thumbnail: Friendly.src,
  },
  {
    title: "Connect",
    link: "/coming-soon",
    thumbnail: Connect.src,
  },
  {
    title: "Smooth",
    link: "/coming-soon",
    thumbnail: Smooth.src,
  },

  {
    title: "Teams",
    link: "/coming-soon",
    thumbnail: Teams.src,
  },
  {
    title: "Ai & PMS",
    link: "/coming-soon",
    thumbnail: AIPMS.src,
  },
  {
    title: "Market Place",
    link: "/coming-soon",
    thumbnail: Markets.src,
  },
  {
    title: "Pace",
    link: "/coming-soon",
    thumbnail: Pace.src,
  },
  {
    title: "Sales",
    link: "/coming-soon",
    thumbnail: Sales.src,
  },
  {
    title: "Productivity",
    link: "/coming-soon",
    thumbnail: Productivity.src,
  },
  {
    title: "On Time",
    link: "/coming-soon",
    thumbnail: OnTime.src,
  },
  {
    title: "Notify",
    link: "/coming-soon",
    thumbnail: Notify.src,
  },
  {
    title: "Launch",
    link: "/coming-soon",
    thumbnail: Launch.src,
  },
];

export default function Contact() {
  const { getInTouch, form, textArea, contactImage, contactDetails, socials } =
    contactData.contents;
  return (
    <main className="bg-black py-6 xl:px-0 px-1">
      {/* Contact hero */}
      <div className="py-10">
        <ContactWidget products={products} />
      </div>

      {/* Contact Us */}
      <div className="xl:p-20 lg:py-0 md:py-20 py-20">
        <div className="grid xl:grid-cols-2 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 xl:py-20 xl:p-5 lg:py-10 lg:px-2 md:py-10 md:px-2 py-10 px-2 gap-32 shadow">
          <Card className="flex flex-col gap-10 border border-gray-600 xl:p-10 p-2 rounded-lg">
            <div>
              {getInTouch.map((git, g) => (
                <div key={g} className="flex flex-col gap-5">
                  <p className="text-secondary xl:text-lg lg:text-md md:text-md text-xs capitalize">
                    {git.title}
                  </p>
                  <h1 className="text-white xl:text-6xl lg:text-4xl md:text-4xl text-2xl capitalize">
                    {git.subTitle}
                  </h1>
                  <p className="text-gray-300 xl:text-lg lg:text-md md:text-md text-xs">
                    {git.text}
                  </p>
                  <div className="h-[1px] w-full bg-white rounded-full" />
                </div>
              ))}
            </div>
            <form>
              {form.map((item, f) => (
                <div key={f} className="mt-2">
                  <div className="gap-2 my-2">
                    {f === 0 && (
                      <div className="grid grid-cols-2 gap-4">
                        {form.slice(0, 2).map((field, index) => (
                          <div key={index} className="flex flex-col">
                            <label
                              htmlFor={field.label}
                              className="text-white xl:text-xl lg:text-md md:text-md text-sm"
                            >
                              {field.label}
                            </label>
                            <input
                              type={field.type}
                              placeholder={field.placeholder}
                              className="p-2 rounded-lg outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {f === 2 && (
                      <div className="flex flex-col">
                        <label
                          htmlFor={item.label}
                          className="text-white xl:text-xl lg:text-md md:text-md text-sm"
                        >
                          {item.label}
                        </label>
                        <input
                          type={item.type}
                          placeholder={item.placeholder}
                          className="p-2 rounded-lg outline-none"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}

              <div>
                {textArea.map((message, i) => (
                  <div key={i} className="flex flex-col gap-2 py-3">
                    <label className="text-white xl:text-xl lg:text-md md:text-md text-sm">
                      {message.label}
                    </label>
                    <textarea
                      className="px-2 py-2 h-40 rounded-lg outline-none"
                      placeholder={message.placeholder}
                    ></textarea>
                  </div>
                ))}
              </div>
              <button className="p-2 text-black bg-white w-full mt-3 rounded-lg font-bold">
                submit
              </button>
            </form>
          </Card>
          <Card className="border border-gray-600 xl:p-10 p-2 rounded-lg">
            <div>
              {contactImage.map((img, i) => (
                <img key={i} src={img.img.src} alt={img.name} />
              ))}
            </div>
            <div>
              <div>
                {contactDetails.map((details, d) => (
                  <div
                    key={d}
                    className="flex items-center gap-3 bg-gray-900 m-2 rounded-xl p-3"
                  >
                    <div className="bg-gray-300 p-4 rounded-lg">
                      <span className="text-secondary">{details.icon}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h1 className="text-white text-xl font-bold">
                        {details.title}
                      </h1>
                      <p className="text-gray-300 text-md ">{details.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex xl:justify-start xl:mx-0 lg:mx-auto md:mx-auto mx-auto lg:justify-start md:justify-start justify-center xl:gap-10 gap-5 items-center py-4 xl:px-5 px-3">
                {socials.map((social, s) => (
                  <div key={s} className="">
                    <a href={social.link}>
                      <div className="text-secondary xl:text-xl bg-gray-300 xl:p-3 p-2 rounded-xl">
                        <span>{social.icon}</span>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
