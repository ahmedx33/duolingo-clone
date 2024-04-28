import { Lesson, Unit as UnitType } from "@prisma/client";

import { Button } from "../ui/button";
import { FaBook } from "react-icons/fa";

import LessonsList from "@/components/learn/lessons-list";
import { unstable_cache } from "next/cache";
import { prisma } from "@/db/db";
import { cache } from "react";

export default function Unit({
    id,
    title,
    description,
    lessons,
}: UnitType & {
    lessons: Lesson[];
}) {
    return (
        <article className="max-w-2xl mb-7 flex flex-col items-center justify-center">
            <header className=" h-[100px] bg-[#58CC02] flex items-center justify-between px-3 rounded-xl mb-10">
                <section>
                    <h1 className="uppercase text-[#CDEFB3] font-bold">{title}</h1>
                    <p className="text-white font-bold text-[1.2rem]">{description}</p>
                </section>
                <Button className="uppercase bg-[#58CC02] border-[#46A302] hover:bg-[#58CC02] hover:border-[#4AAB02] text-white font-bold h-12 flex items-center gap-x-3">
                    <FaBook size={20} /> guidebook
                </Button>
            </header>
            <LessonsList lessons={lessons} />
        </article>
    );
}
