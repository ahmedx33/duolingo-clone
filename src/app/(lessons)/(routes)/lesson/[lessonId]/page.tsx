import StoreProvider from "@/components/providers/store-provider";
import UserProgressProvider from "@/components/providers/user-progress-provider";
import { prisma } from "@/db/db";
import { getChallengeProgresses, getChallenges } from "@/db/queries/queries";
import { auth } from "@clerk/nextjs";
import dynamic from "next/dynamic";

const ChallengesList = dynamic(() => import("@/components/challenge/challenges-list"));

export default async function Page({ params: { lessonId } }: { params: { lessonId: string } }) {
    const { userId } = await auth();
    const [challenges, progresses] = await Promise.all([getChallenges({ lessonId, userId: userId! }), getChallengeProgresses({ userId: userId! })]);
    if (!userId) return;
    const userProgress = await prisma.userProgress.findFirst({
        where: {
            userId,
        },
    });

    return (
        <main className="py-14 h-screen flex flex-col items-center">
            <StoreProvider>
                <UserProgressProvider userProgress={userProgress}>
                    <ChallengesList challenges={challenges} progresses={progresses} />
                </UserProgressProvider>
            </StoreProvider>
        </main>
    );
}
