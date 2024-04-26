import { getUserProgress } from "@/db/queries/queries";
import { LeaderboardAvatar } from "./leaderboard-avatar";

export async function ActiveUsersList() {
    const activeUsers = await getUserProgress();

    return (
        <div className="w-[80%] p-5 gap-y-2">
            {activeUsers.map((user, idx) => (
                <LeaderboardAvatar key={user.userId} imgSrc={user.userImageSrc} userName={user.userName} points={user.points} order={idx + 1} />
            ))}
        </div>
    );
}
