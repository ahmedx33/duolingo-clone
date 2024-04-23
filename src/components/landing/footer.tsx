import { FLAGS } from "@/constants";
import Image from "next/image";

export default function Footer() {
    return (
        <main className="border-t-2 flex items-center justify-center absolute w-full bottom-0 left-0 h-20">
            {FLAGS.map((flag) => (
                <div key={flag} className="w-[70px] h-[50px] relative  overflow-hidden rounded-lg mx-2 flex items-center justify-center">
                    <Image src={flag} alt="flag" fill />
                </div>
            ))}
        </main>
    );
}
