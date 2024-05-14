import { Lesson, Unit as UnitType } from "@prisma/client";

import { Button } from "../ui/button";
import { FaBook } from "react-icons/fa";

import LessonsList from "@/components/learn/lessons-list";
import { unstable_cache } from "next/cache";
import { prisma } from "@/db/db";
import { cache } from "react";
import { UserDataMobile } from "./user-data-mobile";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Unit({
    title,
    description,
    lessons,
    isFirstUnit,
}: UnitType & {
    lessons: Lesson[];
    isFirstUnit: boolean;
}) {
    const user = await currentUser();
    const userProgress = await prisma.userProgress.findUnique({
        where: {
            userId: user?.id,
        },
    });

    console.log(isFirstUnit)
    if (!userProgress) return redirect("/courses");

    const activeCourse = await prisma.course.findUnique({
        where: {
            id: userProgress?.activeCourseId!,
        },
    });

    return (
        <article className=" w-full mb-7 flex flex-col items-center justify-center pl-[50px] max-md:pl-0">
            {isFirstUnit && <UserDataMobile {...userProgress} courseImageSrc={activeCourse?.imageSrc!} />}
            <header className="w-full h-[100px] bg-[#58CC02] flex items-center justify-between px-3 rounded-xl mb-10 max-md:rounded-none">
                <section>
                    <h1 className="uppercase text-[#CDEFB3] font-bold">{title}</h1>
                    <p className="text-white font-bold text-[1rem]">{description}</p>
                </section>
                <Button className="uppercase bg-[#58CC02] border-[#46A302] hover:bg-[#58CC02] hover:border-[#4AAB02] text-white font-bold h-12 flex items-center gap-x-3">
                    <FaBook size={20} /> <span className="block max-md:hidden"> guidebook</span>
                </Button>
            </header>
            <LessonsList lessons={lessons} />
        </article>
    );
}
