import {getIndexData} from "@/models/get-index-data";

import {PresentationModel, PresentationWithDates} from "./models";

export async function getPresentationData(): Promise<PresentationWithDates[] | undefined> {
  const indexData = await getIndexData();
  if (!indexData || !indexData.presentations) {
    return;
  }
  const breaks = getPresentationBreaks() as PresentationModel[];
  if (!breaks) {
    return;
  }
  const placeholders = breaks.map((presentation) => ({
    ...presentation,
    placeholder: true,
  }));
  const allPresentations: PresentationModel[] = [
    ...indexData.presentations,
    ...placeholders,
  ];
  const merged = allPresentations.map((presentation) => ({
    ...presentation,
    startDate: new Date(presentation.startTime),
    endDate: new Date(presentation.endTime),
  }));
  merged.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  return merged;
}

export function getPresentationBreaks() {
  return [
    {
      slug: "forendezoi",
      title: "Főrendezői köszöntő",
      room: "IB025",
      language: "hu",
      startTime: "2025-03-18T10:00:00+01:00",
      endTime: "2025-03-18T10:20:00+01:00"
    },
    {
      slug: "megnyito",
      title: "Megnyitó",
      room: "IB028",
      language: "hu",
      startTime: "2025-03-18T11:50:00+01:00",
      endTime: "2025-03-18T12:15:00+01:00"
    },
    {
      slug: "szunet1",
      title: "Szünet",
      room: "IB025",
      language: "hu",
      startTime: "2025-03-18T11:50:00+01:00",
      endTime: "2025-03-18T12:15:00+01:00"
    },
    {
      slug: "szunet2",
      title: "Szünet",
      room: "IB028",
      language: "hu",
      startTime: "2025-03-18T13:45:00+01:00",
      endTime: "2025-03-18T14:15:00+01:00"
    },
    {
      slug: "szunet2b",
      title: "Szünet",
      room: "IB025",
      language: "hu",
      startTime: "2025-03-18T13:45:00+01:00",
      endTime: "2025-03-18T14:15:00+01:00"
    },
    {
      slug: "szunet3",
      title: "Szünet",
      room: "IB028",
      language: "hu",
      startTime: "2025-03-18T15:45:00+01:00",
      endTime: "2025-03-18T16:15:00+01:00"
    },
    {
      slug: "szunet3b",
      title: "Szünet",
      room: "IB025",
      language: "hu",
      startTime: "2025-03-18T15:45:00+01:00",
      endTime: "2025-03-18T16:15:00+01:00"
    },
    {
      slug: "sorsolas",
      title: "Nyereményjáték sorsolás",
      room: "IB028",
      language: "hu",
      startTime: "2025-03-18T18:15:00+01:00",
      endTime: "2025-03-18T18:30:00+01:00"
    }
  ]
}
