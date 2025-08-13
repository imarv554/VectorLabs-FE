"use client";
import homeData from "@/data/home.data";
import { CardEffect } from "../ui/cardEffect";

export default function Footer() {
  const { footersection } = homeData.homepage;

  return (
    <footer className="bg-white xl:p-20 py-20 lg:px-3 px-3 mt-20 rounded-lg z-10">
      {footersection?.[0]?.footer.map((foot, f) => (
        <div key={f}>
          {/* title */}
          <div className="flex flex-col justify-center items-center">
            {foot.title.map((title, t) => (
              <div
                key={t}
                className="flex flex-col gap-10 justify-center items-center"
              >
                <h1 className="text-black lg:text-5xl text-3xl font-bold capitalize text-center">
                  {title.title}
                </h1>
                <div className="w-40 h-1 bg-secondary rounded-lg"></div>
              </div>
            ))}
          </div>

          {/* section two */}
          <div>
            <CardEffect />
          </div>

          {/* section three */}
          <div className="w-full lg:px-10">
            {foot.sectionThree.map((sec, s) => (
              <div key={s}>
                <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 justify-between items-center mb-3">
                  <div>
                    {sec?.numb.map((num, n) => (
                      <p key={n} className="lg:text-2xl text-sm font-bold">
                        {num.numb}
                      </p>
                    ))}
                  </div>
                  <div className="flex gap-5 items-center">
                    {sec?.socials?.map((socials, s) => (
                      <div key={s} className="flex flex-col items-start">
                        <a
                          href={socials.link}
                          className="p-3 border border-gray-400 hover:p-4 rounded-lg lg:text-2xl text-sm transition-all duration-300 ease-in-out overflow-hidden"
                        >
                          {socials.icon}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <hr className="h-[1px] bg-black" />
                </div>

                <div className="mt-5">
                  {sec?.copy.map((copy, c) => (
                    <div
                      key={c}
                      className="flex lg:flex-row flex-col gap-2 justify-between items-center"
                    >
                      <div>
                        {copy?.title.map((title, t) => (
                          <div key={t}>
                            <h1>{title.copy}</h1>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center lg:gap-5 gap-5">
                        {copy?.buttons.map((btn, b) => (
                          <div key={b}>
                            <a
                              href={btn.link}
                              className="relative text-black hover:text-gray-800 lg:text-lg text-sm font-medium transition-all duration-300 group"
                            >
                              {btn.title}
                              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black scale-x-0 origin-center transition-transform duration-500 ease-in-out group-hover:scale-x-100"></span>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </footer>
  );
}
