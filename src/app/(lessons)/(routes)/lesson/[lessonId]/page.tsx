import { getChallenges } from "@/db/queries/queries";
import { prisma } from "@/db/db";
import { auth } from "@clerk/nextjs";
import { lazy } from "react";

const ChallengesList = lazy(() => import("@/components/challenge/challenges-list"));

export default async function Page({ params: { lessonId } }: { params: { lessonId: string } }) {
    const { userId } = await auth();
    const challenges = await getChallenges({ lessonId, userId: userId as string });
    const progresses = await prisma.challengeProgress.findMany({
        where: {
            userId: userId as string,
        },
    });
    
    return (
        <main className="py-14 h-screen">
            <ChallengesList challenges={challenges} progresses={progresses} />
        </main>
    );
}
