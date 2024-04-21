import Sidebar from "@/components/learn/sidebar";
import UserDataNav from "@/components/learn/user-data-nav";
import UserProgerssProvider from "@/components/providers/user-progress-provider";
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
        <main className="flex items-start overflow-hidden">
            <Sidebar />
            {children}
            <UserDataNav {...userProgress} activeCourse={activeCourse as Course} />
        </main>
    );
}
