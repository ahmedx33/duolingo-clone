import Sidebar from "@/components/learn/sidebar";
import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
    const user = await currentUser();
    const userProgress = await prisma.userProgress.findUnique({
        where: {
            userId: user?.id,
        },
    });

    if (!userProgress) return redirect("/courses")

    return (
        <main className="flex items-start">
            <Sidebar />
            {children}
        </main>
    );
}
