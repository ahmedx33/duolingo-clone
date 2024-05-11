import { Metadata } from "next";

import { Nunito } from "next/font/google";

import { ClerkProvider, currentUser } from "@clerk/nextjs";

import "./globals.css";
import { Toaster } from "sonner";
import StoreProvider from "@/components/providers/store-provider";
import UserProgressProvider from "@/components/providers/user-progress-provider";
import { prisma } from "@/db/db";

import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Duolingo Clone",
    description: "Learn and explore any lang!",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const user = await currentUser();
    // let userProgress = null;

    // if (user) {
    //     userProgress = await prisma.userProgress.findFirst({
    //         where: {
    //             userId: user?.id,
    //         },
    //     });
    // }

    return (
        <html lang="en">
            <body className={`${font.className} select-none`}>
                <ClerkProvider>
                    <StoreProvider>{children}</StoreProvider>
                    <SpeedInsights />
                    <Toaster richColors />
                </ClerkProvider>
            </body>
        </html>
    );
}
