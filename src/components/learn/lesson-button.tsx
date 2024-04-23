"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { FaStar, FaCrown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Challenge, ChallengeProgress, Lesson } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

type ChallengeWithChildren = Challenge & {
    progresses: ChallengeProgress[];
};

type LessonWithChildren = Lesson & {
    challenges?: (Challenge & { progresses: ChallengeProgress })[];
};

export default function LessonButton({
    id,
    order,
    title,
    lessonsCount,
    isCompleted,
    isActiveLesson,
}: Lesson & {
    lessonsCount?: number;
    isCompleted: boolean;
    isActiveLesson: boolean;
}) {
    const icon = order === lessonsCount ? <FaCrown size={30} /> : <FaStar size={30} />;
    const marginLeft = order % 2 === 0 ? 50 : 0;

    // const currentChallenge = challenges.find((challenge) => challenge.lessonId === id);
    // const currentProgresses = progresses.filter((progress) => progress.challengeId === currentChallenge?.id);

    // const challengeStatus = useMemo(() => {
    //     if (!currentChallenge || !progresses || progresses?.length === 0)
    //         return {
    //             percentage: 0,
    //             isCompleted: false,
    //         };

    //     const completedChallenges = currentProgresses?.filter((challenge) => challenge.completed);
    //     const isCompleted = currentProgresses?.every((progress) => progress.completed);
    //     console.log(currentProgresses);

    //     const challengePercentage = Math.round(completedChallenges?.length / challenges.length) * 100;

    //     return {
    //         percentage: challengePercentage,
    //         isCompleted,
    //     };
    // }, [challenges.length, currentChallenge, currentProgresses, progresses]);

    console.log();

    return (
        <div
            className={cn("w-[100px] h-fit relative")}
            style={{
                marginLeft,
            }}
        >
            {isActiveLesson && (
                <div className="absolute uppercase z-30 bg-white border-[#E5E5E5] border-2 py-2 px-4 rounded-lg -top-5 left-[0.4rem] w-fit flex items-center justify-center animate-bounce text-[#58CC02] font-bold ">
                    Start
                    <div className="absolute -bottom-[20px] border-[10px] border-transparent border-t-white"></div>
                </div>
            )}

            {isActiveLesson ? (
                <CircularProgressbarWithChildren
                    value={0}
                    styles={{
                        path: {
                            stroke: "#58CC02",
                            strokeLinecap: "round",
                            borderRadius: "50%",
                        },
                        trail: {
                            stroke: "#E5E5E5",
                        },
                    }}
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button size="rounded" className="w-[70px] h-[70px] border-b-8 active:border-b-0 active:border-0 bg-[#58CC02] border-[#46A302] hover:bg-[58CC02] hover:border-[#46A302]">
                                <div className="text-white"> {icon}</div>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#58CC02] p-[15px] rounded-xl w-[300px]">
                            <DropdownMenuLabel className="capitalize font-bold text-white text-[1.2rem]">{title}</DropdownMenuLabel>
                            <DropdownMenuItem className="w-full h-fit p-0 !bg-[#58CC02]">
                                <Link className="w-full" href={`/lesson/${id}`}>
                                    <Button className="text-[#58CC02] uppercase font-bold w-full p-5">start</Button>
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </CircularProgressbarWithChildren>
            ) : (
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button
                            size="rounded"
                            className={cn(
                                "w-[70px] h-[70px] border-b-8 bg-[#e5e5e5] border-[#AFAFAF] hover:bg-[#E5E5E5] hover:border-[#AFAFAF]",
                                isCompleted && "bg-[#58CC02] border-[#46A302] hover:bg-[58CC02] hover:border-[#46A302]"
                            )}
                        >
                            <div className="text-[#AFAFAF]">{isCompleted ? <FaCheck size={30} color="white" /> : icon}</div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className={cn("bg-[#F3F4F6] p-[15px] rounded-xl w-[300px]", isCompleted && "bg-[#58CC02]")}>
                        <DropdownMenuLabel className={cn("capitalize font-bold text-[#9CA3B5] text-[1.2rem]", isCompleted && "text-white")}>{title}</DropdownMenuLabel>
                        <DropdownMenuItem disabled={!isCompleted} className={cn("!bg-[#F3F4F6]", isCompleted && "!bg-[#58CC02]")}>
                            <Link className="w-full" href={isCompleted ? `/lesson/${id}` : ""}>
                                <Button
                                    className={cn(
                                        "text-[#F3F4F6] bg-[#B7B7B7] border-[#B7B7B7] hover:border-[#B7B7B7] hover:bg-[#B7B7B7] uppercase font-bold w-full p-5 active:border-b-4 cursor-default",
                                        isCompleted && "text-[#58CC02] bg-white border-[#E5E5E5] hover:bg-[#E5E5E5] hover:border-[#CECECE]  cursor-pointer"
                                    )}
                                >
                                    start
                                </Button>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    );
}
