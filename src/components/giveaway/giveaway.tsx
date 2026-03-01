import Image from "next/image";
import {MysteryGift} from "@/components/svgs/MysteryGift";

export default function GiveAway() {
  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 bg-[#F3C59B] relative py-12 md:py-16">
      <div className="absolute bottom-0 inset-x-0 h-96 sm:h-[400px] md:h-[1000px] z-0 pointer-events-none w-full">
        <Image
          src="/img/pileOfCubes.png"
          alt="pile of cubes background"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <h2 className="relative z-10 text-3xl md:text-5xl font-aboreto text-primary-800 mb-6 lg:mb-10 text-center uppercase tracking-wider">
        NYEREMÉNYJÁTÉK
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 lg:gap-8 w-full max-w-[1240px] relative z-10">
         {/*Left Card*/}
        {/*<div className="bg-text rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-14 flex flex-col gap-4 relative shadow-sm">
          <div className="text-primary-800 z-10 w-full lg:max-w-[90%] text-center lg:text-left">
            <p className="text-lg md:text-xl font-medium mb-1">
              A regisztrált résztvevők között az esemény végén kisorsolunk egy
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary mb-2 mt-2 leading-none">
              Nintendo Switch 3
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-medium">
              hordozható játékkonzolt
            </p>
          </div>
          <div className="relative mt-4 h-48 sm:h-64 md:h-96 w-full">
            <Image
              src="/img/nintendo.png"
              fill
              alt="Nintendo Switch 3"
              className="object-contain lg:object-left-top"
            />
          </div>
        </div>*/}
        <div className="bg-text rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-14 flex flex-col gap-4 relative shadow-sm">
          <div className="text-primary-800 z-10 w-full lg:max-w-[90%] text-center lg:text-left">
            <p className="text-lg md:text-xl font-medium mb-1">
              A regisztrált résztvevők között az esemény végén
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary mb-2 mt-2 leading-none">
              értékes nyereményeket
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-medium">
              sorsolunk ki
            </p>
          </div>
          <div className="relative mt-4 h-36 sm:h-48 md:h-72 w-full">
            <MysteryGift />
          </div>
        </div>

         {/*Right Cards*/}
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 min-h-full">
          {/*<div className="bg-background rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 text-center text-primary-50 flex flex-col justify-between flex-1 shadow-sm">
            <div>
              <p className="text-sm md:text-base font-light">
                Az első 500 jelentkező között kisorsolunk egy
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mt-1 mb-2">
                monitort
              </h3>
            </div>
            <div className="relative mt-auto h-24 sm:h-32 md:h-40 w-full">
               <Image
                 src="/register/monitor.svg"
                 fill
                 alt="Monitor"
                 className="object-contain"
               />
            </div>
          </div>*/}

          <div className="bg-background rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 text-center text-primary-50 flex flex-col justify-between flex-1 shadow-sm">
            <div>
              <p className="text-sm md:text-base font-light">
                Az első 150 jelentkező ajándékba kap egy
              </p>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mt-1 mb-2">
                vászontáskát
              </h3>
            </div>
            <div className="relative mt-auto h-24 sm:h-32 md:h-40 w-full">
               <Image
                 src="/register/totebag.svg"
                 fill
                 alt="Vászontáska"
                 className="object-contain"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
