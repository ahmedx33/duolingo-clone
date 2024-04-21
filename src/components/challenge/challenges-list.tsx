"use client";
import { ChallengeOption, ChallengeProgress, Challenge as ChallengeType } from "@prisma/client";
import Challenge from "./challenge";
import { useMemo, useState } from "react";
import Practice from "./practice";

export type ChallengeWithChildren = ChallengeType & {
    options?: ChallengeOption[];
    progresses?: ChallengeProgress[];
};

interface ChallengesListProps {
    challenges: ChallengeWithChildren[];
}

export default function ChallengesList({ challenges }: ChallengesListProps) {
    const [nextActiveChallenge, setNextActiveChallenge] = useState<number>(0);

    const notCompletedChallenges = challenges.map((challenge) => {
        return challenges.length
    });

    console.log(notCompletedChallenges);
    const activeChallenge = challenges[nextActiveChallenge];
    return (
        <main className="mx-auto w-fit mt-[10rem] ">
            {nextActiveChallenge === challenges.length ? (
                <Practice />
            ) : (
                <Challenge {...activeChallenge} challenges={challenges} setNextActiveChallenge={setNextActiveChallenge} lastChallengeIndex={challenges.length - 1} />
            )}
        </main>
    );
}
