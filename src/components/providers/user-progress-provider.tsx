"use client";

import { mainUser } from "@/lib/features/user/user-progress-slice";
import { UserProgress } from "@prisma/client";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface UserProgerssProviderProps {
    children?: ReactNode;
    userProgress: UserProgress | null;
}

export default function UserProgressProvider({ userProgress, children }: UserProgerssProviderProps) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mainUser(userProgress));
    }, [dispatch, userProgress]);

    return <>{children}</>;
}
