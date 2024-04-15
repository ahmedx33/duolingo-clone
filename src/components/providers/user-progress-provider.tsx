"use client";

import { mainUser } from "@/lib/features/user/user-progress";
import { UserProgress } from "@prisma/client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface UserProgerssProviderProps {
    userProgress: UserProgress;
}

export default function UserProgerssProvider({ userProgress }: UserProgerssProviderProps) {
    const [isMount, setIsMount] = useState<boolean>(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setIsMount(true);

        if (isMount) dispatch(mainUser(userProgress));

        return () => {
            setIsMount(false);
        };
    }, [dispatch, isMount, userProgress]);
    
    return null;
}
