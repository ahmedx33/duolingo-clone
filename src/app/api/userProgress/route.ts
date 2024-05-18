import { prisma } from "@/db/db";
import { currentUser } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
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

        revalidatePath("/learn")
        revalidatePath("/leaderstats")
        revalidatePath("/shop")

        return NextResponse.json(newUserProgress, { status: 200 });
    } catch (err) {
        return new NextResponse(`${err}`, { status: 400 });
    }
};


export const PATCH = async (req: NextRequest) => {
    try {
        const { userId, hearts, points } = await req.json()

        const res = await prisma.userProgress.update({
            where: {
                userId
            },
            data: {
                userId,
                hearts: Math.min(hearts, 5),
                points: points
            }
        })


        revalidatePath("/learn")
        revalidatePath("/leaderstats")
        revalidatePath("/shop")


        return NextResponse.json(res, { status: 200 })
    } catch (err) {
        console.error(err)

        return new NextResponse(`[USER_PATCH] ${err}`)
    }
}