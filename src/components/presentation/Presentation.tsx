import clsx from "clsx";
import Link from "next/link";

import { PresentationModel } from "@/models/models";

import { SlArrowLeft } from "react-icons/sl";

type PresentationProps = {
  presentation: PresentationModel;
  isFrontPage?: boolean | undefined;
};
export default function Presentation({
  presentation,
  isFrontPage,
}: PresentationProps) {
  const { title, description, presenter } = presentation;
  const startTime = presentation.startTime.split(":").map(Number);
  const endTime = presentation.endTime.split(":").map(Number);

  return (
    <>
      {!isFrontPage && (
        <>
          <Link
            href="/presentations"
            className="flex items-center ml-2 hover:ml-1 gap-2 text-md transition-colors"
          >
            <div className="flex items-center gap-4 mb-4 md:mb-6 ml-4 md:ml-8 w-28 border border-gray-300 rounded-lg px-3 py-2 hover:bg-text hover:text-primary-700">
              <SlArrowLeft />
              Vissza
            </div>
          </Link>

          <div className="flex gap-2">
            <div>
              <h3 className="text-3xl md:text-5xl px-4 md:px-8"
                  style={presentation.room === "IB028"? {color: "var(--primary-base)"}:{color: "var(--accent-base)"}}>
                {presentation.room}
              </h3>
              <div className="py-4 md:py-8 px-4 md:pl-8 font-bold text-left w-full">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
                  <div className="flex flex-row md:flex-col flex-none mx-1 gap-2 md:gap-0">
                    <div className="flex items-start">
                      <span className="text-3xl md:text-5xl leading-none font-semibold">{startTime[0]}</span>
                      <span className="self-start ml-1 text-xl md:text-3xl leading-none">{startTime[1].toString().padStart(2, '0')}</span>
                      <span className="text-3xl md:text-5xl leading-none font-semibold ml-0.5 whitespace-pre">-</span>
                    </div>
                    <div className="flex items-start mt-0 md:mt-2">
                      <span className="text-3xl md:text-5xl leading-none font-semibold">{endTime[0]}</span>
                      <span className="self-start ml-1 text-xl md:text-3xl leading-none">{endTime[1].toString().padStart(2, '0')}</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <span className="block text-3xl md:text-5xl font-bold leading-tight md:leading-normal py-1 md:py-2">{title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-8 md:gap-4 w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-[8fr_5fr]">
            <div className="flex flex-col gap-4 order-2 md:order-1">
              {description}
            </div>
            <div
              className={clsx(
                "flex flex-col items-center flex-shrink-0 text-center md:max-w-sm",
                isFrontPage ? "order-none" : "order-first",
                "md:order-last"
              )}
            >
              <div
                className={clsx(
                  "object-cover aspect-square",
                  "w-[250px] h-[250px] lg:w-[320px] lg:h-[320px]"
                )}
              >
                <img
                  src={presenter.pictureUrl}
                  className="object-cover h-full w-full rounded-3xl"
                  alt="Presentation Image"
                />
              </div>
              <p className="block mt-4 text-[32px] leading-tight font-bold text-[--foreground]-900">
                {presenter.name}
              </p>
              <p className="block mt-0.5 text-[20px]  text-[--background]">
                {presenter.rank}
              </p>
              {presenter.company && presenter.company.logoUrl && (
                <div className="mt-2 bg-white rounded-xl max-w-[308px] max-h-[75px] w-full">
                  <img
                    src={presenter.company.logoUrl}
                    alt="Company logo"
                    className="p-2 max-w-full max-h-[75px] object-fit m-auto"
                  />
                </div>
              )}
            </div>
          </div>
         </>
       )}
     </>
   )
 }
