import Image from "next/image";
import Link from "next/link";

import { SocialButtons } from "./social-buttons";
import KonfLogo from "../svgs/Konf";

export function Footer() {
  return (
    <footer className="w-full px-8 py-16 flex flex-col gap-10 overflow-hidden bg-text z-10 text-background">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-between container mx-auto">
        <div className="flex flex-col gap-4 w-full col-span-1 md:col-span-2">
          <div className="flex flex-row items-center gap-2 justify-center md:justify-start text-secondary">
            <KonfLogo className="fill-primary size-16 sm:size-24 shrink-0" />
            <h1 className="font-bold leading-tight font-aboreto">
              Simonyi
              <br />
              Konferencia
            </h1>
          </div>
          <p className="font-bold text-xl sm:text-2xl text-center md:text-left">
            Magyarország legnagyobb egyetemi hallgatók által szervezett éves
            technológiai konferenciája.
          </p>
          <SocialButtons />
        </div>

        <li className="flex flex-col gap-4 text-center md:text-right text-xl font-medium">
          {/* <Link href="/presentations" className="brand-link">
            Előadások
          </Link> */}
          {/*<Link href="/contact" className="brand-link">
            Kapcsolat
          </Link>
          <Link href="/giveaway" className="brand-link">
            Nyereményjáték
          </Link>*/}
          {/* <Link href="/conferences" className="brand-link">
            Előző évek konferenciái
          </Link> */}
          <Link
            href="https://simonyi.bme.hu"
            target="blank"
            className="brand-link"
          >
            Simonyi Károly Szakkollégium
          </Link>
        </li>
      </section>

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <div className="flex items-center gap-8 ">
            <Link
              href="https://kir-dev.hu"
              className="brand-link"
              target="blank"
            >
              <Image
                src="/img/kirdev-inline.svg"
                className="mb-4"
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
        </div>

        <div className="flex-grow md:self-end flex justify-center">
          <Link
            href="https://vercel.com"
            className="brand-link "
            target="blank"
          >
            <Image
              src="/img/vercel.svg"
              alt="Vercel"
              className="mx-auto"
              width={100}
              height={25}
            />
          </Link>
        </div>

        <div className="flex items-center gap-8 ">
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
