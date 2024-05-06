import { prisma } from "@/db/db";
import { Course } from "./course";
import { getCourses } from "@/db/queries/queries";

export default async function CoursesList() {
    const courses = await getCourses()
    return (
        <main className="p-7 flex flex-col items-center justify-center ">
            <h1 className="mb-5 text-3xl font-semibold">I want to learn...</h1>
            {courses.map((course) => (
                <Course key={course.id} id={course.id} title={course.title} imageSrc={course.imageSrc} />
            ))}
        </main>
    );
}
