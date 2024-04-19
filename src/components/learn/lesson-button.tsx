"use client";

import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { FaStar, FaCrown } from "react-icons/fa"; // Fixed import statement for FaCrown
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Challenge, Lesson } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";

export default function LessonButton({
    id,
    order,
    title,
    lessonsCount,
    challenges,
}: Lesson & {
    lessonsCount?: number;
    challenges: Challenge[];
}) {
    const icon = order === lessonsCount ? <FaCrown size={30} /> : <FaStar size={30} />;
    const marginLeft = order % 2 === 0 ? 50 : 0;
    const currentLesson = order === 1;
    const isLocked = order !== 1;

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

            <CircularProgressbarWithChildren
                value={0}
                styles={{
                    path: {
                        stroke: "#58CC02",
                    },
                    trail: {
                        stroke: "#E5E5E5",
                    },
                }}
            >
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button
                            size="rounded"
                            className={cn(
                                "w-[70px] h-[70px] border-b-8 active:border-b-0 active:border-0 bg-[#58CC02] border-[#46A302] hover:bg-[58CC02] hover:border-[#46A302]",
                                isLocked ? "bg-[#e5e5e5] border-[#AFAFAF] hover:bg-[#E5E5E5] hover:border-[#AFAFAF]" : ""
                            )}
                        >
                            <div className={cn(isLocked ? "text-[#AFAFAF]" : "text-white")}>{icon}</div>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-[#58CC02]">
                        <DropdownMenuItem className="w-fit h-fit p-0 !bg-[#58CC02]">
                            <Link href={`/lesson/${id}`}>
                                <Button className="text-[#58CC02] uppercase font-bold ">start</Button>
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CircularProgressbarWithChildren>
        </div>
    );
}
