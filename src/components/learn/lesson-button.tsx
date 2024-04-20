"use client";

import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { FaStar, FaCrown } from "react-icons/fa"; // Fixed import statement for FaCrown
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Challenge, Lesson } from "@prisma/client";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { revalidatePath } from "next/cache";

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
                    <DropdownMenuContent className={cn("bg-[#58CC02] p-[15px] rounded-xl w-[300px]", isLocked && "bg-[#F3F4F6]")}>
                        <DropdownMenuLabel className={cn("capitalize font-bold text-white text-[1.2rem]", isLocked && "text-[#9CA3AF]")}>{title}</DropdownMenuLabel>
                        <DropdownMenuItem disabled={isLocked} className={cn("w-full h-fit p-0 !bg-[#58CC02]", isLocked && "!bg-[#F3F4F6]")}>
                            {isLocked ? (
                                <Button  className="text-[#F3F4F6] bg-[#B7B7B7] border-[#B7B7B7] hover:border-[#B7B7B7] hover:bg-[#B7B7B7] uppercase font-bold w-full p-5 active:border-b-4 cursor-default">start</Button>
                            ) : (
                                <Link className="w-full" href={`/lesson/${id}`}>
                                    <Button className="text-[#58CC02] uppercase font-bold w-full p-5">start</Button>
                                </Link>
                            )}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CircularProgressbarWithChildren>
        </div>
    );
}
