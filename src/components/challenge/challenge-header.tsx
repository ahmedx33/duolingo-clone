"use client";
import { IoClose } from "react-icons/io5";
import { Progress } from "../ui/progress";
import { TiHeartFullOutline } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

export default function ChallengeHeader() {
    const userProgress = useSelector((state: RootState) => state.userProgress.value);
    const router = useRouter();

    return (
        <nav className="flex items-center w-[800px] mx-auto gap-x-5">
            <IoClose
                onClick={() => {
                    router.push("/learn");
                }}
                size={30}
                color="#64748A"
                className="cursor-pointer"
            />
            <Progress value={40} className="h-4" customColor="bg-[#22C55E]" />
            <div className="flex items-center gap-x-2">
                <TiHeartFullOutline color="#FF4B4B" size={30} />
                <span className="text-[#FF4B4B] font-semibold">{userProgress.hearts}</span>
            </div>
        </nav>
    );
}
