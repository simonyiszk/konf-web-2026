"use client";

import clsx from "clsx";
import Link from "next/link";
import { MouseEventHandler, useEffect, useState } from "react";
import { TbMenu2 } from "react-icons/tb";

import { NavbarItems } from "@/components/navbar/navbar-items";
import { navbarOnDarkBg } from "@/utils/navbarHelper";
import KonfLogo from "../svgs/Konf";

export function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkBackground, setIsDarkBackground] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const onLinkClick: MouseEventHandler = (e) => {
    if ((e.target as HTMLElement).tagName === "A") setIsOpen(false);
  };

  const onScroll = () => {
    try {
      setIsDarkBackground(navbarOnDarkBg("mobile-nav-container"));
    } catch {}
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav className="md:hidden overflow-hidden">
      <div className="w-full px-5 py-3 sticky top-0 z-20" onClick={onLinkClick}>
        <div
          id="mobile-nav-container"
          className={clsx(
            "w-full p-4 box-border rounded-md backdrop-blur-md",
            isDarkBackground
              ? "bg-text bg-opacity-[0.15]"
              : "bg-white bg-opacity-[0.65]"
          )}
        >
          <div className="w-full flex items-center justify-between gap-5">
            <Link href="/" className="h-full">
              <KonfLogo className="fill-text h-fit" height={45} width={48} />
            </Link>
            <button onClick={toggle}>
              <TbMenu2 size={40} className="text-primary-700" />
            </button>
          </div>
          {isOpen && <NavbarItems />}
        </div>
      </div>
    </nav>
  );
}
