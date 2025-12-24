import { redirect } from "next/navigation";

import { LocationTile } from "@/components/tiles/location-tile";
import { OrganiserTile } from "@/components/tiles/organizer-tile";
import { getIndexData } from "@/models/get-index-data";

export default async function asyncContact() {
  const data = await getIndexData();
  if (!data) {
    redirect("/error");
  }
  const sortedOrganizers = data.organisers.sort(
    (a, b) => b.priority - a.priority
  );

  const org = {
    main: sortedOrganizers.filter((o) => o.priority === 0),
    other: sortedOrganizers.filter((o) => o.priority !== 0),
  };

  return (
    <div className="flex flex-col px-4 sm:px-6 xl:px-0 w-full overflow-hidden">
      <h1 className="mb-16 mt-8">Kapcsolat</h1>

      <div className="flex flex-col gap-24 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {org.main.map((organiser) => (
            <OrganiserTile key={organiser.emailAddress} {...organiser} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {org.other.map((organiser) => (
            <OrganiserTile key={organiser.emailAddress} {...organiser} />
          ))}
          <LocationTile />
        </div>
      </div>
    </div>
  );
}
