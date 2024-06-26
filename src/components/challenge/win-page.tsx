"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Reward from "./reward";
import { useAudio } from "react-use";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { mainUser } from "@/lib/features/user/user-progress-slice";

export default function Practice() {
    const [audio, _, controls] = useAudio({
        src: "/sounds/level-complete.mp3",
    });

    const { userId, hearts, points, activeCourseId, userImageSrc, userName } = useAppSelector((state) => state.userProgress.value);
    const dispatch = useAppDispatch();
    useEffect(() => {
        controls.play();

        return () => {
            controls.pause();
            controls.seek(0);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const updateUserProgress = async () => {
        dispatch(
            mainUser({
                userId,
                hearts,
                points: points + 10,
                activeCourseId,
                userImageSrc,
                userName,
            })
        );
        try {
            const res = await axios.patch("/api/userProgress/", { userId, hearts, points: points + 10 });
            console.log(res);
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong!");
        }
    };

    return (
        <main>
            {audio}
            <h1 className="text-center text-yellow-400 text-[2rem] font-bold my-3">Lesson Complete!</h1>
            <section className="flex flex-wrap justify-center gap-5">
                <Reward title="Total XP" value="10" />
            </section>

            <footer className="border-gray-200 sm:border-t-2 sm:p-10 absolute bottom-0 left-0 w-full text-right">
                <Link href="/learn">
                    <Button onClick={updateUserProgress} variant="primaryGreen" className="uppercase font-bold text-white sm:min-w-[150px] sm:max-w-fit p-6">
                        Continue
                    </Button>
                </Link>
            </footer>
        </main>
    );
}
