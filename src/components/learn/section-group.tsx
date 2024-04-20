import Unit from "@/components/learn/unit";
import { prisma } from "@/db/db";
import { getUnits } from "@/db/lesson";
import { revalidatePath } from "next/cache";

export default async function SectionGroup() {
    const units = await getUnits()

    revalidatePath("/learn")
    revalidatePath("/leaderstats")
    
    return (
        <section className="w-full h-full flex flex-col items-center p-[60px]">
            {units.map((unit) => (
                <>
                    <Unit key={unit.title} {...unit} lessons={unit.lessons} />
                </>
            ))}
        </section>
    );
}
