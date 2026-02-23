import Image from "next/image";
import Link from "next/link";

import { GiveawayData } from "@/models/models";

import { Tile } from "./tile";

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
    <div className="bg-transparent my-10 w-full">
      <h1 className="text-center text-3xl sm:text-4xl">
            NYEREMÉNYJÁTÉK
        </h1>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 py-10 px-4">
        <div className="flex max-w-xl flex-col gap-4 text-center md:text-left">
          <p className="text-lg sm:text-xl leading-relaxed">
            {preText}
            {shinyText && (
              <>
                <br />
                <span className="text-2xl font-semibold text-secondary sm:text-3xl my-50">
                  {shinyText}
                </span>
              </>
            )}
            {postText && (
              <>
                <br />
                {postText}
              </>
            )}
          </p>

          {showLink && (
            <div className="mt-4">
              <Link
                href="/giveaway"
                className="inline-flex items-center rounded-md bg-[#f4cda3] border border-background px-6 py-2 text-lg font-medium text-background transition hover:bg-background hover:text-text"
              >
                Részletek
                <svg
                  className="ms-2 h-3 w-3 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              </Link>
            </div>
          )}
        </div>
        <div className="">
          <Image
            src="/img/nintendo.png"
            alt="Nyeremény játékkonzol"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
