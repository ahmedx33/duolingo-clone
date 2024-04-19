"use client";

import { ReactNode } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";


interface RedirectButtonProps {
    path: string,
    children: ReactNode
}

export default function RedirectButton({ children }: RedirectButtonProps) {
    const router = useRouter()

    return <Button onClick={() => {
        router.push("/learn")
    }} variant="primaryGreen" className="h-[50px] w-[200px] text-white text-[1rem] font-bold">{children}</Button>;
}
