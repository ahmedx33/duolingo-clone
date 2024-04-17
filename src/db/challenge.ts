import { unstable_cache } from "next/cache"
import { prisma } from "./db"
import { cache } from "react"



export const getChallenges = unstable_cache(cache(async ({ lessonId }: { lessonId: string }) => {
    const data = await prisma.challenge.findMany({
        where: {
            lessonId
        }
    })

    return data
}), ["challenges"])


export const getChallengeOption = unstable_cache(cache(async ({ challengeId }: { challengeId: string }) => {
    const data = await prisma.challengeOption.findMany({
        where: {
            challengeId
        }
    })

    return data
}))