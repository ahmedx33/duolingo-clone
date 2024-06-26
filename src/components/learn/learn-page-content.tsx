import Unit from "@/components/learn/unit";
import { prisma } from "@/db/db";
import { getUnits } from "@/db/queries/queries";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function LearnPageContent() {
    const user = await auth();

    if (!user) return redirect("/")

    const userProgress = await prisma.userProgress.findUnique({
        where: {
            userId: user.userId!,
        },
    });

    const units = await getUnits({
        courseId: userProgress?.activeCourseId!,
        userId: user.userId!,
    });

    revalidatePath("/learn");
    revalidatePath("/leaderstats");

    return (
        <section className="w-full h-full flex flex-col items-center p-3 max-md:p-0">
            {units.map((unit) => (
                <>
                    <Unit key={unit.title} {...unit} lessons={unit.lessons} isFirstUnit={units[0].order === unit.order} />
                </>
            ))}
        </section>
    );
}
