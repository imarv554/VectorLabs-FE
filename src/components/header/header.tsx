"use client";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import homeData from "@/data/home.data";
import Image from "next/image";

export default function Header() {
  const { header } = homeData.homepage;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [_hasScrolled, setHasScrolled] = useState(false);

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

  // Navigation items
  const navigationItems = [
    { label: header[2]?.menu, href: header[2]?.link },
    { label: header[3]?.menu, href: header[3]?.link },
    { label: header[4]?.menu, href: header[4]?.link },
    { label: header[5]?.menu, href: header[5]?.link },
    { label: header[6]?.menu, href: header[6]?.link },
  ].filter(item => item.label && item.href);

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

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center lg:gap-x-8">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-lg font-bold leading-6 text-black hover:text-gray-600 transition-colors duration-200 capitalize"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href={header[7]?.link || "/contact"}
          className="hidden xl:flex items-center justify-center h-12 px-8 font-bold text-lg tracking-wide text-white transition duration-200 shadow-md bg-secondary hover:opacity-[.9] focus:shadow-outline focus:outline-none rounded-full capitalize"
          aria-label="Contact Us"
        >
          {header[7]?.dashMenu || "Contact"}
        </a>
      </nav>

      {/* Mobile Menu */}
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
          
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-3 py-2 text-base font-bold leading-7 text-black hover:bg-gray-50 rounded-md capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={header[7]?.link || "/contact"}
                  className="block px-3 py-2 text-base font-bold leading-7 text-white bg-secondary rounded-md hover:opacity-90 capitalize text-center mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {header[7]?.dashMenu || "Contact"}
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}