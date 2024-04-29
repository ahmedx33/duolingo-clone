import Link from "next/link";
import SidebarLink from "./sidebar-link";
import { LINKS } from "@/constants";
import { SiDuolingo } from "react-icons/si";

export function BottomLinks() {
    return (
        <nav className="w-full h-20 border-[#E5E5E5] border-t-2 px-4 py-7 hidden max-md:flex left-0 bottom-0 bg-white  max-md:fixed ">
            <ul className="flex items-center gap-x-2 w-full max-lg:justify-center">
                {LINKS.map((link) => (
                    <li key={link.title} className="w-full">
                        <SidebarLink title={link.title} path={link.path} src={link.src} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
