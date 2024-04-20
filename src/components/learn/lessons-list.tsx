import LessonButton from "@/components/learn/lesson-button";
import { getChallenges } from "@/db/challenge";
import { prisma } from "@/db/db";
import { auth } from "@clerk/nextjs";
import { Lesson } from "@prisma/client";
import { revalidatePath } from "next/cache";

export default async function LessonsList({ lessons }: { lessons: Lesson[] }) {
    const userProgress = await auth()
    const challengeProgress = await prisma.challengeProgress.findMany({
        where: {
            userId: userProgress.userId as string,
        },
        include: {
            challenge: {
                include: {
                    lesson: true
                }
            }
        }
    });


    revalidatePath("/learn")
    revalidatePath("/leaderstats")
    return (
        <main className="w-[550px] min-h-28 flex items-center flex-col gap-6">
            {lessons.map((lesson) => (
                <LessonButton key={lesson.id} {...lesson} lessonsCount={lessons.length} challengeProgress={challengeProgress} lessons={lessons} />
            ))}
        </main>
    );
}
