import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Inter_Tight } from "next/font/google";
import PlausibleProvider from "next-plausible";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: {
    default: "Simonyi Konferencia - 2026. 03. 24.",
    template: "Simonyi Konferencia - %s",
  },
  authors: {
    name: "Simonyi Károly Szakkollégium",
    url: "https://simonyi.bme.hu",
  },
  description:
    "Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciája.",
  keywords:
    "Simonyi Konferencia 2026, technológiai konferencia, egyetemi rendezvény, hallgatók, hallgatók szervezése, Simonyi Károly Szakkollégium, BME-VIK, innováció, digitalizáció, műszaki fejlesztések, tudományos esemény, inspiráló előadások, szakmai workshopok, Magyarország eseményei, fiatal tehetségek, digitális megoldások, jövő technológiái, iparági trendek, tudásátadás, innovatív gondolkodás, egyetemi közösség, kreatív technológia, networking lehetőségek, szakmai előadók, technológiai innovációk, informatikai fejlődés, egyetemi tapasztalatok, mérnöki világ, vezető szakemberek, digitális társadalom, tudományos találkozó",
  other: {
    "google-site-verification": "IEdi66LPaMH1EMd-iMpGGl13QKlQTBIFTNL7TEv2tY8",
    "apple-itunes-app": "app-id=6478986330",
  },
};

const cygrotesk = localFont({
  src: "./fonts/CyGrotesk.woff",
  fallback: ["sans-serif"],
  variable: "--font-cygrotesk",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className={`${cygrotesk.variable} ${interTight.variable}`}>
      <body className={"font-interTight bg-background text-text"}>
        <PlausibleProvider
          domain="konferencia.simonyi.bme.hu"
          customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_URL}
          selfHosted
        />
        <div className="w-full flex flex-col min-h-screen flex-grow justify-center items-center body">
          <Navbar />
          <main className="container mb-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
