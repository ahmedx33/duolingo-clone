import { getUserProgress } from "@/db/queries/queries";
import { ActiveUsersContainer } from "./active-users-container";

export async function ActiveUsersList() {
    const activeUsers = await getUserProgress();

    return <ActiveUsersContainer activeUsers={activeUsers} />;
}
