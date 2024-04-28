"use client";

import Image from "next/image";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TiHeartFullOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Course, UserProgress } from "@prisma/client";
import Link from "next/link";
import Upgrade from "../components/learn/upgrade";
import DailyQuests from "../components/learn/daily-quests";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface HeaderProps {
    courseImageSrc: string;
    hearts: number;
    points: number;
}

export default function UserDataNav({
    hearts,
    points,
    activeCourse,
}: UserProgress & {
    activeCourse: Course;
}) {
    return (
        <aside className="sticky top-0 hidden w-96 flex-col gap-6 self-start sm:flex">
            <Header courseImageSrc={activeCourse.imageSrc} hearts={hearts} points={points} />
            <Upgrade />
            <DailyQuests />
        </aside>
    );
}

function Header({ courseImageSrc, hearts, points }: HeaderProps) {
    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, [router]);
    return (
        <section className="flex  items-center gap-7 mb-7">
            <Link href="/courses" className="w-fit h-fit overflow-hidden rounded-md p-3  hover:bg-[#F3F4F6]">
                <Image className="rounded-md" src={courseImageSrc} alt="course" width={36} height={28} />
            </Link>
            <section className="flex items-center gap-x-2 overflow-hidden rounded-md py-2 px-3  hover:bg-[#F3F4F6] cursor-default">
                <span>
                    <Image src="./svg/exp.svg" alt="exp" height={25} width={25} />
                </span>
                <span className="text-[#1CB0F6] font-bold">{points}</span>
            </section>
            <section className="flex items-center gap-x-2 overflow-hidden rounded-md py-2  px-3 hover:bg-[#F3F4F6] cursor-default">
                <span>
                    <Image src="./svg/heart.svg" alt="hearts" height={28} width={28} />
                </span>
                <span className="text-[#FF4B4B] font-bold">{hearts}</span>
            </section>
        </section>
    );
}
