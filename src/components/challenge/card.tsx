"use client";

import { getChallengeOption } from "@/db/challenge";
import { ChallengeOption as ChallengeOptionType } from "@prisma/client";
import { Button } from "../ui/button";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";


export function Card({
    id,
    type,
    text,
    imageSrc,
    correct,
    setSelected,
    selected
}: ChallengeOptionType & {
    type: "ASSIST" | "SELECT";
    selected: boolean,
    setSelected: Dispatch<SetStateAction<string | undefined>>
}) {

    return (
        <main>
            <Button
                onClick={() => {
                    setSelected(id);
                }}
                className={cn(
                    "flex flex-col items-center h-[235px] w-[200px] border-2 rounded-xl border-b-4 p-4 lg:p-6 cursor-pointer ",
                    selected ? "border-sky-300 bg-sky-100 hover:bg-sky-100" : ""
                )}
            >
                <Image src={imageSrc as string} alt="pic" width={50} height={50} />
                <p>{text}</p>
            </Button>
        </main>
    );
}
