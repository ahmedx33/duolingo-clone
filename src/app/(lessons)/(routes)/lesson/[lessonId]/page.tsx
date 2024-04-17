import { getChallenges } from "@/db/challenge";
import { lazy } from "react";

const ChallengesList = lazy(() => import("@/components/challenge/challenges-list"));
const ChallengeHeader = lazy(() => import("@/components/challenge/challenge-header"));

export default async function Page({ params: { lessonId } }: { params: { lessonId: string } }) {
    const challenges = await getChallenges({ lessonId });

    return (
        <main className="py-14 h-screen">
            <ChallengeHeader />
            <ChallengesList challenges={challenges} />
        </main>
    );
}
