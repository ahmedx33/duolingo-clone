"use client";

import { TiHeartFullOutline } from "react-icons/ti";
import { Progress } from "@/components/ui/progress";

import { CloseButton } from "./close-button";
import { Dispatch, SetStateAction, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface ChallengeHeaderProps {
    practice: number;
}

export default function ChallengeHeader({ practice }: ChallengeHeaderProps) {
    // const { hearts } = useSelector((state: RootState) => state.userProgress.value);
    return (
        <nav className="flex items-center w-full mx-auto gap-x-5 absolute top-[70px] left-1/2 right-1/2 -translate-x-1/2 px-4">
            <CloseButton />
            <Progress value={practice} />
            <div className="flex items-center gap-x-2">
                <TiHeartFullOutline color="#FF4B4B" size={30} />
                <span className="text-[#FF4B4B] font-semibold">{"hearts"}</span>
            </div>
        </nav>
    );
}
