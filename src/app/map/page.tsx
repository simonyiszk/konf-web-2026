import { Floorplan } from "@/components/tiles/map-tile/floorplan";

export default function MapPage() {
  return (
    <div className="flex flex-col w-full px-4 sm:px-6 xl:px-0 relative bg-background text-text">
      <h1 className="mb-16 mt-8 text-center uppercase">Térkép</h1>
      <div className="w-full max-w-7xl mx-auto">
        <Floorplan />
      </div>
    </div>
  );
}