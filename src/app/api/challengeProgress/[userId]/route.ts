import { prisma } from "@/db/db"
import { NextRequest, NextResponse } from "next/server"


export const GET = async (req: NextRequest, { params: { userId } }: { params: { userId: string } }) => {
    try {
        const data = await prisma.challengeProgress.findMany({
            where: {
                userId
            }
        })
        return NextResponse.json(data, { status: 200 })
    } catch (err) {
        return new NextResponse(`${err}`, { status: 400 })
    }
}