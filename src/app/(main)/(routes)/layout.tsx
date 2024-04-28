import Sidebar from "@/layout/sidebar";
import UserDataNav from "@/layout/user-data-nav";
import { prisma } from "@/db/db";
import { currentUser } from "@clerk/nextjs";
import { Course } from "@prisma/client";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
    const user = await currentUser();
    const userProgress = await prisma.userProgress.findUnique({
        where: {
            userId: user?.id,
        },
    });

    if (!userProgress) return redirect("/courses");

    const activeCourse = await prisma.course.findUnique({
        where: {
            id: userProgress?.activeCourseId as string,
        },
    });

    return (
        <main className="flex items-start overflow-x-hidden w-full h-full">
            <Sidebar />
            <article className="flex items-start w-full h-screen" >
                {children}
                <UserDataNav {...userProgress} activeCourse={activeCourse as Course} />
            </article>
        </main>
    );
}
