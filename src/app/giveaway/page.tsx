import GiveAway from "@/components/giveaway/giveaway";
import GiveawayRules from "@/components/giveaway/giveaway-rules";

export default function GiveawayPage() {
    return (
        <div className="flex-grow relative flex flex-col justify-center items-center w-full pt-10 sm:pt-16">
            <GiveAway />
            <GiveawayRules />
            
        </div>
    );
}