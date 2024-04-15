import Link from "next/link";
import SidebarLink from "./sidebar-link";
import { SiDuolingo } from "react-icons/si";
import { LINKS } from "@/constants";
import { UserProgress } from "@prisma/client";

export default function Sidebar() {
    return (
        <nav className="min-w-[300px] max-w-[300px] min-h-screen border-[#E5E5E5] border-r-2 px-4 max-lg:min-w-[90px] max-lg:max-w-[90px] py-7">
            <h1 className="text-[#58CC02] text-[2rem] font-bold select-none mb-7 w-full text-left pl-3 max-lg:hidden">Flingo</h1>
            <Link href="/learn" className="text-[#58CC02] text-[2rem] font-bold select-none mb-7 w-full text-center pl-[1rem] hidden max-lg:block">
                <SiDuolingo />
            </Link>
            <ul className="flex items-center flex-col gap-y-2 w-full max-lg:justify-center">
                {LINKS.map((link) => (
                    <li key={link.title} className="w-full">
                        <SidebarLink title={link.title} path={link.path} src={link.src} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}