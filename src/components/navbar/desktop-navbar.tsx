"use client";

import clsx from "clsx";
import Link from "next/link";

import { NavbarItems } from "@/components/navbar/navbar-items";
import KonfLogo from "../svgs/Konf";

export function DesktopNavbar() {
  return (
    <nav className="w-full mx-auto hidden md:flex justify-end items-center flex-wrap gap-10 flex-col md:flex-row sticky p-5 top-0 z-50 overflow-hidden">
      <div
        id="desktop-nav-container"
        className={clsx(
          "flex items-center justify-between gap-10 w-full p-4 box-border rounded-md backdrop-blur-md bg-text"
        )}
      >
        <Link href="/" className="h-full">
          <KonfLogo className="fill-text h-fit" />
        </Link>
        <NavbarItems />
      </div>
    </nav>
  );
}
