import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import { PresentationModel } from "@/models/models";
import { dateToHourAndMinuteString } from "@/utils/dateHelper";
import slugify from "@/utils/slugify";

import uk from "../../../public/img/uk.svg";
import { Tile } from "../tiles/tile";
import { YoutubeVideo } from "../youtube-video";

type PresentationProps = {
  presentation: PresentationModel;
  isFrontPage?: boolean | undefined;
};
export default function Presentation({
  presentation,
  isFrontPage,
}: PresentationProps) {
  const { title, description, presenter, imageUrls } = presentation;
  let time = "";
  if (presentation.startTime && presentation.endTime) {
    time = ` | ${presentation.startTime} - ${presentation.endTime}`;
  }
  return (
    <Tile className={clsx(isFrontPage && "sm:col-span-6")}>
      <Tile.Body>
        <div className="w-full">
          {!isFrontPage && (
            <h3 className="mb-5 w-fit hover:text-brand">
              <Link href={`/presentations`}>
                <div className="flex items-center">
                  <FaArrowLeft />
                  <p className="ml-1">Vissza az előadásokhoz </p>
                </div>
              </Link>
            </h3>
          )}
          {!isFrontPage && (
            <div>
              <h1 className="mb-2 hyphens-auto sm:hyphens-none">{title}</h1>
              <p className="mb-8 text-[25px] font-bold block md:hidden text-[--background]">{`${presentation.room}${time}`}</p>
            </div>
          )}
          <div className="flex flex-col md:flex-row gap-8">
            {!isFrontPage && (
              <div>
                <p className="mb-8 text-[25px] font-bold hidden md:block text-[--background]">{`${presentation.room}${time}`}</p>
                <p className="text-[--background] text-base sm:text-[20px] whitespace-pre-line">
                  {description}
                </p>
              </div>
            )}
            {isFrontPage && (
              <div>
                <p className="mb-2 text-3xl sm:text-[40px] font-bold leading-10">
                  {title}
                </p>
                <p className="mb-8 text-[22px] font-bold text-[--background]">{`${presentation.room}${time}`}</p>
                <p className="text-stone-200 text-base sm:text-[20px] whitespace-pre-line">
                  {description}
                </p>
                <div className="flex flex-col sm:flex-row">
                  {imageUrls?.map((image: string) => {
                    return (
                      <img
                        src={image}
                        key={image}
                        alt="presentation images"
                        className="p-2 max-w-full max-h-[75px] object-contain mt-5"
                      />
                    );
                  })}
                </div>
              </div>
            )}
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
                  isFrontPage
                    ? "w-72 h-72 sm:w-96 sm:h-96"
                    : "w-[350px] h-[350px] sm:w-[408px] sm:h-[408px]"
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
              {presentation.language === "en" && (
                <div className="flex mt-2 gap-2">
                  <Image
                    src={uk}
                    alt="Egyesült Királyság zászlója"
                    width={50}
                    height={25}
                    className="rounded-xl"
                  />
                  <p className="text-lg">Az előadás angol nyelvű.</p>
                </div>
              )}
            </div>
          </div>
          <div className="sm:w-full md:w-6/7 lg:w-5/6 mx-auto mt-8">
            {presentation.videoUrl && !isFrontPage && (
              <YoutubeVideo
                title={presentation.title}
                url={presentation.videoUrl}
              />
            )}
          </div>
        </div>
        {isFrontPage && (
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-center pt-6 justify-center">
            <Link
              href={`/presentations/${slugify(presentation.title)}`}
              className="inline-flex items-center font-semibold text-xl text-[--foreground] brand-link"
            >
              Részletek
              <svg
                className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
            <Link
              href={"/presentations"}
              className="inline-flex items-center font-semibold text-xl text-[--foreground] brand-link"
            >
              Összes előadás
              <svg
                className=" w-2.5 h-2.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
          </div>
        )}
      </Tile.Body>
    </Tile>
  );
}
