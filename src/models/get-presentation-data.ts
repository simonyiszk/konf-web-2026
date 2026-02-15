import {getIndexData} from "@/models/get-index-data";

import {PresentationWithDates} from "./models";

export async function getPresentationData(): Promise<PresentationWithDates[] | undefined> {
  const indexData = await getIndexData();
  if (!indexData || !indexData.presentations) {
    return;
  }
  const merged = indexData.presentations.map((presentation) => {
    const [startHour, startMinute] = presentation.startTime.split(":");
    const [endHour, endMinute] = presentation.endTime.split(":");
    return {
    ...presentation,
    startDate: new Date(2026, 2, 24, Number(startHour), Number(startMinute)),
    endDate: new Date(2026, 2, 24, Number(endHour), Number(endMinute)),
  }});
  merged.sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
  return merged;
}
