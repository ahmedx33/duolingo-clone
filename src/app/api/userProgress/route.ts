import { prisma } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {

        const user = await currentUser();

        if (!currentUser) return new NextResponse("Unauthorized", { status: 401 });

        const { courseId } = await req.json()

        const newUserProgress = await prisma.userProgress.create({
            data: {
                userId: user?.id as string,
                userName: `${user?.firstName}`,
                userImageSrc: user?.imageUrl as string,
                activeCourseId: courseId
            }
        });

        return NextResponse.json(newUserProgress, { status: 200 });
    } catch (err) {
        return new NextResponse(`${err}`, { status: 400 });
    }
};
