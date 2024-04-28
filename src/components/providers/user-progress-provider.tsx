"use client";

import { mainUser } from "@/lib/features/user/user-progress-slice";
import { UserProgress } from "@prisma/client";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface UserProgerssProviderProps {
    children?: ReactNode;
    userProgress: UserProgress;
}

export default function UserProgressProvider({ userProgress, children }: UserProgerssProviderProps) {
    const [isMount, setIsMount] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsMount(true);

        if (isMount) dispatch(mainUser(userProgress));

        return () => {
            setIsMount(false);
        };
    }, [dispatch, isMount, userProgress]);

    return <>{children}</>;
}
