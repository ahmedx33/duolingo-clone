"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import { Course as CourseType } from "@prisma/client";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function Course({ id, title, imageSrc }: CourseType) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const createNewProgress = async () => {
        try {
            setIsLoading(true);
            const res = await axios.post(`/api/userProgress/`, { courseId: id });
        } catch (err) {
            console.error(err);
        } finally {
            router.push("/learn");
            setIsLoading(false);
        }
    };

    return (
        <Button disabled={isLoading} onClick={createNewProgress} className="w-[200px] h-[210px] flex flex-col items-center justify-center">
            <div className="rounded-xl overflow-hidden mb-7">
                <Image src={imageSrc} alt="flag" width={100} height={100} />
            </div>

            <h2 className="text-[#4B4B4B] text-[1rem] font-bold">{title}</h2>
        </Button>
    );
}
