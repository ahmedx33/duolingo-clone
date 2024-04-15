import Image from "next/image";

export default function Logo() {
    return (
        <main className="text-[#58CC02] text-[2rem] font-bold flex items-center gap-2 relative select-none">
            <Image src="/logo.svg" alt="logo" width={50} height={50} draggable={false} />
            Flingo
        </main>
    );
}
