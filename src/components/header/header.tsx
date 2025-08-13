"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import homeData from "@/data/home.data";
import Image from "next/image";

export default function Header() {
  const { header } = homeData.homepage;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [_hasScrolled, setHasScrolled] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleDisclosureClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      setHasScrolled(scrollPosition > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="xl:px-20 lg:px-0">
      <nav className="mx-auto flex max-w-full items-center justify-between xl:py-6 lg:py-6 md:py-6 py-3 px-2 md:px-5 lg:px-8 bg-white rounded-full">
        <div className="flex">
          <a
            href="/"
            className="xl:inline-flex lg:inline-flex md:inline-flex hidden items-center"
          >
            <img
              src={header[0].icon?.src}
              alt={header[0].name}
              className="lg:w-32 lg:h-auto w-[80px]"
            />
          </a>
          <a href="/" className="inline-flex items-center">
            <Image
              height={30}
              width={40}
              src={header[1].icon?.src as string}
              alt={header[1].name as string}
              className="xl:hidden lg:hidden md:hidden w-[40px] h-[30px]"
            />
          </a>
        </div>
        <div className="flex xl:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
          >
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden md:hidden lg:hidden xl:flex items-center lg:gap-x-8">
          {/* Solutions */}
          <PopoverGroup className="hidden lg:flex md:flex items-center lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-black focus:outline-none capitalize">
                {header[2].menu}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-black"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {header?.[7]?.subHeader?.[0]?.solutions?.map((soln, i) => (
                    <div key={i} className="flex justify-between gap-5">
                      {/* services */}
                      <div className="flex flex-col gap-1">
                        {soln?.services?.map((service, s) => (
                          <div key={s} className="capitalize">
                            {s === 0 && !service.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase px-1">
                                {service.title}
                              </h1>
                            )}

                            {s !== 0 || service.link ? (
                              <a href={service.link}>
                                <div className="hover:bg-gray-50 hover:border hover:border-gray-300 py-1 px-1">
                                  {s !== 0 && (
                                    <h1 className="">
                                      <span className="text-md font-bold">
                                        {service.title}
                                      </span>
                                      {/* <span className='text-gray-800 mx-1'>[{service.shortName}]</span> */}
                                    </h1>
                                  )}
                                  {service.subText && (
                                    <p className="text-sm">{service.subText}</p>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>

                      {/* regions */}
                      <div>
                        {soln?.regions?.map((region, r) => (
                          <div key={r} className="capitalize">
                            {r === 0 && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase">
                                {region.title}
                              </h1>
                            )}

                            {r !== 0 || (
                              <a href="#">
                                <div className="border-700 p-2 mb-2">
                                  {r !== 0 && (
                                    <h1>
                                      <span className="text-md font-bold text-gray-500">
                                        {region.title}
                                      </span>
                                      <span className="text-gray-500 mx-1 bg-gray-50 uppercase text-[10px] border border-gray-200 p-1 ">
                                        {region.text}
                                      </span>
                                    </h1>
                                  )}
                                  {region.subText && (
                                    <p className="text-sm text-gray-500">
                                      {region.subText}
                                    </p>
                                  )}
                                </div>
                              </a>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* buttons */}
                      <div>
                        {soln?.buttons?.map((button, b) => (
                          <div key={b} className="capitalize">
                            {b === 0 && !button.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase">
                                {button.title}
                              </h1>
                            )}

                            {b !== 0 || button.link ? (
                              <a href={button.link}>
                                <div className="bg-secondary bg-opacity-10 border border-secondary p-3 mb-2 capitalize rounded-md hover:bg-secondary hover:text-white">
                                  {b !== 0 && (
                                    <h1 className="text-md font-bold">
                                      {button.title}
                                    </h1>
                                  )}
                                  {button.subText && (
                                    <div className="flex items-center gap-1">
                                      <span className="text-sm capitalize">
                                        {button.subText}
                                      </span>
                                      <span>{button.icon}</span>
                                    </div>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          {/* About */}
          <PopoverGroup className="hidden lg:flex md:flex items-center lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-black focus:outline-none capitalize">
                {header[3].menu}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-black"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {header?.[7]?.subHeader?.[0]?.about?.map((abt, i) => (
                    <div key={i} className="flex justify-between gap-5">
                      {/* about */}
                      <div className="flex flex-col gap-1">
                        {abt?.aboutUS?.map((about, a) => (
                          <div key={a} className="capitalize">
                            {a === 0 && !about.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase px-1">
                                {about.title}
                              </h1>
                            )}

                            {a !== 0 || about.link ? (
                              <a href={about.link}>
                                <div className="hover:bg-gray-50 hover:border hover:border-gray-300 py-1 px-1">
                                  {a !== 0 && (
                                    <h1 className="">
                                      <span className="text-md font-bold">
                                        {about.title}
                                      </span>
                                      {/* <span className='text-gray-800 mx-1'>[{about.shortName}]</span> */}
                                    </h1>
                                  )}
                                  {about.subText && (
                                    <p className="text-sm">{about.subText}</p>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>

                      {/* resources */}
                      <div>
                        {abt?.resources?.map((resource, r) => (
                          <div
                            key={r}
                            className={`capitalize ${r === abt.resources.length - 1 ? "bg-gray-50 text-gray-500 border border-gray-300" : ""}`}
                          >
                            {/* For the first item without link */}
                            {r === 0 && !resource.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase">
                                {resource.title}
                              </h1>
                            )}

                            {/* Conditional rendering for resources with link */}
                            {r !== 0 || resource.link ? (
                              <a href={resource.link}>
                                <div
                                  className={`py-1 px-1 mb-2 ${r === abt.resources.length - 1 ? "" : "hover:bg-gray-50 hover:border hover:border-gray-300"}`}
                                >
                                  {r !== 0 && (
                                    <h1>
                                      <span
                                        className={`${
                                          r === abt.resources.length - 1
                                            ? "text-gray-500"
                                            : "text-md font-bold text-black"
                                        }`}
                                      >
                                        {resource.title}
                                      </span>
                                      <span
                                        className={`mx-1 text-[10px] p-1 border ${
                                          r === abt.resources.length - 1
                                            ? "bg-gray-50 text-gray-500 border-gray-300 uppercase"
                                            : "bg-none text-black border-none uppercase"
                                        }`}
                                      >
                                        {resource.text}
                                      </span>
                                    </h1>
                                  )}
                                  {resource.subText && (
                                    <p
                                      className={`${
                                        r === abt.resources.length - 1
                                          ? "text-gray-500"
                                          : "text-black capitalize"
                                      }`}
                                    >
                                      {resource.subText}
                                    </p>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>

                      {/* buttons */}
                      <div>
                        {abt?.button?.map((btn, b) => (
                          <div key={b} className="capitalize">
                            {b === 0 && !btn.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase">
                                {btn.title}
                              </h1>
                            )}

                            {b !== 0 || btn.link ? (
                              <a href={btn.link}>
                                <div className="bg-secondary bg-opacity-10 border border-secondary p-3 mb-2 capitalize rounded-md hover:bg-secondary hover:text-white">
                                  {b !== 0 && (
                                    <h1 className="text-md font-bold">
                                      {btn.title}
                                    </h1>
                                  )}
                                  {btn.subText && (
                                    <div className="flex items-center gap-1">
                                      <span className="text-sm capitalize">
                                        {btn.subText}
                                      </span>
                                      <span>{btn.icon}</span>
                                    </div>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          {/* VL Labs */}
          <PopoverGroup className="hidden lg:flex md:flex items-center lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-black focus:outline-none capitalize">
                {header[4].menu}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-black"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {header?.[7]?.subHeader?.[0]?.lab?.map((lab, l) => (
                    <div key={l} className="flex justify-between gap-5">
                      {/* vl labs */}
                      <div>
                        {lab?.vlTools?.map((vtools, v) => (
                          <div
                            key={v}
                            className={`capitalize ${v === lab.vlTools.length - 2 && 3 ? "bg-gray-50 text-gray-500" : ""}`}
                          >
                            {/* For the first item without link */}
                            {v === 0 && !vtools.link && (
                              <h1 className="text-lg font-bold text-gray-900 uppercase">
                                {vtools.title}
                              </h1>
                            )}

                            {/* Conditional rendering for vlTools with link */}
                            {v !== 0 || vtools.link ? (
                              <a href={vtools.link}>
                                <div
                                  className={`py-1 px-1 mb-2 ${
                                    v === 1
                                      ? "bg-gray-50 border border-gray-300 hover:bg-gray-300"
                                      : ""
                                  }`}
                                >
                                  {v !== 0 && (
                                    <h1>
                                      <span
                                        className={`${
                                          v === 1
                                            ? "text-black font-extrabold"
                                            : "text-md font-bold text-gray-500"
                                        }`}
                                      >
                                        {vtools.title}
                                      </span>
                                    </h1>
                                  )}
                                  {vtools.subText && (
                                    <p
                                      className={`${
                                        v === 1
                                          ? "text-black"
                                          : "text-gray-500 capitalize"
                                      }`}
                                    >
                                      {vtools.subText}
                                    </p>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>

                      {/* regions */}
                      <div>
                        {lab?.bSoln?.map((bsoln, bs) => (
                          <div key={bs} className="capitalize">
                            {bs === 0 && !bsoln.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase">
                                {bsoln.title}
                              </h1>
                            )}

                            {bs !== 0 || bsoln.link ? (
                              <a href={bsoln.link}>
                                <div className="bg-gray-500 bg-opacity-10 text-gray-400 p-3 mb-2 capitalize rounded-md">
                                  {bs !== 0 && (
                                    <h1>
                                      <span className="text-md font-bold">
                                        {bsoln.title}
                                      </span>
                                    </h1>
                                  )}
                                  {bsoln.subText && (
                                    <p className="text-sm">{bsoln.subText}</p>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>

                      {/* buttons */}
                      <div>
                        {lab?.marketGrowth?.map((mktg, m) => (
                          <div key={m} className="capitalize">
                            {m === 0 && !mktg.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase">
                                {mktg.title}
                              </h1>
                            )}

                            {m !== 0 || mktg.link ? (
                              <a href={mktg.link}>
                                <div className="bg-gray-500 bg-opacity-10 text-gray-400 p-3 mb-2 capitalize rounded-md">
                                  {m !== 0 && (
                                    <h1 className="text-md font-bold">
                                      {mktg.title}
                                    </h1>
                                  )}
                                  {mktg.subText && (
                                    <div className="flex items-center gap-1">
                                      <span className="text-sm capitalize">
                                        {mktg.subText}
                                      </span>
                                      <span></span>
                                    </div>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>

          {/* Token */}
          <PopoverGroup className="hidden lg:flex md:flex items-center lg:gap-x-8">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-bold leading-6 text-black focus:outline-none capitalize">
                {header[5].menu}
                <ChevronDownIcon
                  aria-hidden="true"
                  className="h-5 w-5 flex-none text-black"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute -left-28 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="p-4">
                  {header?.[7]?.subHeader?.[0]?.token?.map((ovw, o) => (
                    <div key={o} className="flex justify-between gap-5">
                      {/* overview */}
                      <div className="flex flex-col gap-1">
                        {ovw?.overview?.map((overview, ov) => (
                          <div key={ov} className="capitalize">
                            {ov === 0 && !overview.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase px-1">
                                {overview.title}
                              </h1>
                            )}

                            {ov !== 0 || overview.link ? (
                              <a href={overview.link}>
                                <div className="hover:bg-gray-50 hover:border hover:border-gray-300 py-1 px-1">
                                  {ov !== 0 && (
                                    <h1 className="">
                                      <span className="text-md font-bold">
                                        {overview.title}
                                      </span>
                                      {/* <span className='text-gray-800 mx-1'>[{overview.shortName}]</span> */}
                                    </h1>
                                  )}
                                  {overview.subText && (
                                    <p className="text-sm">
                                      {overview.subText}
                                    </p>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>

                      {/* economics */}
                      <div>
                        {ovw?.economics?.map((econs, e) => (
                          <div key={e}>
                            {/* Ensure the first item (e === 0) always renders */}
                            {e === 0 && !econs.link ? (
                              <h1 className="text-lg font-bold text-gray-500 uppercase px-1">
                                {econs.title}
                              </h1>
                            ) : (
                              e !== 0 && (
                                <a href={econs.link}>
                                  <div
                                    className={`py-1 px-1 mb-2 ${e === ovw.economics.length - 1 ? "" : "hover:bg-gray-50 hover:border hover:border-gray-300"}`}
                                  >
                                    <h1>
                                      <span
                                        className={`${e === ovw.economics.length - 1 ? "text-gray-500" : "text-md font-bold text-black"}`}
                                      >
                                        {econs.title}
                                      </span>
                                      <span
                                        className={`mx-1 text-[10px] p-1 border ${
                                          e === ovw.economics.length - 1
                                            ? "bg-gray-50 text-gray-500 border-gray-300 uppercase"
                                            : "bg-none text-black border-none uppercase"
                                        }`}
                                      >
                                        {econs.text}
                                      </span>
                                    </h1>
                                    {econs.subText && (
                                      <p
                                        className={`${e === ovw.economics.length - 1 ? "text-gray-500" : "text-black capitalize"}`}
                                      >
                                        {econs.subText}
                                      </p>
                                    )}
                                  </div>
                                </a>
                              )
                            )}
                          </div>
                        ))}
                      </div>

                      {/* participation */}
                      <div>
                        {ovw?.participation?.map((perc, p) => (
                          <div key={p} className="capitalize">
                            {p === 0 && !perc.link && (
                              <h1 className="text-lg font-bold text-gray-500 uppercase">
                                {perc.title}
                              </h1>
                            )}

                            {p !== 0 || perc.link ? (
                              <a href={perc.link}>
                                <div className="bg-secondary bg-opacity-10 border border-secondary p-3 mb-2 capitalize rounded-md hover:bg-secondary hover:text-white">
                                  {p !== 0 && (
                                    <h1 className="text-md font-bold">
                                      {perc.title}
                                    </h1>
                                  )}
                                  {perc.name && (
                                    <div className="flex items-center gap-1">
                                      <span>{perc.icon}</span>
                                      <span className="text-sm capitalize">
                                        {perc.name}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </a>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
        </PopoverGroup>
        <a
          href={header[6].link}
          className="hidden xl:flex items-center justify-center h-12 px-8 font-bold text-lg tracking-wide text-white transition duration-200 shadow-md bg-secondary hover:opacity-[.9] focus:shadow-outline focus:outline-none rounded-full capitalize"
          aria-label="Contact Us"
        >
          {header[6].dashMenu}
        </a>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="xl:hidden overflow-x-hidden"
      >
        <div className="fixed inset-0" />
        <DialogPanel className="fixed inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-white px-2 py-6 lg:max-w-[500px] lg:px-5 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="inline-flex items-center">
              <img
                src={header[0].icon?.src}
                alt={header[0].name}
                className="w-[100px]"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-black"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="-my-6 divide-y divide-gray-500/10 px-1">
            <div className="space-y-2 py-6">
              <div className="space-y-2 py-6 lg:px-2">
                {/* Solutions */}
                <div className="-mx-3">
                  <div
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-black cursor-pointer capitalize ${openIndex === 0 ? "no-underline" : "underline"}`}
                    onClick={() => handleDisclosureClick(0)}
                  >
                    {header[2].menu}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 flex-none transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === 0 && (
                    <div className="mt-2 space-y-1 lg:px-3 md:px-3 px-3 xl:px-0">
                      {header?.[7]?.subHeader?.[0]?.solutions?.map(
                        (soln, i) => (
                          <div
                            key={i}
                            className="flex xl:flex-row flex-col justify-between gap-5 lg:px-0 px-2"
                          >
                            {/* services */}
                            <div className="flex flex-col gap-1">
                              {soln?.services?.map((service, s) => (
                                <div key={s} className="capitalize">
                                  {s === 0 && !service.link && (
                                    <h1 className="text-lg font-bold text-gray-500 uppercase px-1">
                                      {service.title}
                                    </h1>
                                  )}

                                  {s !== 0 || service.link ? (
                                    <a href={service.link}>
                                      <div className="hover:bg-gray-50 hover:border hover:border-gray-300 py-1 px-1">
                                        {s !== 0 && (
                                          <h1 className="">
                                            <span className="text-md font-bold">
                                              {service.title}
                                            </span>
                                            {/* <span className='text-gray-800 mx-1'>[{service.shortName}]</span> */}
                                          </h1>
                                        )}
                                        {service.subText && (
                                          <p className="text-sm">
                                            {service.subText}
                                          </p>
                                        )}
                                      </div>
                                    </a>
                                  ) : null}
                                </div>
                              ))}
                            </div>

                            {/* regions */}
                            <div>
                              {soln?.regions?.map((region, r) => (
                                <div key={r} className="capitalize">
                                  {r === 0 && (
                                    <h1 className="text-lg font-bold text-gray-500 uppercase">
                                      {region.title}
                                    </h1>
                                  )}

                                  {r !== 0 && (
                                    <a href="#">
                                      <div className="border-700 p-2 mb-2">
                                        {r !== 0 && (
                                          <h1>
                                            <span className="text-md font-bold text-gray-500">
                                              {region.title}
                                            </span>
                                            <span className="text-gray-500 mx-1 bg-gray-50 uppercase text-[10px] border border-gray-200 p-1 ">
                                              {region.text}
                                            </span>
                                          </h1>
                                        )}
                                        {region.subText && (
                                          <p className="text-sm text-gray-500">
                                            {region.subText}
                                          </p>
                                        )}
                                      </div>
                                    </a>
                                  )}
                                </div>
                              ))}
                            </div>

                            {/* buttons */}
                            <div>
                              {soln?.buttons?.map((button, b) => (
                                <div key={b} className="capitalize">
                                  {b === 0 && !button.link && (
                                    <h1 className="text-lg font-bold text-gray-500 uppercase">
                                      {button.title}
                                    </h1>
                                  )}

                                  {b !== 0 || button.link ? (
                                    <a href={button.link}>
                                      <div className="bg-secondary bg-opacity-10 border border-secondary p-3 mb-2 capitalize rounded-md hover:bg-secondary hover:text-white">
                                        {b !== 0 && (
                                          <h1 className="text-md font-bold">
                                            {button.title}
                                          </h1>
                                        )}
                                        {button.subText && (
                                          <div className="flex items-center gap-1">
                                            <span className="text-sm capitalize">
                                              {button.subText}
                                            </span>
                                            <span>{button.icon}</span>
                                          </div>
                                        )}
                                      </div>
                                    </a>
                                  ) : null}
                                </div>
                              ))}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  )}
                </div>

                {/* About */}
                <div className="-mx-3">
                  <div
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-black cursor-pointer capitalize ${openIndex === 1 ? "no-underline" : "underline"}`}
                    onClick={() => handleDisclosureClick(1)}
                  >
                    {header[3].menu}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 flex-none transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === 1 && (
                    <div className="mt-2 space-y-1 lg:px-3 md:px-3 px-3 xl:px-0">
                      {header?.[7]?.subHeader?.[0]?.about?.map((abt, i) => (
                        <div
                          key={i}
                          className="flex xl:flex-row flex-col justify-between gap-5 lg:px-0 px-2"
                        >
                          {/* about */}
                          <div className="flex flex-col gap-1">
                            {abt?.aboutUS?.map((about, a) => (
                              <div key={a} className="capitalize">
                                {a === 0 && !about.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase px-1">
                                    {about.title}
                                  </h1>
                                )}

                                {a !== 0 || about.link ? (
                                  <a href={about.link}>
                                    <div className="hover:bg-gray-50 hover:border hover:border-gray-300 py-1 px-1">
                                      {a !== 0 && (
                                        <h1 className="">
                                          <span className="text-md font-bold">
                                            {about.title}
                                          </span>
                                          {/* <span className='text-gray-800 mx-1'>[{about.shortName}]</span> */}
                                        </h1>
                                      )}
                                      {about.subText && (
                                        <p className="text-sm">
                                          {about.subText}
                                        </p>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>

                          {/* resources */}
                          <div>
                            {abt?.resources?.map((resource, r) => (
                              <div
                                key={r}
                                className={`capitalize ${r === abt.resources.length - 1 ? "bg-gray-50 text-gray-500 border border-gray-300" : ""}`}
                              >
                                {/* For the first item without link */}
                                {r === 0 && !resource.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase">
                                    {resource.title}
                                  </h1>
                                )}

                                {/* Conditional rendering for resources with link */}
                                {r !== 0 || resource.link ? (
                                  <a href={resource.link}>
                                    <div
                                      className={`py-1 px-1 mb-2 ${r === abt.resources.length - 1 ? "" : "hover:bg-gray-50 hover:border hover:border-gray-300"}`}
                                    >
                                      {r !== 0 && (
                                        <h1>
                                          <span
                                            className={`${
                                              r === abt.resources.length - 1
                                                ? "text-gray-500"
                                                : "text-md font-bold text-black"
                                            }`}
                                          >
                                            {resource.title}
                                          </span>
                                          <span
                                            className={`mx-1 text-[10px] p-1 border ${
                                              r === abt.resources.length - 1
                                                ? "bg-gray-50 text-gray-500 border-gray-300 uppercase"
                                                : "bg-none text-black border-none uppercase"
                                            }`}
                                          >
                                            {resource.text}
                                          </span>
                                        </h1>
                                      )}
                                      {resource.subText && (
                                        <p
                                          className={`${
                                            r === abt.resources.length - 1
                                              ? "text-gray-500"
                                              : "text-black capitalize"
                                          }`}
                                        >
                                          {resource.subText}
                                        </p>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>

                          {/* buttons */}
                          <div>
                            {abt?.button?.map((btn, b) => (
                              <div key={b} className="capitalize">
                                {b === 0 && !btn.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase">
                                    {btn.title}
                                  </h1>
                                )}

                                {b !== 0 || btn.link ? (
                                  <a href={btn.link}>
                                    <div className="bg-secondary bg-opacity-10 border border-secondary p-3 mb-2 capitalize rounded-md hover:bg-secondary hover:text-white">
                                      {b !== 0 && (
                                        <h1 className="text-md font-bold">
                                          {btn.title}
                                        </h1>
                                      )}
                                      {btn.subText && (
                                        <div className="flex items-center gap-1">
                                          <span className="text-sm capitalize">
                                            {btn.subText}
                                          </span>
                                          <span>{btn.icon}</span>
                                        </div>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* VL Labs */}
                <div className="-mx-3">
                  <div
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-black cursor-pointer capitalize ${openIndex === 2 ? "no-underline" : "underline"}`}
                    onClick={() => handleDisclosureClick(2)}
                  >
                    {header[4].menu}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 flex-none transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === 2 && (
                    <div className="mt-2 space-y-1 lg:px-3 md:px-3 px-3 xl:px-0">
                      {header?.[7]?.subHeader?.[0]?.lab?.map((lab, l) => (
                        <div
                          key={l}
                          className="flex xl:flex-row flex-col lg:px-0 px-2 justify-between gap-5"
                        >
                          {/* services */}
                          <div className="flex flex-col gap-1">
                            {lab?.vlTools?.map((vtools, v) => (
                              <div key={v} className="capitalize">
                                {v === 0 && !vtools.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase px-1">
                                    {vtools.title}
                                  </h1>
                                )}

                                {v !== 0 || vtools.link ? (
                                  <a href={vtools.link}>
                                    <div className="bg-gray-500 bg-opacity-10 border border-gray-500 p-3 mb-2 capitalize rounded-md hover:bg-gray-900 hover:text-white">
                                      {v !== 0 && (
                                        <h1 className="">
                                          <span className="text-md font-bold">
                                            {vtools.title}
                                          </span>
                                          {/* <span className='text-gray-800 mx-1'>[{vtools.shortName}]</span> */}
                                        </h1>
                                      )}
                                      {vtools.subText && (
                                        <p className="text-sm">
                                          {vtools.subText}
                                        </p>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>

                          {/* regions */}
                          <div>
                            {lab?.bSoln?.map((bsoln, bs) => (
                              <div key={bs} className="capitalize">
                                {bs === 0 && !bsoln.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase">
                                    {bsoln.title}
                                  </h1>
                                )}

                                {bs !== 0 || bsoln.link ? (
                                  <a href={bsoln.link}>
                                    <div className="bg-gray-500 bg-opacity-10 border border-gray-500 p-3 mb-2 capitalize rounded-md hover:bg-gray-900 hover:text-white">
                                      {bs !== 0 && (
                                        <h1>
                                          <span className="text-md font-bold">
                                            {bsoln.title}
                                          </span>
                                        </h1>
                                      )}
                                      {bsoln.subText && (
                                        <p className="text-sm">
                                          {bsoln.subText}
                                        </p>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>

                          {/* buttons */}
                          <div>
                            {lab?.marketGrowth?.map((mktg, m) => (
                              <div key={m} className="capitalize">
                                {m === 0 && !mktg.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase">
                                    {mktg.title}
                                  </h1>
                                )}

                                {m !== 0 || mktg.link ? (
                                  <a href={mktg.link}>
                                    <div className="bg-gray-500 bg-opacity-10 border border-gray-500 p-3 mb-2 capitalize rounded-md hover:bg-gray-900 hover:text-white">
                                      {m !== 0 && (
                                        <h1 className="text-md font-bold">
                                          {mktg.title}
                                        </h1>
                                      )}
                                      {mktg.subText && (
                                        <div className="flex items-center gap-1">
                                          <span className="text-sm capitalize">
                                            {mktg.subText}
                                          </span>
                                          <span></span>
                                        </div>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Token */}
                <div className="-mx-3">
                  <div
                    className={`group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-bold leading-7 text-black cursor-pointer capitalize ${openIndex === 3 ? "no-underline" : "underline"}`}
                    onClick={() => handleDisclosureClick(3)}
                  >
                    {header[5].menu}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`h-5 w-5 flex-none transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}
                    />
                  </div>
                  {openIndex === 3 && (
                    <div className="mt-2 space-y-1 lg:px-3 md:px-3 px-3 xl:px-0">
                      {header?.[7]?.subHeader?.[0]?.token?.map((ovw, o) => (
                        <div
                          key={o}
                          className="flex xl:flex-row flex-col lg:px-0 px-2 justify-between gap-5"
                        >
                          {/* overview */}
                          <div className="flex flex-col gap-1">
                            {ovw?.overview?.map((overview, ov) => (
                              <div key={ov} className="capitalize">
                                {ov === 0 && !overview.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase px-1">
                                    {overview.title}
                                  </h1>
                                )}

                                {ov !== 0 || overview.link ? (
                                  <a href={overview.link}>
                                    <div className="hover:bg-gray-50 hover:border hover:border-gray-300 py-1 px-1">
                                      {ov !== 0 && (
                                        <h1 className="">
                                          <span className="text-md font-bold">
                                            {overview.title}
                                          </span>
                                          {/* <span className='text-gray-800 mx-1'>[{overview.shortName}]</span> */}
                                        </h1>
                                      )}
                                      {overview.subText && (
                                        <p className="text-sm">
                                          {overview.subText}
                                        </p>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>

                          {/* economics */}
                          <div>
                            {ovw?.economics?.map((econs, e) => (
                              <div key={e} className="capitalize">
                                {e === 0 && !econs.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase">
                                    {econs.title}
                                  </h1>
                                )}

                                {e !== 0 || econs.link ? (
                                  <a href={econs.link}>
                                    <div className="border-700 p-2 mb-2 hover:bg-gray-50">
                                      {e !== 0 && (
                                        <h1>
                                          <span className="text-md font-bold text-black">
                                            {econs.title}
                                          </span>
                                        </h1>
                                      )}
                                      {econs.subText && (
                                        <p className="text-sm text-black">
                                          {econs.subText}
                                        </p>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>

                          {/* participation */}
                          <div>
                            {ovw?.participation?.map((perc, p) => (
                              <div key={p} className="capitalize">
                                {p === 0 && !perc.link && (
                                  <h1 className="text-lg font-bold text-gray-500 uppercase">
                                    {perc.title}
                                  </h1>
                                )}

                                {p !== 0 || perc.link ? (
                                  <a href={perc.link}>
                                    <div className="bg-secondary bg-opacity-10 border border-secondary p-3 mb-2 capitalize rounded-md hover:bg-secondary hover:text-white">
                                      {p !== 0 && (
                                        <h1 className="text-md font-bold">
                                          {perc.title}
                                        </h1>
                                      )}
                                      {perc.name && (
                                        <div className="flex justify-center items-center gap-1">
                                          <span>{perc.icon}</span>
                                          <span className="text-sm capitalize">
                                            {perc.name}
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </a>
                                ) : null}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Contact Button */}
                <div className="flex justify-center items-center">
                  <a
                    href={header[6].link}
                    className="bg-secondary text-white px-2 py-3 w-full capitalize rounded-lg text-center"
                  >
                    {header[6].dashMenu}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
