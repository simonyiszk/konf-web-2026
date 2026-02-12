import Link from "next/link";

import { PresentationModel } from "@/models/models";

import { SlArrowLeft } from "react-icons/sl";

type PresentationProps = {
  presentation: PresentationModel;
  isFrontPage?: boolean | undefined;
};
export default function Presentation({
  presentation,
  isFrontPage,
}: PresentationProps) {
  const { title, description, presenter, imageUrls } = presentation;
  let startTime = presentation.startTime.split(":").map(Number);
  let endTime = presentation.endTime.split(":").map(Number);

  return (
    <>
      {!isFrontPage && (
        <>
          <div className="flex gap-4 mb-6 w-28 border border-gray-300 rounded-lg px-3 py-2 hover:bg-text hover:text-primary-700">
            <Link
              href="/presentations"
              className="flex items-center ml-2 hover:ml-1 gap-2 text-md transition-colors"
            >
              <SlArrowLeft />
              Vissza
            </Link>
          </div>
          <div className="flex gap-2">
            <div>
              <h3 className="text-5xl px-8"
                  style={presentation.room === "IB028"? {color: "var(--primary-base)"}:{color: "var(--accent-base)"}}>
                {presentation.room}
              </h3>
              <div className="py-2 pl-8 font-bold text-left w-full">
                <div className="flex items-start gap-8">
                  <div className="flex flex-col flex-none mx-1">
                    <div className="flex items-start">
                      <span className="text-5xl leading-none font-semibold">{startTime[0]}</span>
                      <span className="self-start ml-1 text-3xl leading-none">{startTime[1]}</span>
                      <span className="text-5xl leading-none font-semibold ml-0.5">-</span>
                    </div>
                    <div className="flex items-start mt-2">
                      <span className="text-5xl leading-none font-semibold">{endTime[0]}</span>
                      <span className="self-start ml-1 text-3xl leading-none">{endTime[1]}</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full">
                    <span className="block text-5xl font-bold">{title}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="gap-4 w-full px-8" style={{ display: "grid", gridTemplateColumns: "8fr 5fr" }}>
            <div className="flex flex-col gap-4">
              {description}
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="text-2xl font-bold">Előadó</h4>
              <div className="flex items-center gap-4">
                <img
                  src={presenter.pictureUrl}
                  alt={presenter.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <span className="text-lg">{presenter.name}</span>
              </div>
            </div>
          </div>
         </>
       )}
     </>
   )
 }
