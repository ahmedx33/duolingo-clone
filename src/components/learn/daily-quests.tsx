"use client"

import Link from "next/link";

import { Progress } from "../ui/progress";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import Image from "next/image";


export default function DailyQuests() {
    const currentUser = useSelector((state: RootState) => state.userProgress.value)
    const totalPoints = currentUser?.points

    return (
        <main className="border-[#DDDDDD] border-2 rounded-xl py-3 px-5 flex flex-col  min-fit w-[350px] mb-6">
            <h1 className="mb-4 flex items-center justify-between">
                <span className="text-[#4B4B4B] font-bold text-[1.1rem]">Daily Quests</span>
                <Link href="/quests" className="uppercase text-[#1CB0F6] font-bold">
                    View All
                </Link>
            </h1>
            <section className="mb-3">
            <h1 className="ml-[55px] text-[#4B4B4B] font-bold">Earn 100 XP</h1>
            <span className="w-full flex items-center gap-x-3">
                <Image src="/svg/quest.svg" alt="quest" width={40} height={40} />
                <Progress value={totalPoints} className="bg-[#FACC15]" />
            </span>
        </section>
        </main>
    );
}