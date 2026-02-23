import { HeroLogo } from "../svgs/HeroLogo";
import { House } from "../svgs/House";

export default function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="flex flex-col justify-center w-full overflow-hidden py-8 sm:py-12 md:py-16 gap-4 sm:gap-6">
        <HeroLogo className="w-[320px] sm:w-[520px] md:w-[620px] h-auto self-center" />
        <House className="w-[260px] sm:w-[420px] md:w-[640px] h-auto" />
      </div>
    </section>
  );
}
