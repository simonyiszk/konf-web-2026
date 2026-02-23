import { Organiser } from "@/models/models";

import { Tile } from "./tile";
import Image from "next/image";

type Props = Organiser;

export function OrganiserTile({ name, emailAddress, pictureUrl, rank }: Props) {
  return (
    <div className="bg-accent-500">
      <div className="flex flex-col h-full">
        <div className="size-full relative aspect-square">
          <Image
            src={pictureUrl}
            className="w-full aspect-square object-cover object-center"
            alt={name}
            fill
          />
        </div>
        <div className="rounded-b-[30px] pt-4 px-3 pb-9 flex flex-col h-full gap-2 ">
          <h2 className="text-center text-3xl font-extrabold ">{name}</h2>
          <h2 className="text-center text-2xl font-semibold">{rank}</h2>
          <p className="text-center text-base sm:text-sm md:text-base lg:text-sm xl:text-base text-primary">
            {emailAddress}
          </p>
        </div>
      </div>
    </div>
  );
}
