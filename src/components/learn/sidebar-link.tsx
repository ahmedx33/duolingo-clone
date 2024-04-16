"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface SiderbarLinkProps {
    title: string;
    path: string;
    src: string;
}

export default function SidebarLink({ title, path, src }: SiderbarLinkProps) {
    const pathname = usePathname();
    return (
        <Link
            href={path}
            className={cn(
                " bg-transparent p-3 px-2 rounded-xl w-full text-[#777777] uppercase font-bold text-[1rem] flex items-center gap-x-3 max-lg:flex max-lg:items-center max-lg:justify-center hover:bg-[#F1F5F9]",
                pathname.includes(path) ? "text-[#1cb0f6] bg-[#DDF4FF] border-[#84D8FF] border-2" : ""
            )}
        >
            <Image src={src} alt="icon" width={30} height={30} />
            <span className="max-lg:hidden">{title}</span>
        </Link>
    );
}
