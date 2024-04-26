"use client";

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <main>
            <h2>Something went wrong!</h2>

            <button onClick={reset}>Try again</button>
        </main>
    );
}
