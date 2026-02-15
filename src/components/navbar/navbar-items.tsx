import Link from "next/link";

const links = [
  /*{
    href: "/",
    label: "főoldal",
  },*/
  {
    href: "https://xxii.konferencia.simonyi.bme.hu/",
    label: "XXII. Konferencia",
  },
  {
    href: "https://xxi.konferencia.simonyi.bme.hu/",
    label: "XXI. Konferencia",
  },
  {
    href: "https://xx.konferencia.simonyi.bme.hu/",
    label: "XX. Konferencia",
  },
  {
    href: "/presentations",
    label: "előadások",
  },
  /*{
    href: "/giveaway",
    label: "nyereményjáték",
  },
  {
    href: "/register",
    label: "regisztráció",
  },*/
  {
    href: "/contact",
    label: "kapcsolat",
  },
];

export function NavbarItems() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-3 mt-5 md:mt-0 md:gap-10">
      {links.map(({ href, label }) => (
        <Link
          href={href}
          key={href}
          className="hover:text-brand text-xl font-bold text-primary-700"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
