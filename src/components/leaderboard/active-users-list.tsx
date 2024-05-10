import { getUserProgress } from "@/db/queries/queries";
import { ActiveUsersContainer } from "./active-users-container";
import { revalidatePath } from "next/cache";

export async function ActiveUsersList() {
    const activeUsers = await getUserProgress();

    revalidatePath("/leaderboard")
    
    return <ActiveUsersContainer activeUsers={activeUsers} />;
}
