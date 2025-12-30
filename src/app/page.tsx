import { ImageCarouselSection } from "@/components/image-carousel/image-carousel-section";
import { PromoVideoTile } from "@/components/tiles/promo-video-tile";
import { getIndexData } from "@/models/get-index-data";
import { redirect } from "next/navigation";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";

export default async function Landing() {
  const data = await getIndexData();
  //const streams: StreamData[] | undefined = getStreams();
  if (!data) {
    redirect("/error");
  }
  //const appData = data.mobilApp;
  return (
    <div className="flex-grow relative flex flex-col justify-center items-center w-full">
      <CountdownTileImplementation />
      <PromoVideoTile data={data.promoVideo} />
      {/*<MobilAppTile data={appData} />*/}
      {data.previousConferences.conferences.length > 0 && (
        <ImageCarouselSection data={data.previousConferences} />
      )}
      {/*<SponsorSection
        companies={data.sponsors.companies}
        sectionTitle={data.sponsors.sectionTitle}
      />*/}
    </div>
  );
}
