import dynamic from "next/dynamic";

const LearnPageContent = dynamic(() => import("@/components/learn/learn-page-content"));

export default function Page() {
    return (
        <main className="w-full h-screen ml-64">
            <LearnPageContent />
        </main>
    );
}
