import { type Metadata } from "next";
import { notFound } from "next/navigation";

import { PresentationGrid } from "@/components/presentation/PresentationGrid";
import { getPresentationData } from "@/models/get-presentation-data";
import { BreakWithDates, PresentationWithDates } from "@/models/models";

export const metadata: Metadata = {
  title: "Előadások",
  description:
    "Az előadások listája a XXI. Simonyi Konferencián, Magyarország legnagyobb egyetemi hallgatók által szervezett éves technológiai konferenciáján.",
};

export default function Presentations() {
  const presentations = getPresentationData();
  if (!presentations) {
    notFound();
  }
  const [startDate, endDate] = getStartAndEndDates(presentations);
  return (
    <div className="flex flex-col w-full px-4 sm:px-6 xl:px-0 relative">
      <h1 className="mb-16 mt-8">Előadások</h1>
      <PresentationGrid
        presentations={presentations}
        endDate={endDate}
        startDate={startDate}
      />
    </div>
  );
}

function getStartAndEndDates(
  presentations: (PresentationWithDates | BreakWithDates)[]
): [number, number] {
  const endDates = presentations.map((presentations) =>
    presentations.endDate.getTime()
  );
  const startDates = presentations.map((presentation) =>
    presentation.startDate.getTime()
  );
  return [Math.min(...startDates), Math.max(...endDates)];
}
