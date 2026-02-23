import { YoutubeVideoTile } from "../tiles/youtube-video-tile";

interface YoutubeLiveProps{
    ib028Link: string;
    ib025Link: string;
}

export default function YoutubeLive(props: YoutubeLiveProps) {
    return (
      <div className="flex flex-col my-12 items-center gap-4 w-full">
        <h1 className="text-center text-3xl sm:text-6xl flex">
          NÉZD ÉLŐBEN!
        </h1>
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-7xl px-4">
          <YoutubeVideoTile youtubeUrl={props.ib028Link} title="IB028 terem" titleColor="primary" />
          <YoutubeVideoTile youtubeUrl={props.ib025Link} title="IB025 terem" titleColor="accent" />
        </div>
      </div>
    );
  }