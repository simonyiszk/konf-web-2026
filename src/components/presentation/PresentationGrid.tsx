"use client";

import {
  BreakWithDates,
  PresentationWithDates
} from "@/models/models";
import { dateToHourAndMinuteString } from "@/utils/dateHelper";
import slugify from "@/utils/slugify";
import clsx from "clsx";
import Link from "next/link";
import { CSSProperties, useRef, useState } from "react";

const TimespanUnit = 15 * 60 * 1000; // fifteen minutes
const TimespanUnitHeight = "minmax(5rem, auto)";

export function PresentationGrid({
  presentations,
  startDate,
  endDate,
}: {
  presentations: (PresentationWithDates | BreakWithDates)[];
  startDate: number;
  endDate: number;
}) {
  const fullTimespan = Math.abs(endDate - startDate);
  const allGridRows = Math.ceil(fullTimespan / TimespanUnit);
  const [selectedHall, setSelectedHall] = useState("IB028");

  const gridRef = useRef<HTMLUListElement | null>(null);
  return (
    <>
      <div className="max-md:hidden">
        <div className="sticky left-0 top-28 z-10 rounded-b-md mb-8">
          <div
            className="w-full"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 8rem 1fr",
              alignItems: "center",
            }}
          >
            <div className="py-2 px-6 text-5xl font-bold bg-primary text-primary-950 rounded-2xl" style={{ justifySelf: "center" }}>
              IB028
            </div>
            <div />
            <div className="py-2 px-6 text-5xl font-bold bg-accent text-accent-950 rounded-2xl" style={{ justifySelf: "center" }}>
              IB025
            </div>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar flex">
          <ul
            ref={gridRef}
            className="presentation-grid snap-x snap-proximity"
            style={{
              gridTemplateRows: `repeat(${allGridRows}, ${TimespanUnitHeight})`,
            }}
          >
            {presentations.map((presentation) => (
              <li
                key={presentation.slug}
                className={clsx(
                  "w-full px-1 pb-6"
                )}
                style={getPresentationCellStyles(startDate, presentation)}
              >
                {presentation.isBreak ? (
                  <div className="w-full h-full p-4 rounded-xl">
                    <PresentationTile presentation={presentation} />
                  </div>
                ) : (
                  <Link
                    href={`/presentations/${slugify(presentation.title)}`}
                    className="block w-full h-full p-4 rounded-xl transition-colors duration-300 hover:bg-text hover:text-background"
                  >
                    <PresentationTile presentation={presentation} />
                  </Link>
                )}
              </li>
            ))}
            {[...timeMarkerGenerator(presentations)].map((markerDate) => (
              <TimeMarker
                key={markerDate.toString()}
                markerDate={markerDate}
                startDate={startDate}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="md:hidden">
        <div className="  sticky left-0 top-28 z-10 flex-row flex justify-center rounded-b-md mb-8">
          <div className="border-2 border-primary-200 rounded-2xl flex p-2 relative">
            <div
              className={clsx(
                "absolute top-2 bottom-2 w-[calc(50%-0.5rem)] rounded-lg transition-all duration-300 ease-in-out",
                selectedHall === "IB028" ? "left-2 bg-primary" : "left-1/2 bg-accent"
              )}
            />
            <button
              className={clsx(
                "rounded-lg py-2 px-6 font-bold text-3xl transition-colors duration-300 z-10 w-1/2",
                selectedHall === "IB028" ? "text-primary-950" : "text-primary placeholder-opacity-50 hover:bg-white/5"
              )}
              onClick={() => setSelectedHall("IB028")}
            >
              IB028
            </button>
            <button
              className={clsx(
                "rounded-lg py-2 px-6 font-bold text-3xl transition-colors duration-300 z-10 w-1/2",
                selectedHall === "IB025" ? "text-accent-950" : "text-accent placeholder-opacity-50 hover:bg-white/5"
              )}
              onClick={() => setSelectedHall("IB025")}
            >
              IB025
            </button>
          </div>
        </div>

        <div className="overflow-x-auto no-scrollbar flex">
          <ul className="w-full flex flex-col gap-4">
            {presentations
              .filter((presentation) => presentation.room === selectedHall)
              .map((presentation) => (
                <li key={presentation.slug}>
                  {presentation.isBreak ? (
                    <div className="w-full h-full p-4 rounded-xl">
                      <PresentationTile presentation={presentation} />
                    </div>
                  ) : (
                    <Link
                      href={`/presentations/${slugify(presentation.title)}`}
                      className="block w-full h-full p-4 rounded-xl transition-colors duration-300 hover:bg-text hover:text-background"
                    >
                      <PresentationTile presentation={presentation} />
                    </Link>
                  )}
                </li>
              ))}
            {[...timeMarkerGenerator(presentations)].map((markerDate) => (
              <TimeMarker
                key={markerDate.toString()}
                markerDate={markerDate}
                startDate={startDate}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export function PresentationTile({
  presentation,
  preview = false,
}: {
  presentation: PresentationWithDates | BreakWithDates;
  preview?: boolean;
}) {
  const presenter = presentation.isBreak
    ? null
    : (presentation as PresentationWithDates).presenter;
  const description = presentation.isBreak
    ? null
    : (presentation as PresentationWithDates).description;

  const length = presentation.endDate.getTime() - presentation.startDate.getTime() ;

  // helper to compute room color using CSS variables
  const roomColorStyle: CSSProperties | undefined =
    presentation.room === "IB028"
      ? { color: "var(--primary-base)" }
      : presentation.room === "IB025"
      ? { color: "var(--accent-base)" }
      : undefined;

  return (
    <>
      <div className="w-full h-1 rounded-sm mb-1" style={{ backgroundColor: 'var(--secondary-base)' }} />
      <span className="pb-2 text-lg">
        {presentation.room !== "BOTH" &&
          !preview && (
            <span style={roomColorStyle}>{` ${presentation.room}  · `}</span>
          )}
        {dateToHourAndMinuteString(presentation.startDate)} - {dateToHourAndMinuteString(presentation.endDate)}
      </span>
      <div className="flex flex-col justify-center flex-1">
        <div
          className={clsx(
            "flex",
            presentation.isBreak && "justify-around"
          )}
        >
          <h2
            className={clsx(
              "text-xl lg:text-2xl font-medium",
              !presenter ? "text-center pb-4" : "pb-4 lg:pb-6"
            )}
          >
            {presentation.title}
          </h2>
          {presentation.room === "BOTH" && presentation.isBreak && (
            <h2
              aria-hidden={true}
              className={clsx(
                "text-lg lg:text-xl pb-4 lg:pb-6 font-medium",
                !presenter && "text-center"
              )}
            >
              {presentation.title}
            </h2>
          )}
        </div>
        {!!presenter && (
          <div className="flex gap-4">
            <img
              src={presenter.pictureUrl || "/img/avatar.webp"}
              className={clsx(
                "object-cover rounded-3xl w-16 h-16",
                !presenter.pictureUrl && "sepia-[.5] opacity-80"
              )}
              alt="Presentation Image"
            />
            <div>
              <h3 className="text-lg lg:text-xl font-medium">
                {presenter.name}
              </h3>
              <div className="text-xs lg:text-sm">{presenter.rank}</div>
              <div className="hidden lg:block text-xs pt-0.5">
                {presenter.company?.name}
              </div>
            </div>
          </div>
        )}
        {length >= 2 * TimeMarkerStepSize &&
          !preview && (
            <p className="mt-2 text-base whitespace-pre-line">
              {description?.split("\n")[0]}
            </p>
          )}
      </div>
    </>
  );
}

const TimeMarkerStepSize = 20 * 60 * 1000;

function TimeMarker({
  markerDate,
  startDate,
}: {
  markerDate: Date;
  startDate: number;
}) {
  const rowStart =
    getTimeRowPositionInGrid(markerDate.getTime(), startDate) + 1;
  const rowEnd = rowStart + Math.floor(TimeMarkerStepSize / TimespanUnit) - 1;
  const hours = markerDate.getHours().toString().padStart(2, "0");
  const minutes = markerDate.getMinutes().toString().padStart(2, "0");
  return (
    <li
      aria-hidden={true}
      className={clsx("snap-start hidden md:block")}
      style={{ gridRowStart: rowStart, gridRowEnd: rowEnd, gridColumnStart: 2, gridColumnEnd: 3, justifySelf: 'center' }}
    >
      <div className="flex flex-col items-center">
        <div className="w-24 h-1 rounded-sm mb-1" style={{ backgroundColor: 'var(--primary-700)' }} />
        <div className="py-2 px-4 font-bold text-center flex items-start justify-center">
          <span className="text-5xl leading-none font-semibold">{hours}</span>
          <span className="self-start ml-1 text-3xl leading-none">{minutes}</span>
        </div>
      </div>
    </li>
  );
}
function getUniqueDates(datesArray: Date[]): Date[] {
  const uniqueDates = new Set();

  return datesArray.filter((date) => {
    const dateString = date.toISOString(); // Convert date to string
    if (!uniqueDates.has(dateString)) {
      uniqueDates.add(dateString);
      return true;
    }
    return false;
  });
}

function timeMarkerGenerator(
  presentations: (PresentationWithDates | BreakWithDates)[]
): Date[] {
  const times = presentations.map((presentation) => presentation.startDate);
  return getUniqueDates(times);
}

function getTimeRowPositionInGrid(time: number, startDate: number) {
  return Math.floor((time - startDate) / TimespanUnit);
}

function getPresentationCellStyles(
  startDate: number,
  presentation: PresentationWithDates | BreakWithDates
): CSSProperties {
  const cellStart = getTimeRowPositionInGrid(
    presentation.startDate.getTime(),
    startDate
  );
  const cellEnd = getTimeRowPositionInGrid(
    presentation.endDate.getTime(),
    startDate
  );
  let columLocation: CSSProperties = { gridColumnStart: 1, gridColumnEnd: 4 };
  switch (presentation.room) {
    case "IB028":
      columLocation = { gridColumnStart: 1, gridColumnEnd: 2 };
      break;
    case "IB025":
      columLocation = { gridColumnStart: 3, gridColumnEnd: 4 };
      break;
  }
  return {
    ...columLocation,
    gridRowStart: cellStart + 1,
    gridRowEnd: cellEnd + 1,
  };
}
