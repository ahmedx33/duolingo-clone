import Image from "next/image";

interface LeaderboardAvatarProps {
    order: number;
    points: number;
    imgSrc: string;
    userName: string;
}

export function LeaderboardAvatar({ imgSrc, userName, order, points }: LeaderboardAvatarProps) {

    return (
        <div className="flex items-center justify-between px-4 w-full mb-3 hover:bg-[#F2F3F5] duration-150 py-1 rounded-lg">
            <section className="flex items-center gap-x-4">
                <span>{order}</span>
                <div className="w-[50px] h-[50px] overflow-hidden relative rounded-full">
                    <Image className="rounded-full" src={imgSrc} alt="userImg" fill />
                </div>
                <p>{userName}</p>
            </section>
            <span className="text-[#969696]">{points} XP</span>
        </div>
    );
}
