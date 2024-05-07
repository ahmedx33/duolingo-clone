import { BottomLinks } from "@/components/learn/bottom-links";
import LearnPageContent from "@/components/learn/learn-page-content";

export default function Page() {
    return (
        <div className="w-full h-screen relative">
            <LearnPageContent />
            <BottomLinks />
        </div>
    );
}
