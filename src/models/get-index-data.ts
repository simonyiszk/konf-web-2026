import {IndexPageData} from "./models";

export async function getIndexData(): Promise<IndexPageData | undefined> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/conference/index`,
    {
      next: { revalidate: 3600 },
    }
  );
  if (!res.ok) {
    console.error(res);
    return;
  }
  return res.json();
}
