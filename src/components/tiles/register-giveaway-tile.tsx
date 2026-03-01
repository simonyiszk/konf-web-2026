import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function RegisterGiveawayTile() {
  return (
    <div className="flex flex-col items-center w-full relative">
      <h2 className="relative z-10 text-4xl sm:text-5xl font-aboreto text-primary-800 text-center uppercase tracking-wider">
        NYEREMÉNYJÁTÉK
      </h2>

      <div className="w-full max-w-[800px] relative z-10 px-4">
        <div className="bg-transparent rounded-[2rem] lg:rounded-[3rem] p-8 flex flex-col md:pr-14 relative">
          <div className="text-primary-800 z-10 w-full text-center lg:text-left">
            <p className="text-lg md:text-xl font-medium mb-1">
              A regisztrált résztvevők között az esemény végén kisorsolunk egy
            </p>
            <h3 className="text-4xl md:text-6xl font-bold text-secondary mb-2 mt-2 leading-none">
              Nintendo Switch 3
            </h3>
            <p className="text-lg md:text-xl font-medium mb-6">
              hordozható játékkonzolt
            </p>
            
            <Link
              href="/giveaway"
              className="inline-flex items-center rounded-2xl bg-[#E8C4A2] border border-[#7A5028] px-6 py-3 text-lg md:text-xl font-medium text-[#5E3B1C] transition hover:bg-[#D5B08D] shadow-sm w-fit"
            >
              Részletek
              <ChevronRight className="ml-2 w-6 h-6 stroke-[3]" />
            </Link>
          </div>
          
          <div className="relative mt-8 lg:-mt-20 h-64 md:h-96 w-full lg:w-[120%] lg:-ml-[10%] pointer-events-none">
            <Image 
              src="/img/nintendo.png" 
              fill 
              alt="Nintendo Switch 3" 
              className="object-contain lg:object-right-bottom" 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
