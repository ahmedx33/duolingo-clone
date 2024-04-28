import { getChallengeProgresses, getChallenges } from "@/db/queries/queries";
import { auth } from "@clerk/nextjs";
import dynamic from "next/dynamic";

const ChallengesList = dynamic(() => import("@/components/challenge/challenges-list"));

export default async function Page({ params: { lessonId } }: { params: { lessonId: string } }) {
    const { userId } = await auth();
    const [challenges, progresses] = await Promise.all([getChallenges({ lessonId, userId: userId! }), getChallengeProgresses({ userId: userId! })]);

    return (
        <main className="py-14 h-screen">
            <ChallengesList challenges={challenges} progresses={progresses} />
        </main>
    );
}
