import { HeroLogo } from "../svgs/HeroLogo";
import { House } from "../svgs/House";
import KonfLogo from "../svgs/Konf";

export default function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="flex flex-col gap-5 justify-center items-center w-full overflow-hidden">
        <HeroLogo/>
        <House/>
      </div>
    </section>
  );
}
