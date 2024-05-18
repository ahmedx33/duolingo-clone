import { BottomLinks } from "@/components/learn/bottom-links";
import { ShopItems } from "@/components/shop/shop-items";

export default function Page() {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="w-full text-center text-[#3C3C3C] text-[1.5rem] font-bold">Health</div>
            <ShopItems />
            <BottomLinks />
        </div>
    );
}
