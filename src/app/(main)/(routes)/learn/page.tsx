
import Loading from "@/app/loading";
import { BottomLinks } from "@/components/learn/bottom-links";
import dynamic from "next/dynamic";

const LearnPageContent = dynamic(() => import("@/components/learn/learn-page-content"), { loading: () => <Loading /> });

export default function Page() {
   
    return (
        <div className="w-full h-screen relative">
            <LearnPageContent />
            <BottomLinks />
        </div>
    );
}
