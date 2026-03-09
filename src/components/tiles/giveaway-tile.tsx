import Image from "next/image";
import Link from "next/link";

import { GiveawayData } from "@/models/models";
import {ChevronRight} from "lucide-react";
import {MysteryGift} from "@/components/svgs/MysteryGift";


type Props = {
  data: GiveawayData;
  showLink?: boolean;
};

export default function GiveawayTile({
  data: { description },
  showLink = true,
}: Props) {
  const [preText, shinyText, postText] = description.split("***");

  return (
    <div className="flex flex-col w-full px-6 py-10 lg:px-12 justify-center items-center">
      <h1 className="mb-8 text-center text-4xl sm:text-6xl">
        NYEREMÉNYJÁTÉK
      </h1>

      <div className="flex flex-col items-center justify-between gap-16 lg:flex-row lg:gap-32">
        <div className="flex flex-col items-center gap-0 text-center w-full lg:items-start lg:text-left">
          <p className="text-lg md:text-xl font-medium mb-1">
            A regisztrált résztvevők között az esemény végén
          </p>
          <h3 className="text-2xl md:text-4xl font-bold text-secondary mb-2 mt-2 leading-none">
            értékes nyereményeket
          </h3>
          <p className="text-lg md:text-xl font-medium mb-6">
            sorsolunk ki!
          </p>

          <Link
            href="/giveaway"
            className="inline-flex items-center rounded-2xl bg-[#E8C4A2] border border-[#7A5028] px-6 py-3 text-lg md:text-xl font-medium text-[#5E3B1C] transition hover:bg-[#D5B08D] shadow-sm w-fit"
          >
            Részletek
            <ChevronRight className="ml-2 w-6 h-6 stroke-[3]" />
          </Link>
        </div>

        <div className="relative h-52 md:h-64 w-full pointer-events-none">
          <MysteryGift />
        </div>
      </div>
    </div>
  );
}
