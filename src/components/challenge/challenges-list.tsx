"use client"
import { ChallengeOption, Challenge as ChallengeType } from "@prisma/client";
import Challenge from "./challenge";
import { useState } from "react";

interface ChallengesListProps {
    challenges: ChallengeType[];
    challengeOptions: ChallengeOption[]
}

export default function ChallengesList({ challenges, challengeOptions }: ChallengesListProps) {
    const [nextActiveChallenge, setNextActiveChallenge] = useState<number>(0) 
    
    return (
        <main className="mx-auto w-fit mt-[10rem] ">
            <Challenge {...challenges[nextActiveChallenge]} challengeOptions={challengeOptions} setNextActiveChallenge={setNextActiveChallenge} nextActiveChallenge={nextActiveChallenge} lastChallengeIndex={challenges.length - 1} />
        </main>
    );
}
