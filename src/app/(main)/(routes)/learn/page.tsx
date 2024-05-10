
import Loading from "@/app/loading";
import { BottomLinks } from "@/components/learn/bottom-links";
import { auth } from "@clerk/nextjs";
import dynamic from "next/dynamic";
import { redirect } from "next/navigation";

const LearnPageContent = dynamic(() => import("@/components/learn/learn-page-content"), { loading: () => <Loading /> });

export default async function Page() {
    const user = await auth()
    if (!user) return redirect("/")
        
    return (
        <div className="w-full h-screen relative">
            <LearnPageContent />
            <BottomLinks />
        </div>
    );
}
