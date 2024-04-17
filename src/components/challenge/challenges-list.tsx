
import { Challenge as ChallengeType } from "@prisma/client";
import { useState } from "react";
import { Button } from "../ui/button";
import Challenge from "./challenge";

interface ChallengesListProps {
    challenges: ChallengeType[];
}

export default function ChallengesList({ challenges }: ChallengesListProps) {
    
    return (
        <main className="mx-auto w-fit mt-[10rem] ">
            <Challenge {...challenges[0]} />

            {/* <footer>
                <Button
                   
                    variant="primaryGreen"
                    className="text-white "
                >
                    Check
                </Button>
            </footer> */}
        </main>
    );
}
