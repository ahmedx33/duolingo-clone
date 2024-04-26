"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <main className="flex items-center justify-center w-full h-screen ">
            <div className="relative w-[200px] h-[200px] mr-5">
                <Image src="/svg/sad.svg" alt="sad" fill />
            </div>
            <div className="flex justify-center flex-col">
                <h2 className="text-[2rem] font-bold mb-5">Error 404</h2>
                <p className="text-[#AFAFAF] text-[1.2rem]">Sorry, the page you were looking for doesn’t exist.</p>

                <Link href="/learn" className="text-[#777777] font-bold text-[1.5rem]">
                    Flingo
                </Link>
            </div>
        </main>
    );
}
