"use client";

import Image from "next/image";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TiHeartFullOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Course, UserProgress } from "@prisma/client";
import Link from "next/link";
import Upgrade from "./upgrade";
import DailyQuests from "./daily-quests";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface HeaderProps {
    courseImageSrc: string;
    hearts: number;
    points: number;
}

export default function UserDataNav({
    userId,
    userName,
    userImageSrc,
    hearts,
    points,
    activeCourse,
}: UserProgress & {
    activeCourse: Course;
}) {
    return (
        <nav className="min-w-[500px] max-w-[500px] h-screen py-9 pr-[12rem] flex items-center flex-col">
            <Header courseImageSrc={activeCourse.imageSrc} hearts={hearts} points={points} />
            <Upgrade />
            <DailyQuests />
        </nav>
    );
}

function Header({ courseImageSrc, hearts, points }: HeaderProps) {
    const router = useRouter()

    useEffect(() => {
        router.refresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <section className="flex  items-center gap-x-20 mb-7">
            <Link href="/courses" className="w-fit h-fit overflow-hidden rounded-md">
                <Image src={courseImageSrc} alt="course" width={30} height={30} />
            </Link>
            <section className="flex items-center gap-x-2">
                <span>
                    <RiLightbulbFlashFill color="#1CB0F6" size={25} />
                </span>
                <span className="text-[#1CB0F6]">{points}</span>
            </section>
            <section className="flex items-center gap-x-2">
                <span>
                    <TiHeartFullOutline color="#FF4B4B" size={25} />
                </span>
                <span className="text-[#FF4B4B]">{hearts}</span>
            </section>
        </section>
    );
}
