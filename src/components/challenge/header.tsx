"use client"
import { IoClose } from "react-icons/io5";
import { Progress } from "../ui/progress";
import { TiHeartFullOutline } from "react-icons/ti";
import { useRouter } from "next/navigation";

export default function ChallengeHeader() {
    const router = useRouter()
    return (
        <nav className="flex items-center w-[800px] mx-auto gap-x-5">
            <IoClose onClick={() => {
                router.push("/learn")
            }} size={30} color="#64748A" className="cursor-pointer" />
            <Progress value={40} className="h-4" />
            <div className="flex items-center gap-x-3">
                <TiHeartFullOutline color="#FF4B4B" size={30} />
                <span>0</span>
            </div>
        </nav>
    );
}
