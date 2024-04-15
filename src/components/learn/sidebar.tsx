import Link from "next/link";
import SidebarLink from "./sidebar-link";
import { SiDuolingo } from "react-icons/si";

export default function Sidebar() {
    const links = [
        {
            title: "learn",
            path: "/learn",
            src: "https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg",
        },
        {
            title: "leaderboards",
            path: "/leaderboard",
            src: "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg",
        },
        {
            title: "quests",
            path: "/quests",
            src: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg",
        },
        {
            title: "shop",
            path: "/shop",
            src: "https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg",
        },
    ];

    
    return (
        <nav className="min-w-[250px] max-w-[250px] min-h-screen border-[#E5E5E5] border-r-2 px-3 max-lg:min-w-[90px] max-lg:max-w-[90px] py-7">
            <h1 className="text-[#58CC02] text-[2rem] font-bold select-none mb-7 w-full text-left pl-3 max-lg:hidden">Flingo</h1>
            <Link href="/learn" className="text-[#58CC02] text-[2rem] font-bold select-none mb-7 w-full text-center pl-[1rem] hidden max-lg:block">
                <SiDuolingo />
            </Link>
            <ul className="flex items-center flex-col gap-y-2 w-full max-lg:justify-center">
                {links.map((link) => (
                    <li key={link.title} className="w-full">
                        <SidebarLink title={link.title} path={link.path} src={link.src} />
                    </li>
                ))}
            </ul>
        </nav>
    );
}
