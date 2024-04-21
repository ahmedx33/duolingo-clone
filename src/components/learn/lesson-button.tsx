"use client";

import React, { useEffect, useMemo, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { FaStar, FaCrown } from "react-icons/fa"; // Fixed import statement for FaCrown
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Challenge, ChallengeProgress, Lesson } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import axios from "axios";
import { Progress } from "@radix-ui/react-progress";

type ChallengeProgressWithChildren = ChallengeProgress & {
    challenge: Challenge & { lesson: Lesson };
};

export default function LessonButton({
    id,
    order,
    title,
    lessonsCount,
    challengeProgress,
    lessons,
}: Lesson & {
    lessonsCount?: number;
    challengeProgress: ChallengeProgressWithChildren[];
    lessons: Lesson[];
}) {
    const [practice,setPractice] = useState<number>(0)
    const icon = order === lessonsCount ? <FaCrown size={30} /> : <FaStar size={30} />;
    const marginLeft = order % 2 === 0 ? 50 : 0;
    const currentLesson = order === 1;
    const isLocked = order !== 1;
    // const { userId } = useSelector((state: RootState) => state.userProgress.value);

    const filterdChallengeProgress = useMemo(() => {
        return challengeProgress.filter((progress) => progress.challenge.lessonId === id);
    }, [challengeProgress, id]);

    const isCompleted = filterdChallengeProgress.every((progress) => progress ? progress.completed === true : false );
    const practiceCount = filterdChallengeProgress.filter((progress) => progress.completed === true).length;

    useEffect(() => {
        if (practiceCount === 1 || practiceCount === 2 || practiceCount === 3 ) {
            setPractice(prev => prev + 50)
        }
    }, [practiceCount])


    console.log(practice)
    return (
        <div
            className={cn("w-[100px] h-[100px] relative")}
            style={{
                marginLeft,
            }}
        >
            {currentLesson && (
                <div className="absolute uppercase z-30 bg-white border-[#E5E5E5] border-2 py-2 px-4 rounded-lg -top-5 left-[0.4rem] w-fit flex items-center justify-center animate-bounce text-[#58CC02] font-bold ">
                    Start
                    <div className="absolute -bottom-[20px] border-[10px] border-transparent border-t-white"></div>
                </div>
            )}

            { order === 1 ? (
                <CircularProgressbarWithChildren
                    value={practice }
                    styles={{
                        path: {
                            stroke: "#58CC02",
                            borderRadius: 100
                        },
                        trail: {
                            stroke: "#E5E5E5",
                        },
                        
                    }}
                >
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button size="rounded" className="w-[70px] h-[70px] border-b-8 active:border-b-0 active:border-0 bg-[#58CC02] border-[#46A302] hover:bg-[58CC02] hover:border-[#46A302]">
                                <div className="text-white">{icon}</div>
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
                        <Button size="rounded" className="w-[70px] h-[70px] border-b-8 bg-[#e5e5e5] border-[#AFAFAF] hover:bg-[#E5E5E5] hover:border-[#AFAFAF]">
                            <div className="text-[#AFAFAF]">{icon}</div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#F3F4F6] p-[15px] rounded-xl w-[300px]">
                        <DropdownMenuLabel className="capitalize font-bold text-[#9CA3B5] text-[1.2rem]">{title}</DropdownMenuLabel>
                        <DropdownMenuItem disabled className="!bg-[#F3F4F6]">
                            <Button className="text-[#F3F4F6] bg-[#B7B7B7] border-[#B7B7B7] hover:border-[#B7B7B7] hover:bg-[#B7B7B7] uppercase font-bold w-full p-5 active:border-b-4 cursor-default">
                                start
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )}
        </div>
    );
}
