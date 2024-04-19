"use client";

import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";


export function CloseButton() {
    const router = useRouter();
    return (
        <div>
            <IoClose
                onClick={() => {
                    router.push("/learn");
                }}
                size={30}
                color="#64748A"
                className="cursor-pointer"
            />
        </div>
    );
}
