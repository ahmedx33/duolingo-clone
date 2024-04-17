"use client";
import { getChallengeOption } from "@/db/challenge";
import { ChallengeOption, Challenge as ChallengeType } from "@prisma/client";
import { Card } from "./card";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Challenge({
    id,
    type,
    question,
    order,
    challengeOptions,
}: ChallengeType & {
    challengeOptions: ChallengeOption[];
}) {
    const [selected, setSelected] = useState<string>();
    const getCurrentChallengeOptions = useMemo(() => {
        return challengeOptions.filter((challengeOption) => challengeOption.challengeId === id);
    }, [challengeOptions, id]);

    console.log(getCurrentChallengeOptions);

    return (
        <div>
            <h1 className="mb-[27px] text-[2rem] font-semibold text-[#404040]">{question}</h1>

            <div className="flex items-center gap-2">
                {challengeOptions?.map((challengeOption, idx) => (
                    <Card key={challengeOption.id} {...challengeOption} type={type} setSelected={setSelected} selected={selected === challengeOption.id} keys={idx + 1} />
                ))}
            </div>
        </div>
    );
}
