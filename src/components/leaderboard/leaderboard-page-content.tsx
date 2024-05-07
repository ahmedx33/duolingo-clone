import { ActiveUsersList } from "@/components/leaderboard/active-users-list";
import { LeaderboardHeader } from "@/components/leaderboard/leaderboard-header";
import { BottomLinks } from "@/components/learn/bottom-links";

export function LeaderboardPageContent() {
    return (
        <main className="w-full h-screen flex flex-col items-center py-5">
            <LeaderboardHeader />
            <ActiveUsersList />
            <BottomLinks />
        </main>
    );
}
