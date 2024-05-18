"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import axios from "axios";
import { mainUser } from "@/lib/features/user/user-progress-slice";
import { toast } from "sonner";

export function ShopItems() {
    const { hearts, points, userId, userName, activeCourseId, userImageSrc } = useAppSelector((state) => state.userProgress.value);
    const dispatch = useAppDispatch();
    const refillHeart = async () => {
        if (hearts >= 5) {
            return toast.info("Your hearts already full!");
        } else if (points < 10) {
            return toast.error("You need more points!");
        }
        try {
            dispatch(
                mainUser({
                    userId: userId,
                    hearts: Math.min(5, 5),
                    userName: userName,
                    userImageSrc: userImageSrc,
                    points: points - 10,
                    activeCourseId: activeCourseId,
                })
            );
            await axios.patch("/api/userProgress", { hearts: 5, points: points - 10, userId });
            return toast.success("Your hearts is 5 right now!");
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <div className="my-5 border-t border-[#E5E5E5] w-full px-[60px]">
            <div className="flex items-center ">
                <Image src="/svg/refillheart.svg" alt="" width={80} height={80} />
                <div className="flex flex-col justify-center my-5 ">
                    <div className="text-[#3C3C3C] text-[1.2rem] font-bold">Refill health</div>
                </div>

                {hearts < 5 ? (
                    <Button className="text-[#1CB0F6] font-bold text-[1.2rem] px-4 mx-5" onClick={refillHeart}>
                        Pay: 10
                    </Button>
                ) : (
                    <Button disabled className="text-[#1CB0F6] font-bold text-[1.2rem] px-4 mx-5">
                        full
                    </Button>
                )}
            </div>
        </div>
    );
}
