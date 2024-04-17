import { getChallengeOption } from "@/db/challenge";
import { NextRequest, NextResponse } from "next/server";


export const GET = async (req: NextRequest, { params: { challengeId } }: { params: { challengeId: string } }) => {
    try {
        const challengeOptions = await getChallengeOption({ challengeId });

        return NextResponse.json(challengeOptions, { status: 200 })
    } catch (err) {
        return new NextResponse(`${err}`, { status: 400 })
    }
}