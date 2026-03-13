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
        <div className="bg-text rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-14 flex flex-col gap-4 relative shadow-sm">
          <div className="text-primary-800 z-10 w-full lg:max-w-[90%] text-center lg:text-left">
            <p className="text-lg md:text-xl font-medium mb-1">
              A regisztrált résztvevők között az esemény végén kisorsolunk egy
            </p>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary mb-2 mt-2 leading-none">
              Lenovo Idea Tab
            </h3>
            <p className="text-base sm:text-lg md:text-xl font-medium">
              tabletet
            </p>
          </div>
          <div className="relative mt-4 h-48 sm:h-64 md:h-96 lg:mt-32 w-full">
            <Image
              src="/img/lenovo_ideatab.webp"
              fill
              alt="Lenovo Idea Tab"
              className="object-contain lg:object-center"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 min-h-full">
          <div className="bg-background rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 text-center text-primary-50 flex flex-col justify-between flex-1 shadow-sm">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mt-1 mb-2">
                LG UltraGear
              </h3>
              <p className="text-sm md:text-base font-light">
                27&quot; 144Hz monitort
              </p>
            </div>
            <div className="relative mt-0 h-24 sm:h-32 md:h-40 w-full">
               <Image
                 src="/img/lg_27g411a-b.png"
                 fill
                 alt="Monitor"
                 className="object-contain"
               />
            </div>
          </div>

          <div className="bg-background rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 text-center text-primary-50 flex flex-col justify-between flex-1 shadow-sm">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mt-1 mb-2">
                JBL Tune Buds 2
              </h3>
              <p className="text-sm md:text-base font-light">
                vezeték nélküli fülhallgatót
              </p>
            </div>
            <div className="relative mt-4 h-24 sm:h-32 md:h-40 w-full">
              <Image
                src="/img/jbl_tunebuds2.png"
                fill
                alt="JBL Tune Buds 2"
                className="object-contain"
              />
            </div>
          </div>

          <div className="bg-background rounded-[1.5rem] lg:rounded-[2rem] p-6 lg:p-8 text-center text-primary-50 flex flex-col justify-between flex-1 shadow-sm">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mt-1 mb-2">
                Páros napijegyet
              </h3>
              <p className="text-sm md:text-base font-light">
                a 2026-os Művészetek Völgyére
              </p>
            </div>
            <div className="relative mt-6 mb-4 h-20 w-full">
              <Image
                src="/img/muvolgy.svg"
                fill
                alt="Művészetek Völgye"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
