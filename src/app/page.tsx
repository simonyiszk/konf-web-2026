import { ImageCarouselSection } from "@/components/image-carousel/image-carousel-section";
import { getIndexData } from "@/models/get-index-data";
import { redirect } from "next/navigation";
import { MobilAppTile } from "@/components/tiles/mobil-app-tile";
import GiveawayTile from "@/components/tiles/giveaway-tile";
import FeaturedPresentationTile from "@/components/tiles/featured-presentations-tile/featured-presentation-tile";
import Hero from "@/components/hero/Hero";
/*import {getStreams} from "@/models/get-youtube-video-data";
import {StreamData} from "@/models/models";
import YoutubeLive from "@/components/live-videos/youtube-live";*/

export default async function Landing() {
  const data = await getIndexData();
  // const streams: StreamData[] | undefined = getStreams();
  if (!data) {
    redirect("/error");
  }
  const appData = data.mobilApp;

  return (
    <div className="flex-grow relative flex flex-col justify-center items-center w-full">
      <Hero/>

      {/*<YoutubeLive ib025Link={streams[1].youtubeUrl} ib028Link={streams[0].youtubeUrl}/>*/}

      <FeaturedPresentationTile
        sectionTitle={data.featuredPresentations.sectionTitle}
        featuredPresentations={data.featuredPresentations.presentations}
      />

      <GiveawayTile />
      <MobilAppTile data={appData} />
      {data.previousConferences.conferences.length > 0 && (
        <ImageCarouselSection data={data.previousConferences} />
      )}
    </div>
  );
}
