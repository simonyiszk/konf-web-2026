import Link from "next/link";

const links = [
  /*{
    href: "/",
    label: "főoldal",
  },*/
  {
    href: "https://xxii.konferencia.simonyi.bme.hu/",
    label: "xxii. konferencia",
  },
  {
    href: "https://xxi.konferencia.simonyi.bme.hu/",
    label: "xxi. konferencia",
  },
  {
    href: "https://xx.konferencia.simonyi.bme.hu/",
    label: "xx. konferencia",
  },
  {
    href: "https://xix.konferencia.simonyi.bme.hu/",
    label: "xix. konferencia",
  },
  /*{
    href: "/presentations",
    label: "előadások",
  },
  {
    href: "/giveaway",
    label: "nyereményjáték",
  },
  {
    href: "/register",
    label: "regisztráció",
  },*/
  /*{
    href: "/contact",
    label: "kapcsolat",
  },*/
];

export function NavbarItems() {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-5 md:mt-0 md:gap-10">
      {links.map(({ href, label }) => (
        <Link
          href={href}
          key={href}
          className="hover:text-brand text-xl font-bold text-background"
        >
          {label}
        </Link>
      ))}
    </div>
  );
}
