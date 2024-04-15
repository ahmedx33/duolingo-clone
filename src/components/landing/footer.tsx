import Image from "next/image";

export default function Footer() {
    return <main className="border-t-2 flex items-center justify-center absolute w-full bottom-0 left-0 h-20">
        <Image src="/arabic.png" alt="flag" width={50} height={50} />
    </main>;
}
