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
      <div className="grid grid-cols-2 md:grid-cols-6 md:grid-rows-1 justify-center font-faculty-glyphic place-items-center h-full">
        <span className="col-span-1 md:col-span-2 grid grid-rows-4 gap-y-4">
          <span>
            <div className="text-5xl md:text-5xl">{String( Math.floor(duration / (60*60*24)) ).padStart(2, "0")}</div>
            <div className="text-xl md:text-2xl text-secondary">nap</div>
          </span>
          <span>
            <div className="text-5xl md:text-5xl">{String( Math.floor(duration / (60*60)) % 24 ).padStart(2, "0")}</div>
            <div className="text-xl md:text-2xl text-secondary">óra</div>
          </span>
          <span>
            <div className="text-5xl md:text-5xl">{String( Math.floor(duration / 60) % 60 ).padStart(2, "0")}</div>
            <div className="text-xl md:text-2xl text-secondary">perc</div>
          </span>
          <span>
            <div className="text-5xl md:text-5xl">{String(duration % 60).padStart(2, "0")}</div>
            <div className="text-xl md:text-2xl text-secondary">másodperc</div>
          </span>
        </span>
        <span className="col-span-1 pr-6 md:pr-0">
          <Vines className="fill-primary w-full" />
        </span>
        <span className="col-span-2 md:col-span-3"><FullWhite className="w-full" /></span>
      </div>
    </>
  );
}
