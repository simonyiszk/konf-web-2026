import Image from "next/image";
import Link from "next/link";

import { SocialButtons } from "./social-buttons";
import { FullSand } from "../svgs/FullSand";

export function Footer() {
  return (
    <footer className="z-10 flex w-full flex-col gap-10 overflow-hidden bg-[#5a3d13] px-8 py-16 text-[#fbead0]">
      <section className="container mx-auto flex flex-col justify-between gap-10 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:max-w-xl">
          <div className="flex flex-row items-center justify-center text-secondary md:justify-start">
            <FullSand className="h-auto w-full max-w-xs" />
          </div>
          <p className="text-center text-lg font-normal md:text-left md:text-xl">
            Magyarország legnagyobb egyetemi hallgatók által szervezett éves
            technológiai konferenciája.
          </p>
          <div className="mt-2 flex justify-center md:justify-start">
            <SocialButtons />
          </div>
        </div>

        <nav className="flex flex-col items-center justify-start gap-3 text-right text-lg md:items-end md:text-xl">
          <Link href="/contact" className="brand-link">
            Kapcsolat
          </Link>
          <Link href="/giveaway" className="brand-link">
            Nyereményjáték
          </Link>
          <Link
            href="https://simonyi.bme.hu"
            target="blank"
            className="brand-link"
          >
            Simonyi Károly Szakkollégium
          </Link>
        </nav>
      </section>

      <div className="container mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex items-center gap-10">
          <Link href="https://kir-dev.hu" className="brand-link" target="blank">
            <Image
              src="/img/kirdev-inline.svg"
              className="mb-2"
              alt="Kir-Dev"
              width={193}
              height={40}
            />
          </Link>
          <Link
            href="https://schdesign.hu"
            className="brand-link"
            target="blank"
          >
            <Image
              src="/img/schdesign.svg"
              alt="schdesign"
              width={200}
              height={60}
            />
          </Link>
        </div>

        <div className="flex items-center gap-10">
          <Link href="https://vik.bme.hu" className="brand-link" target="blank">
            <Image src="/img/vik.svg" alt="Vik" width={48} height={48} />
          </Link>
          <Link
            href="https://simonyi.bme.hu"
            className="brand-link"
            target="blank"
          >
            <Image
              src="/img/simonyi.svg"
              alt="Simonyi Károly Szakkollégium"
              width={160}
              height={34}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
