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
        <main className="fixed inset-0 z-30 flex flex-col bg-white transition duration-300">
            <Sidebar />
            <article className="flex justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
                {children}
                <UserDataNav {...userProgress} activeCourse={activeCourse as Course} />
            </article>
        </main>
    );
}
