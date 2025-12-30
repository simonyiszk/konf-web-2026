"use client";

import {differenceInSeconds} from "date-fns";
import { useEffect, useMemo, useState } from "react";
import {Vines} from "@/components/svgs/Vines";
import {FullWhite} from "@/components/svgs/FullWhite";

export default function CountdownTileImplementation() {
  const target = useMemo(() => new Date(2026, 2, 24, 10, 0), []);
  const [duration, setDuration] = useState({} as number);

  useEffect(() => {
    const update = () => {
      if (target.getTime() > Date.now())
        setDuration(differenceInSeconds(target, new Date()));
      else setDuration(0);
    };
    const interval = setInterval(update, 1000);
    update();
    return () => clearInterval(interval);
  }, [target]);
  return (
    <>
      <div className="grid grid-cols-6 justify-center font-faculty-glyphic place-items-center">
        <span className="col-span-2 grid grid-rows-4">
          <span>
            <div className="text-3xl md:text-5xl">{String( Math.floor(duration / (60*60*24)) ).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm">nap</div>
          </span>
          <span>
            <div className="text-3xl md:text-5xl">{String( Math.floor(duration / (60*60)) % 24 ).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm">óra</div>
          </span>
          <span>
            <div className="text-3xl md:text-5xl">{String( Math.floor(duration / 60) % 60 ).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm">perc</div>
          </span>
          <span>
            <div className="text-3xl md:text-5xl">{String(duration % 60).padStart(2, "0")}</div>
            <div className="text-xs md:text-sm">másodperc</div>
          </span>
        </span>
        <span className="col-span-1">
          <Vines className="fill-primary w-full" />
        </span>
        <span className="col-span-3"><FullWhite className="w-full" /></span>
      </div>
    </>
  );
}
