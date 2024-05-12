"use client";

import React from "react";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { onClose } from "@/lib/features/modals/exit-challenge-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function ExitChallengeModal() {
    const { isOpen } = useAppSelector((state) => state.exitChallengeModal);
    const router = useRouter();
    const dispatch = useAppDispatch();
    return (
        <Dialog modal open={isOpen} onOpenChange={() => dispatch(onClose())}>
            <DialogContent className="w-fit">
                <DialogHeader className="grid place-items-center">
                    <Image src="/svg/cryingBeard.svg" alt="" width={100} height={100} draggable={false} />

                    <div className="font-bold text-[1.2rem] text-[#4B4B4B] text-center">
                        <p>Wait, don&apos;t leave! You&apos;ll lose all</p>
                        <p>the progress you&apos;ve made if</p>
                        <p>you leave now</p>
                    </div>
                </DialogHeader>
                <Button className="w-[384px] p-3 bg-[#1CB0F6] border-[#1899D6] text-white h-12 hover:bg-[#1FC2FF] hover:border-[#1aa8eb] font-bold" onClick={() => dispatch(onClose())}>
                    KEEP LEARNING
                </Button>
                <button
                    className="text-[#FF4B4B] font-bold"
                    onClick={() => {
                        router.push("/learn");
                    }}
                >
                    END THE SESSION
                </button>
            </DialogContent>
        </Dialog>
    );
}
