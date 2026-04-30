import { ImageCarouselSection } from "@/components/image-carousel/image-carousel-section";
import { getIndexData } from "@/models/get-index-data";
import { redirect } from "next/navigation";
import { MobilAppTile } from "@/components/tiles/mobil-app-tile";
import GiveawayTile from "@/components/tiles/giveaway-tile";
import Hero from "@/components/hero/Hero";
import YoutubeLive from "@/components/live-videos/youtube-live";

export default function Landing() {
  const data = getIndexData();
  // const streams: StreamData[] | undefined = getStreams();
  if (!data) {
    redirect("/error");
  }
  const appData = data.mobilApp;

  return (
    <div className="flex-grow relative flex flex-col justify-center items-center w-full">
      <Hero/>
      <YoutubeLive ib025Link={`https://www.youtube.com/embed/4yPSuYcq1Lk?si=ZKAkVrSsoRqUfawz`} ib028Link={`https://www.youtube.com/embed/BYsWw5UEZwk?si=8iq0jEArig38D5xN`}/>

      {/* <FeaturedPresentationTile
        sectionTitle={data.featuredPresentations.sectionTitle}
        featuredPresentations={data.featuredPresentations.presentations}
      /> */}

      <GiveawayTile />
      <MobilAppTile data={appData} />
      {data.previousConferences.conferences.length > 0 && (
        <ImageCarouselSection data={data.previousConferences} />
      )}
    </div>
  );
}
