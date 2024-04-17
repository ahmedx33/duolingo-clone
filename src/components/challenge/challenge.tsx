"use client";
import { getChallengeOption } from "@/db/challenge";
import { ChallengeOption, Challenge as ChallengeType } from "@prisma/client";
import { Card } from "./card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Challenge({ id, type, question, order }: ChallengeType) {
    const [challengeOptions, setChallengeOptions] = useState<ChallengeOption[]>();
    const [selected, setSelected] = useState<string>();

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        const fetchChallengeOptions = async () => {
            try {
                const { data } = await axios.get(`/api/challengeOption/${id}`, { signal });

                console.log(data)
                setChallengeOptions(data);
            } catch (err) {
                if (axios.isCancel(err)) {
                    console.error(err);
                    console.log("fetch aborted");
                }
            }
        };

        fetchChallengeOptions();

        return () => {
            abortController.abort();
        };
    }, [id]);

    return (
        <div>
            <h1 className="mb-[27px] text-[2rem] font-semibold text-[#404040]">{question}</h1>

            <div className="flex items-center gap-2">
                {challengeOptions?.map((challengeOption) => (
                    <Card key={challengeOption.id} {...challengeOption} type={type} setSelected={setSelected} selected={selected === challengeOption.id}  />
                ))}
            </div>
        </div>
    );
}
