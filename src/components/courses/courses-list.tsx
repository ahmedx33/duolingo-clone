import { prisma } from "@/db/db";
import { Course } from "./course";
import { getCourses } from "@/db/queries/queries";

export default async function CoursesList() {
    const courses = await getCourses()
    return (
        <main className="p-7 flex items-center justify-center ">
            {courses.map((course) => (
                <Course key={course.id} id={course.id} title={course.title} imageSrc={course.imageSrc} />
            ))}
        </main>
    );
}
