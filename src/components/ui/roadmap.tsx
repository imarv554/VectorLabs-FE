"use client";
import { Timeline } from "@/widgets/roadmapWidget";
import {
  Airdrop,
  Build,
  Community,
  Deploy,
  Development,
  Employ,
  Fundraising,
  Idea,
  Licence,
  Listing,
  Market,
  Prototype,
  Register,
  Team,
  Trade,
  Users,
} from "../../../public/img";

export function Roadmap() {
  const data = [
    {
      title: "Q4 2024",
      content: (
        <div>
          <p className="text-gray-800 dark:text-gray-200 xl:text-2xl lg:text-lg md:text-lg text-md font-normal mb-8">
            From Ideation to Prototyping
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Ideation
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Team
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Development
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Prototype
            </div>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 xl:z-0 lg:z-0 md:z-0 z-10 xl:gap-y-12 lg:gap-2 md:gap-2 gap-2">
            <img
              src={Idea.src}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
            <img
              src={Team.src}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px]  w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Development.src}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Prototype.src}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Q2 - Q3 2025",
      content: (
        <div>
          <p className="text-gray-800 dark:text-gray-200 xl:text-2xl lg:text-lg md:text-lg text-md font-normal mb-8">
            Growth To Launch Phase
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Aidrop
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Community
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Fundraising
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Listing
            </div>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 xl:z-0 lg:z-0 md:z-0 z-10 xl:gap-y-12 lg:gap-2 md:gap-2 gap-2">
            <img
              src={Airdrop.src}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Community.src}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Fundraising.src}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Listing.src}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Q3 2025",
      content: (
        <div>
          <p className="text-gray-800 dark:text-gray-200 xl:text-2xl lg:text-lg md:text-lg text-md font-normal mb-4">
            Operations and Development Milestone
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Registration
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Licence
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Employ More Hands
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Build
            </div>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 xl:z-0 lg:z-0 md:z-0 z-10 xl:gap-y-12 lg:gap-2 md:gap-2 gap-2">
            <img
              src={Register.src}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Licence.src}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Employ.src}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Build.src}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Q4 2025 - Q2 2026",
      content: (
        <div>
          <p className="text-gray-800 dark:text-gray-200 xl:text-2xl lg:text-lg md:text-lg text-md font-normal mb-4">
            Launch and Market Expansion
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Deployment
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Trade & Liquidity
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Market
            </div>
            <div className="flex gap-2 items-center text-gray-700 dark:text-gray-300 text-xs md:text-sm">
              ⚪ Users
            </div>
          </div>
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 xl:z-0 lg:z-0 md:z-0 z-10 xl:gap-y-12 lg:gap-2 md:gap-2 gap-2">
            <img
              src={Deploy.src}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Trade.src}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Market.src}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={Users.src}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-center object-cover xl:h-[500px] xl:w-[500px] w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
