import Image from "next/image";

export function LeaderboardHeader() {
    return (
        <div className="p-2 flex items-center flex-col border-b-2 w-full">
            <div>
                <Image src="/svg/leaderstats.svg" alt="reward" width={91} height={91} />
            </div>

            <h1 className="my-5 font-semibold text-[2rem]">Leaderboard</h1>
        </div>
    );
}
