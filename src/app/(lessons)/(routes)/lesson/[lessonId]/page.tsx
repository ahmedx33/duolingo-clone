import Challenge from "@/components/challenge/challenge";
import ChallengesList from "@/components/challenge/challenges-list";
import ChallengeHeader from "@/components/challenge/header";
import { getChallenges } from "@/db/challenge";

export default async function Page({ params: { lessonId } }: { params: { lessonId: string } }) {
    const challenges = await getChallenges({ lessonId });

    return (
        <main className="py-14 h-screen">
            <ChallengeHeader />
           <ChallengesList challenges={challenges}/>
        </main>
    );
}
