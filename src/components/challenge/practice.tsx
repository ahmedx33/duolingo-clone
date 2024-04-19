"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Reward from "./components/reward";
import { useAudio } from "react-use";
import { useEffect } from "react";

export default function Practice() {
    const [audio, _, controls] = useAudio({
        src: "/sounds/level-complete.mp3",
    });

    controls.play()

    const timeout = setTimeout(() => {
        controls.mute()
    }, 200)


    clearTimeout(timeout)


    return (
        <main>
            {audio}
            <h1 className="text-center text-yellow-400 text-[2rem] font-bold my-3">Lesson Complete!</h1>
            <section className="flex flex-wrap justify-center gap-5">
                <Reward title="Total XP" value="10" />
            </section>

            <footer className="border-gray-200 sm:border-t-2 sm:p-10 absolute bottom-0 left-0 w-full text-right">
                <Link href="/learn">
                    <Button variant="primaryGreen" className="uppercase font-bold text-white sm:min-w-[150px] sm:max-w-fit p-6">
                        Continue
                    </Button>
                </Link>
            </footer>
        </main>
    );
}
