import LessonButton from "@/components/learn/lesson-button";
import { Lesson } from "@prisma/client";

export default function LessonsList({ lessons }: { lessons: Lesson[] }) {
    console.log(lessons);
    return (
        <main className="w-[550px] min-h-28 flex items-center flex-col gap-6">
            {lessons.map((lesson) => (
                <LessonButton key={lesson.id} {...lesson} lessonsCount={lessons.length} />
            ))}
        </main>
    );
}
