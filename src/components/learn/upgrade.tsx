import Link from "next/link";
import { Button } from "../ui/button";
import { IoDiamond } from "react-icons/io5";

export default function Upgrade() {
    return (
        <main className="border-[#DDDDDD] border-2 rounded-xl p-3 flex flex-col justify-center h-48 w-[350px] mb-6">
            <div>
                <h1 className="text-[#4B4B4B] font-bold text-[1.2rem] mb-3 flex items-center gap-x-4">
                    Upgrade to super <IoDiamond size={25} color="#4B81FF" />
                </h1>
                <p className="text-[#777777] font-semibold  mb-3">Personalized practice, and unlimited Legendary!</p>
            </div>
            <div>
                <Link href="/shop">
                    <Button variant="primaryPruple" className="text-white font-bold rounded-[15px] w-full py-5 h-12">
                        Upgrade today
                    </Button>
                </Link>
            </div>
        </main>
    );
}
