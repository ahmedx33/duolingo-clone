"use client";
import { ChallengeOption, Challenge as ChallengeType } from "@prisma/client";
import Challenge from "./challenge";
import { useState } from "react";

interface ChallengesListProps {
    challenges: ChallengeType[];
    challengeOptions: ChallengeOption[];
}

export default function ChallengesList({ challenges, challengeOptions }: ChallengesListProps) {
    const [nextActiveChallenge, setNextActiveChallenge] = useState<number>(0);
    const activeChallenge = challenges[nextActiveChallenge];
    return (
        <main className="mx-auto w-fit mt-[10rem] ">
            {nextActiveChallenge === challenges.length ? (
                <h1>practice </h1>
            ) : (
                <Challenge
                    {...activeChallenge}
                    challenges={challenges}
                    challengeOptions={challengeOptions}
                    setNextActiveChallenge={setNextActiveChallenge}
                    lastChallengeIndex={challenges.length - 1}
                />
            )}
        </main>
    );
}
