import { Organiser } from "@/models/models";

import Image from "next/image";

type Props = Organiser;

export function OrganiserTile({ name, emailAddress, pictureUrl, rank }: Props) {
  return (
    <div className="rounded-[30px] overflow-hidden mx-20">
      <div className="flex flex-col h-full">
        <div className="size-full relative aspect-square">
          <Image
            src={pictureUrl}
            className="w-full aspect-square object-cover object-center"
            alt={name}
            fill
          />
        </div>
        <div className="pt-4 px-4 pb-8 flex flex-col h-full gap-1">
          <h2 className="text-center text-3xl">{name}</h2>
          <h2 className="text-center text-2xl">{rank}</h2>
          <p className="text-center text-sm break-all">
            {emailAddress}
          </p>
        </div>
      </div>
    </div>
  );
}
