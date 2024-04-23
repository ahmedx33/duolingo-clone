import LessonButton from "@/components/learn/lesson-button";
import { getChallenges } from "@/db/queries/queries";
import { prisma } from "@/db/db";
import { auth } from "@clerk/nextjs";
import { Challenge, ChallengeProgress, Lesson } from "@prisma/client";
import { revalidatePath } from "next/cache";

type LessonWithChildren = Lesson & {
    challenges?: (Challenge & { progresses: ChallengeProgress[] })[];
};

export default async function LessonsList({ lessons }: { lessons: LessonWithChildren[] }) {
    const user = await auth();

    const completedLessons = lessons.map((lesson) => {
        if (lesson.challenges?.length === 0) return { ...lesson, completed: false };

        const allCompletedChallenges = lesson.challenges?.every((challenge) => {
            return challenge.progresses && challenge.progresses.length > 0 && challenge.progresses.every((progress) => progress.completed);
        });

        return { ...lesson, completed: allCompletedChallenges };
    });

    const activeLesson = lessons.find((lesson) => {
        console.log(lesson)
        return lesson.challenges?.some((challenge) => {
            return challenge.progresses.length === 0;
        });
    });

    revalidatePath("/learn");
    revalidatePath("/leaderstats");
    return (
        <main className="w-[550px] min-h-28 flex items-center flex-col gap-6">
            {completedLessons.map((lesson) => (
                <LessonButton key={lesson.id} {...lesson} lessonsCount={lessons.length} isCompleted={lesson.completed!} isActiveLesson={activeLesson?.id === lesson.id} />
            ))}
        </main>
    );
}
