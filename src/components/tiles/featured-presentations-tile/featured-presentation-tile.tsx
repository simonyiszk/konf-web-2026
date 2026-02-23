import Link from "next/link";

import { FeaturedPresentation, PresentationModel } from "@/models/models";
import slugify from "@/utils/slugify";

type Props = {
  sectionTitle: string;
  featuredPresentations: PresentationModel[];
};

function formatTimeRange(startTime: string, endTime: string) {
  const startDate = new Date(startTime);
  const endDate = new Date(endTime);

  const sh = startDate.getHours().toString().padStart(2, "0");
  const sm = startDate.getMinutes().toString().padStart(2, "0");
  const eh = endDate.getHours().toString().padStart(2, "0");
  const em = endDate.getMinutes().toString().padStart(2, "0");

  return (
    <div className="text-3xl sm:text-4xl flex flex-col gap-2">
        <p>
            <span>{sh}</span>
            <sup>{sm}</sup>
            -
        </p>
        <p>
            <span>{eh}</span>
            <sup>{em}</sup>
        </p>
    </div>
  )
}

export default function FeaturedPresentationTile({
  sectionTitle,
  featuredPresentations,
}: Props) {

  return (
    <section className="w-full px-4 md:px-32 py-12 md:py-16 bg-background">
      <h1 className="text-center text-text text-4xl sm:text-6xl">
        {sectionTitle}
      </h1>

      <div className="flex flex-col gap-0">
        {featuredPresentations?.map((presentation, index) => {
          const roomColorClass =
            presentation.room === "IB028"
              ? "text-[var(--primary-base)]"
              : presentation.room === "IB025"
                ? "text-[var(--accent-base)]"
                : "text-[var(--text-base)]";

          const imageSrc =
            (presentation.imageUrls && presentation.imageUrls[0]) ||
            presentation.presenter.pictureUrl;

          const linkHref = `/presentations/${slugify(presentation.title)}`;

          return (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1.5fr)] gap-8 md:gap-10 items-center py-6 md:py-8">
                <div className="flex flex-col gap-3 md:gap-4">
                  <div
                    className={`text-2xl md:text-3xl font-semibold tracking-wide ${roomColorClass}`}
                  >
                    {presentation.room}
                  </div>
                  <div className="text-lg md:text-xl font-semibold tracking-[0.15em] text-[var(--text-base)]">
                    {formatTimeRange(presentation.startTime, presentation.endTime)}
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-base)]">
                    {presentation.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-[var(--text-base)]">
                    {presentation.description}
                  </p>

                  <div className="mt-10">
                    <Link
                      href={linkHref}
                      className="inline-flex items-center gap-2 rounded-lg border border-[var(--background-base)] bg-[#f4cda3] px-5 py-2.5 text-sm md:text-base font-medium text-[var(--background-base)] transition-colors hover:bg-[var(--background-base)] hover:text-[var(--text-base)]"
                    >
                      Bővebben
                      <svg
                        className="h-3 w-3"
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
                </div>

                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 md:gap-4">
                  <div className="w-full max-w-[230px] md:max-w-[260px] aspect-[260/220] bg-transparent overflow-hidden flex items-center justify-center shrink-0">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt=""
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <svg
                        width="401"
                        height="324"
                        viewBox="0 0 401 324"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 37.0147C0 13.3825 21.8524 -4.1925 44.9348 0.875526L371.726 72.6267C405.168 79.9692 411.556 124.885 381.487 141.26L54.6956 319.224C30.0403 332.65 0 314.804 0 286.729V37.0147Z"
                          fill="#F4E1BE"
                        />
                      </svg>
                    )}
                  </div>

                  <div>
                    <p className="text-lg md:text-xl font-bold text-[var(--text-base)]">
                      {presentation.presenter.name}
                    </p>
                    <p className="text-sm md:text-base text-[var(--text-base)]">
                      {presentation.presenter.rank}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-1 bg-secondary"></div>

              {index < featuredPresentations.length - 1 && (
                <hr
                  className="border-t border-[var(--background-600)] w-full my-2"
                  aria-hidden
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10 md:mt-12">
        <Link
          href="/presentations"
          className="inline-flex items-center gap-2 text-base md:text-lg font-medium text-[var(--text-base)] hover:underline focus:underline"
        >
          Összes előadás
          <svg
            className="h-4 w-4"
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
    </section>
  );
}
