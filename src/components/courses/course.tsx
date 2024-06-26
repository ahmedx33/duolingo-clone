"use client";

import { Button } from "../ui/button";

import { Course as CourseType } from "@prisma/client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import axios from "axios";

import { FaCheck } from "react-icons/fa6";
import Spinner from "../spinner";
import { useAppSelector } from "@/lib/hooks";

export function Course({ id, title, imageSrc }: CourseType) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isActive, setIsActive] = useState<boolean>(false);
    const router = useRouter();
    const userProgress = useAppSelector((state) => state.userProgress.value);

    useEffect(() => {
        if (userProgress) {
            setIsActive(userProgress.activeCourseId === id);
        }
    }, [id, userProgress]);

    const createNewProgress = async () => {
        try {
            setIsLoading(true);
            await axios.post(`/api/userProgress/`, { courseId: id });
            return router.push("/learn");
        } catch (err) {
            console.error(err);
        }
    };

    if (isLoading) return <Spinner />

    return (
        <Button onClick={createNewProgress} className="w-[200px] h-[210px] flex flex-col items-center justify-center relative">
            {isActive && (
                <div className="absolute top-[0.7rem] right-[0.7rem] bg-[#58A700] text-white p-1 rounded-md">
                    <FaCheck size={20} />
                </div>
            )}
            <div className="rounded-xl overflow-hidden mb-7">
                <Image src={imageSrc} alt="flag" width={100} height={100} />
            </div>

            <h2 className="text-[#4B4B4B] text-[1rem] font-bold">{title}</h2>
        </Button>
    );
}
