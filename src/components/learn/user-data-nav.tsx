"use client"

import Image from "next/image";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function UserDataNav() {
    return (
        <nav className="min-w-[500px] max-w-[500px] h-screen py-9 pr-[12rem]">
            <Header />
        </nav>
    );
}

function Header() {
    const userProgress = useSelector((state: RootState) => state.userProgress)

    return (
        <section className="flex  items-center justify-around">
            <section>lang</section>
            <section className="flex items-center">
                <span>
                    <RiLightbulbFlashFill color="#1CB0F6" size={25} />
                </span>
                <span>
                    {userProgress.value.points}
                </span>
            </section>
            <section className="flex items-center">
                <span>
                    <FaHeart color="#FF4B4B" size={25} />
                </span>
                <span>
                    {userProgress.value.hearts}
                </span>
            </section>
        </section>
    );
}
