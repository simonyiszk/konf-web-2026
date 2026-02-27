import Link from "next/link";
import KonfLogo from "@/components/svgs/Konf";


export default function RegisterSuccessPage() {
  return (
    <Link
      href="/"
      className="flex flex-col justify-center items-center h-screen gap-4"
    >
      <h1>Sikeres regisztráció!</h1>
      <p className="text mb-8">A belépődet emailben fogod hamarosan megkapni</p>
      <KonfLogo className="fill-[--foreground]" width={80} height={100} />
    </Link>
  );
}
