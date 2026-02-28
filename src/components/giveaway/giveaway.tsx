import Image from "next/image";

export default function GiveAway() {
  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6">
      <h2 className="text-3xl md:text-5xl font-aboreto text-primary-800 mb-6 lg:mb-10 text-center uppercase tracking-wider">
        NYEREMÉNYJÁTÉK
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6 lg:gap-8 w-full max-w-[1240px]">
        {/* Left Card */}
        <div className="bg-text rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-14 flex flex-col gap-4 relative shadow-sm">
          <div className="text-primary-800 z-10 w-full lg:max-w-[90%] text-center lg:text-left">
            <p className="text-lg md:text-xl font-medium mb-1">
              A regisztrált résztvevők között az esemény végén kisorsolunk egy
            </p>
            <h3 className="text-4xl md:text-6xl font-bold text-secondary mb-2 mt-2 leading-none">
              Nintendo Switch 3
            </h3>
            <p className="text-lg md:text-xl font-medium">
              hordozható játékkonzolt
            </p>
          </div>
          <div className="relative mt-4 h-64 md:h-96 w-full">
            <Image 
              src="/img/nintendo.png" 
              fill 
              alt="Nintendo Switch 3" 
              className="object-contain lg:object-left-top" 
            />
          </div>
        </div>

        {/* Right Cards */}
        <div className="flex flex-col gap-6 lg:gap-8 min-h-full">
          <div className="bg-background rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-10 text-center text-primary-50 flex flex-col justify-between flex-1 shadow-sm">
            <div>
              <p className="text-base md:text-lg font-light">
                Az első 500 jelentkező között kisorsolunk egy
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mt-2 mb-4">
                monitort
              </h3>
            </div>
            <div className="relative mt-auto h-36 md:h-48 w-full">
               <Image 
                 src="/img/nintendo.png" 
                 fill 
                 alt="Monitor" 
                 className="object-contain" 
               />
            </div>
          </div>

          <div className="bg-background rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-10 text-center text-primary-50 flex flex-col justify-between flex-1 shadow-sm">
            <div>
              <p className="text-base md:text-lg font-light">
                Az első 50 jelentkező ajándékba kap egy
              </p>
              <h3 className="text-2xl md:text-4xl font-bold text-secondary mt-2 mb-4">
                vászontáskát
              </h3>
            </div>
            <div className="relative mt-auto h-36 md:h-48 w-full">
               <Image 
                 src="/img/nintendo.png" 
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
