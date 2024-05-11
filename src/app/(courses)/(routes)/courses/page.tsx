import CoursesList from "@/components/courses/courses-list";
import Header from "@/components/landing/header";
import StoreProvider from "@/components/providers/store-provider";

export default function page() {
    return (
        <main>
            <StoreProvider>
                <Header />
                <CoursesList />
            </StoreProvider>
        </main>
    );
}
