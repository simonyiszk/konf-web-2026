import { ImageCarouselSection } from "@/components/image-carousel/image-carousel-section";
import { PromoVideoTile } from "@/components/tiles/promo-video-tile";
import { getIndexData } from "@/models/get-index-data";
import { redirect } from "next/navigation";
import CountdownTileImplementation from "@/components/tiles/countdown-tile/countdown-implementation";
import { SponsorSection } from "@/components/sponsors/sponsor-section";
import { MobilAppTile } from "@/components/tiles/mobil-app-tile";
import GiveawayTile from "@/components/tiles/giveaway-tile";
import Presentation from "@/components/presentation/Presentation";
import FeaturedPresentationTile from "@/components/tiles/featured-presentations-tile/featured-presentation-tile";
import { FeaturedPresentation } from "@/models/models";
import Hero from "@/components/hero/Hero";
import { YoutubeVideo } from "@/components/youtube-video";
import { YoutubeVideoTile } from "@/components/tiles/youtube-video-tile";
import YoutubeLive from "@/components/live-videos/youtube-live";
import { Tile } from "@/components/tiles/tile";

export default async function Landing() {
  const data = await getIndexData();
  //const streams: StreamData[] | undefined = getStreams();
  if (!data) {
    redirect("/error");
  }
  const appData = data.mobilApp;

  return (
    <div className="flex-grow relative flex flex-col justify-center items-center w-full">
      <Hero/>

      <YoutubeLive ib025Link="" ib028Link=""/>

      <FeaturedPresentationTile
        sectionTitle={data.featuredPresentation.sectionTitle}
        featuredPresentations={[data.featuredPresentation.presentation]}
      />

      <GiveawayTile data={data.giveaway} />
      <MobilAppTile data={appData} />
      {data.previousConferences.conferences.length > 0 && (
        <ImageCarouselSection data={data.previousConferences} />
      )}
      <SponsorSection
        companies={data.sponsors.companies}
        sectionTitle={data.sponsors.sectionTitle}
      />
    </div>
  );
}
