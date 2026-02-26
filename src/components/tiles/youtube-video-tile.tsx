import Link from "next/link";

import { YoutubeVideo } from "@/components/youtube-video";

type Props = {
  title: string;
  titleColor: string;
  youtubeUrl: string;
  link?: string;
};
export function YoutubeVideoTile({ title, titleColor, youtubeUrl, link }: Props) {
  const [roomLabel, ...restTitleParts] = title.split(" ");
  const roomSuffix = restTitleParts.join(" ");

  return (
    <div className="w-full flex justify-center h-full">
      <div className="w-full max-w-5xl rounded-[40px] border-[6px] border-background bg-transparent overflow-hidden">
        {/* Top title bar */}
        <div className="flex items-center justify-center px-8 pt-4 pb-2">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-wide">
            <span className={`text-${titleColor}`}>{roomLabel}</span>
            {roomSuffix && (
              <span className="ml-3 text-black text-md lowercase">
                {roomSuffix}
              </span>
            )}
          </h2>
        </div>

        {/* Video area */}
        <div className="px-4 pb-4 pt-2">
          <div className="w-full h-full rounded-[28px] overflow-hidden bg-black flex items-center justify-center">
            <div className="w-full max-w-full">
              <YoutubeVideo title={title} url={youtubeUrl} />
            </div>
          </div>
        </div>

        {link && (
          <div className="flex justify-end px-8 pb-4">
            <Link
              href={link}
              className="inline-flex items-center font-semibold text-lg text-[var(--text-base)] hover:underline"
            >
              Részletek
              <svg
                className="w-3 h-3 ms-2 rtl:rotate-180"
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
    </div>
  );
}
