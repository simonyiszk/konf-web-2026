import { MobilAppData } from "@/models/models";
import { Ticket } from "../hero/ticket";

type Props = {
  data: MobilAppData;
};

export function MobilAppTile({ data }: Props) {
  return (
      <div className="flex flex-col w-full bg-[#f4cda3] px-6 py-10 lg:px-12 justify-center items-center">
        <h1 className="mb-8 text-center text-6xl tracking-[0.35em] sm:text-4xl">
          KONFERENCIAPP
        </h1>

        <div className="flex flex-col items-center justify-between gap-32 lg:flex-row">
          <img
            src="/img/konferenciapp.png"
            className="h-auto w-full max-w-md"
            alt="KonferenciApp képernyők"
          />

          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <p className="max-w-md text-lg leading-relaxed whitespace-pre-line">
              {data.description}
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a href={data.androidUrl} target="_blank" rel="noreferrer">
                <img
                  className="h-[50px] min-w-[150px]"
                  src="/img/gplay.png"
                  alt="Google Play"
                />
              </a>
              <a href={data.iosUrl} target="_blank" rel="noreferrer">
                <img
                  className="h-[50px] min-w-[150px]"
                  src="/img/appstore.svg"
                  alt="App Store"
                />
              </a>
            </div>
          </div>
        </div>
    </div>
  );
}
