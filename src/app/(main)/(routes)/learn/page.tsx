import { BottomLinks } from "@/components/learn/bottom-links";
import dynamic from "next/dynamic";

const LearnPageContent = dynamic(() => import("@/components/learn/learn-page-content"), { loading: () => <h1>loading...</h1> });

export default function Page() {
    return (
        <div className="w-full h-screen relative">
            <LearnPageContent />
            <BottomLinks />
        </div>
    );
}
