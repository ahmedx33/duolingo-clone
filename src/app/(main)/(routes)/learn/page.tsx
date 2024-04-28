import dynamic from "next/dynamic";

const LearnPageContent = dynamic(() => import("@/components/learn/learn-page-content"));

export default function Page() {
    return (
        <div className="w-full h-screen">
            <LearnPageContent />
        </div>
    );
}
