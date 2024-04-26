import { ActiveUsersList } from "@/components/leaderboard/active-users-list";
import { LeaderboardHeader } from "@/components/leaderboard/leaderboard-header";

export default function Page() {
    return (
        <main className="w-full h-screen flex flex-col items-center py-5">
            <LeaderboardHeader />
            <ActiveUsersList />
        </main>
    );
}
