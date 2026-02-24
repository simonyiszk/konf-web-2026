"use client";

import {differenceInSeconds}from "date-fns";
import { useEffect, useMemo, useState } from "react";
import {SlArrowRight} from "react-icons/sl";
import Link from "next/link";

export default function CountdownTileImplementation() {
  const target = useMemo(() => new Date(2026, 2, 24, 10, 0), []);
  const [duration, setDuration] = useState<number>(0);

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

  const days = Math.floor(duration / (60 * 60 * 24));
  const hours = Math.floor(duration / (60 * 60)) % 24;
  const minutes = Math.floor(duration / 60) % 60;
  const seconds = duration % 60;

  return (
    <>
      <div className="flex flex-col gap-4 mx-3">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-3 items-center md:items-stretch">
          <div className="hidden md:flex flex-col text-text items-start space-y-0 justify-center md:pl-8">
            <div className="text-3xl md:text-4xl leading-tight font-light">2026</div>
            <div className="text-3xl md:text-4xl leading-tight font-light">03</div>
            <div className="text-3xl md:text-4xl leading-tight font-light">24</div>
            <div className="text-2xl leading-tight text-primary-200 mt-1">BME I épület</div>
          </div>
          <div className="flex flex-col md:hidden text-text py-6">
            <div className="flex items-center text-3xl md:text-4xl space-x-2">
              <span className="font-light">2026</span>
              <span className="text-secondary" aria-hidden>·</span>
              <span className="font-light">03</span>
              <span className="text-secondary" aria-hidden>·</span>
              <span className="font-light">24</span>
            </div>
            <div className="text-2xl leading-tight text-primary-200">BME I épület</div>
          </div>

          <div className="w-full flex items-center justify-center md:justify-end md:pr-8">
            <div className="grid grid-cols-3 gap-x-2 items-center">
              <div className="col-span-1 items-end">
                <div className="text-3xl md:text-3xl font-bold text-text">{String(days).padStart(2, "0")}</div>
                <div className="text-3xl md:text-3xl font-bold text-text">{String(hours).padStart(2, "0")}</div>
                <div className="text-3xl md:text-3xl font-bold text-text">{String(minutes).padStart(2, "0")}</div>
                <div className="text-3xl md:text-3xl font-bold text-text">{String(seconds).padStart(2, "0")}</div>
              </div>
              <div className="col-span-2 flex flex-col items-start justify-center gap-2">
                <div className="text-lg md:text-xl text-secondary">nap</div>
                <div className="text-lg md:text-xl text-secondary">óra</div>
                <div className="text-lg md:text-xl text-secondary">perc</div>
                <div className="text-lg md:text-xl text-secondary">másodperc</div>
              </div>
            </div>
          </div>
        </div>


        {/*<div className="w-full flex justify-center pb-3">
          <Link
            href="/register"
            className="inline-flex items-center justify-center gap-3 mb-2 border-2 border-primary-700 bg-primary-200 rounded-lg px-2 py-1 hover:bg-secondary shadow-md w-48 text-lg"
          >
            <span className="whitespace-nowrap">Regisztráció</span>
            <SlArrowRight className="flex-shrink-0" size={18} />
          </Link>
        </div>*/}
      </div>
    </>
  );
}
