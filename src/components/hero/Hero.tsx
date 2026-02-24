import { HeroLogo } from "../svgs/HeroLogo";
import { House } from "../svgs/House";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";

export default function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="flex flex-col justify-center w-full overflow-hidden pt-8 sm:pt-12 md:pt-16 gap-4 sm:gap-6">
        <HeroLogo className="w-[320px] sm:w-[520px] md:w-[620px] h-auto self-center" />
        <div className="flex flex-col md:grid md:grid-cols-2">
          <House className="flex flex-col h-auto" />
          <div className="flex flex-col items-center justify-center gap-4 px-4 sm:px-6 md:px-8">
            <CountdownTileImplementation />
          </div>
        </div>
      </div>
    </section>
  );
}
