"use client";

import Image from "next/image";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { TiHeartFullOutline } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { Course, UserProgress } from "@prisma/client";
import Link from "next/link";

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
        <nav className="min-w-[500px] max-w-[500px] h-screen py-9 pr-[12rem]">
            <Header courseImageSrc={activeCourse.imageSrc} hearts={hearts} points={points} />
        </nav>
    );
}

function Header({ courseImageSrc, hearts, points }: HeaderProps) {
    return (
        <section className="flex  items-center justify-around">
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
