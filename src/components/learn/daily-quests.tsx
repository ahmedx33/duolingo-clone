"use client"

import Link from "next/link";

import { Progress } from "../ui/progress";

import { BsFillLightningChargeFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

interface QuestProgressProps {
    value: number;
    totalPoints: number
}

export default function DailyQuests() {
    const currentUser = useSelector((state: RootState) => state.userProgress.value)
    const totalPoints = currentUser?.points

    return (
        <main className="border-[#DDDDDD] border-2 rounded-xl py-3 px-5 flex flex-col  min-h-48 w-[350px] mb-6">
            <h1 className="mb-4 flex items-center justify-between">
                <span className="text-[#4B4B4B] font-bold text-[1.1rem]">Daily Quests</span>
                <Link href="/quests" className="uppercase text-[#1CB0F6] font-bold">
                    View All
                </Link>
            </h1>
            <QuestProgress value={20} totalPoints={totalPoints}/>
            <QuestProgress value={50} totalPoints={totalPoints}/>
            <QuestProgress value={100} totalPoints={totalPoints}/>
            <QuestProgress value={500} totalPoints={totalPoints}/>
            <QuestProgress value={1000} totalPoints={totalPoints}/>
        </main>
    );
}

function QuestProgress({ value, totalPoints }: QuestProgressProps) {
    return (
        <section className="mb-3">
            <h1 className="ml-[40px] text-[#4B4B4B] font-bold">Earn {value} XP</h1>
            <span className="w-full flex items-center gap-x-3">
                <BsFillLightningChargeFill size={30} color="#F7C100" />
                <Progress value={totalPoints} className="h-3" />
            </span>
        </section>
    );
}
