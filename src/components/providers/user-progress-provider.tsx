"use client";

import { mainUser } from "@/lib/features/user/user-progress-slice";
import { useAppDispatch } from "@/lib/hooks";
import { UserProgress } from "@prisma/client";
import { ReactNode, useEffect, useState } from "react";

interface UserProgerssProviderProps {
    children?: ReactNode;
    userProgress: UserProgress | null;
}

export default function UserProgressProvider({ userProgress, children }: UserProgerssProviderProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(mainUser(userProgress));
    }, [dispatch, userProgress]);

    return <>{children}</>;
}
