import { revalidatePath, unstable_cache } from "next/cache"
import { prisma } from "../db"
import { cache } from "react"
import { auth } from "@clerk/nextjs"



export const getChallenges = unstable_cache(cache(async ({ lessonId, userId }: { lessonId: string, userId: string }) => {
    const challenge = await prisma.challenge.findMany({
        where: {
            lessonId
        },

        include: {
            progresses: {
                where: {
                    userId
                }
            },
            options: true
        }

    })

    return challenge
}), ["challenges"])

export const getChallengeOption = unstable_cache(cache(async () => {
    const data = await prisma.challengeOption.findMany()

    return data
}), ["getChallengeOption"])

export const getUnits = unstable_cache(cache(async ({ courseId, userId }: { courseId: string, userId: string }) => {
    const data = await prisma.unit.findMany({
        where: {
            courseId
        },
        orderBy: {
            order: "asc"
        },
        include: {
            lessons: {
                orderBy: {
                    order: "asc"
                },
                include: {
                    challenges: {
                        orderBy: {
                            order: "asc"
                        },
                        include: {
                            progresses: {
                                where: {
                                    userId
                                }
                            }
                        },

                    },
                },
            },
        },
    });

    return data
}), ["lessons"])