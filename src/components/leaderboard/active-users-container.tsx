"use client";

import { UserProgress } from "@prisma/client";
import { LeaderboardAvatar } from "./leaderboard-avatar";
import { useState } from "react";
import { Slider } from "./slider";

interface ActiveUsersContainerProps {
    activeUsers: UserProgress[];
}

export function ActiveUsersContainer({ activeUsers }: ActiveUsersContainerProps) {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [usersPerPage, setUsersPerPage] = useState<number>(5);

    const lastUsersIndex = currentPage * usersPerPage;
    const firstUsersIndex = lastUsersIndex - usersPerPage;
    const currentActiveUsersPage = activeUsers.slice(firstUsersIndex, lastUsersIndex);

    return (
        <div className="w-[80%] p-5 gap-y-2 max-md:w-full max-md:px-0 max-md:py-2">
            <Slider />
            {currentActiveUsersPage.map((user, idx) => (
                <LeaderboardAvatar key={user.userId} {...user} order={idx + 1} />
            ))}
        </div>
    );
}
