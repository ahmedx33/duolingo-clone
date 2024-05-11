import Loading from "@/app/loading";
import dynamic from "next/dynamic";

const LeaderboardPageContent = dynamic(() => import("@/components/leaderboard/leaderboard-page-content"), { loading: () => <Loading /> });

export default function Page() {
    return (
        <>
            <LeaderboardPageContent />
        </>
    );
}
