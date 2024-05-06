interface RewardProps {
    title: string;
    value: string;
}

export default function Reward({title, value}: RewardProps) {
    return (
        <div className="min-w-[110px] rounded-xl border-2 border-yellow-400 bg-yellow-400">
            <h1 className="py-1 text-[1.2rem] text-center text-white font-bold">{title}</h1>
            <div className="flex justify-center rounded-xl bg-white py-4 text-yellow-400 font-bold">
                {value}
            </div>
        </div>
    );
}
