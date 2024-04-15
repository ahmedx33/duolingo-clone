import { redirect } from "next/navigation";

export default function Page({ params: { lessonId } }: { params: { lessonId: string } }) {
    return redirect(`/lesson/${lessonId}`)
}
