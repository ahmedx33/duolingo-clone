import LessonButton from "@/components/learn/lesson-button";
import { prisma } from "@/lib/db";
import { Lesson } from "@prisma/client";

export default async function LessonsList({ lessons }: { lessons: Lesson[] }) {
    const challenges = await prisma.challenge.findMany()
    return (
        <main className="w-[550px] min-h-28 flex items-center flex-col gap-6">
            {lessons.map((lesson) => (
                <LessonButton key={lesson.id} {...lesson} lessonsCount={lessons.length} challenges={challenges} />
            ))}
        </main>
    );
}
