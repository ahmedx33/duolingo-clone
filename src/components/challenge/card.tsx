"use client";

import { getChallengeOption } from "@/db/challenge";
import { ChallengeOption as ChallengeOptionType } from "@prisma/client";
import { Button } from "../ui/button";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { useAudio, useKey } from "react-use";

export function Card({
    id,
    type,
    text,
    imageSrc,
    correct,
    setSelected,
    selected,
    keys,
    audioSrc,
}: ChallengeOptionType & {
    type: "ASSIST" | "SELECT";
    keys: number;
    selected: boolean;
    setSelected: Dispatch<SetStateAction<string | undefined>>;
}) {
    const [audio, _, controls] = useAudio({
        src: audioSrc as string,
    });


    const selectHandler = () => {
        controls.play();
        setSelected(id);
    }

    useKey(String(keys), selectHandler, { event: "keydown" });

    return (
        <main>
            {audio}
            <Button
                onClick={selectHandler}
                className={cn(
                    "flex flex-col items-center gap-y-7 h-[235px] w-[200px] border-2 rounded-xl border-b-4 p-4 lg:p-6 cursor-pointer ",
                    selected ? "border-sky-300 bg-sky-100 hover:bg-sky-100" : ""
                )}
            >
                <Image src={imageSrc as string} alt="pic" width={100} height={100} />
                <div className="flex items-center justify-between w-full">
                    <p className="text-[#404040] font-bold text-[1.1rem]">{text}</p>
                    <div className={cn("text-[#A3A3A3] border-2 border-[#b1b8c2]  px-2 rounded-lg", selected ? "border-sky-300 text-sky-500" : "")}>{keys}</div>
                </div>
            </Button>
        </main>
    );
}
