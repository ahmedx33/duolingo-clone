"use client";

import { HeaderProps } from "@/layout/user-data-nav";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function UserDataMobile({ courseImageSrc, hearts, points }: HeaderProps) {
    const router = useRouter();

    useEffect(() => {
        router.refresh();
    }, [router]);

    return (
        <section className="items-center justify-between gap-7 hidden max-md:flex w-full bg-[#58CC02] py-3 border-b-[#46a302] border-b-2 px-7">
            <Link href="/courses" className="w-fit h-fit overflow-hidden rounded-md p-3  lg:hover:bg-[#F3F4F6]">
                <Image className="rounded-md border-2 border-white" src={courseImageSrc} alt="course" width={40} height={40} />
            </Link>
            <section className="flex items-center gap-x-2 overflow-hidden rounded-md py-2 px-3  cursor-default">
                <span>
                    <Image src="./svg/exp.svg" alt="exp" height={25} width={25} />
                </span>
                <span className="text-white font-bold">{points}</span>
            </section>
            <section className="flex items-center gap-x-2 overflow-hidden rounded-md py-2  px-3 cursor-default">
                <span>
                    <Image src="./svg/heartMobile.svg" alt="hearts" height={30} width={30} />
                </span>
                <span className="text-white font-bold">{hearts}</span>
            </section>
        </section>
    );
}
