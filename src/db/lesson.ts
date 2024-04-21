import { revalidatePath, unstable_cache } from "next/cache";
import { cache } from "react";
import { prisma } from "./db";





export const getUnits = unstable_cache(cache(async () => {
    const data = await prisma.unit.findMany({
        include: {
            lessons: {
                include: {
                    challenges: {
                        orderBy: {
                            order: "asc"
                        }
                    },
                },
            },
        },
    });

    revalidatePath("/leaderstats")
    revalidatePath("/shop")

    return data
}), ["lessons"])