import Spinner from "@/components/spinner";

export default function Loading() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <Spinner />
        </div>
    );
}
