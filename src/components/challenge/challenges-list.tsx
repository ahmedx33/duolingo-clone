import { ChallengeOption, Challenge as ChallengeType } from "@prisma/client";
import Challenge from "./challenge";

interface ChallengesListProps {
    challenges: ChallengeType[];
    challengeOptions: ChallengeOption[]
}

export default function ChallengesList({ challenges, challengeOptions }: ChallengesListProps) {
    
    return (
        <main className="mx-auto w-fit mt-[10rem] ">
            <Challenge {...challenges[0]} challengeOptions={challengeOptions}/>

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
