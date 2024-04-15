
import Unit from "@/components/learn/unit";
import { prisma } from "@/lib/db";

export default async function SectionGroup() {
    const units = await prisma.unit.findMany({
        include: {
            lessons: {
                include: {
                    challenges: true
                }
            }
        },
    });

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
