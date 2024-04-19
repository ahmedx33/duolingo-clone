import { getChallengeOption, getChallenges } from "@/db/challenge";
import { lazy } from "react";

const ChallengesList = lazy(() => import("@/components/challenge/challenges-list"));
const ChallengeHeader = lazy(() => import("@/components/challenge/challenge-header"));

export default async function Page({ params: { lessonId } }: { params: { lessonId: string } }) {
    const [challenges, challengeOptions] = await Promise.all([getChallenges({ lessonId }), getChallengeOption()]);

    return (
        <main className="py-14 h-screen">
            <ChallengesList challenges={challenges} challengeOptions={challengeOptions} />
        </main>
    );
}
