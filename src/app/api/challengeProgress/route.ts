import { prisma } from "@/lib/db"
import { NextRequest, NextResponse } from "next/server"



export const POST = async (req: NextRequest) => {
    try {
        
        const { userId, challengeId } = await req.json()
        if (!userId) return new NextResponse("Unauthorized", { status: 401 })
            
        const challengeProgress = await prisma.challengeProgress.create({
            data: {
                userId,
                challengeId,
            }
        })

        return NextResponse.json(challengeProgress, { status: 200 })

    } catch (err) {
        console.error(err)

        return new NextResponse(`${err}`, { status: 400 })
    }
}