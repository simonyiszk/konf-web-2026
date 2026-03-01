import GiveAway from "@/components/giveaway/giveaway";
import GiveawayRules from "@/components/giveaway/giveaway-rules";
import {getIndexData} from "@/models/get-index-data";
import {redirect} from "next/navigation";

export default async function GiveawayPage() {
  const giveawayData = await getIndexData().then(
    (data) => data?.giveaway
  )
  if (!giveawayData) {
    redirect("/error");
  }
  return (
      <div className="flex-grow relative flex flex-col justify-center items-center w-full">
          <GiveAway />
          <GiveawayRules rules={giveawayData.rules} />
      </div>
  );
}
