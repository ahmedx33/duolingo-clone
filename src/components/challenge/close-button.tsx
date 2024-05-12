"use client";

import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { onOpen } from "@/lib/features/modals/exit-challenge-modal";


export function CloseButton() {
    const dispatch = useAppDispatch()
    return (
        <div>
            <IoClose
                onClick={() => {
                    dispatch(onOpen())
                }}
                size={30}
                color="#64748A"
                className="cursor-pointer"
            />
        </div>
    );
}
