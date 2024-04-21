import { Metadata } from "next";

import { Nunito } from "next/font/google";

import { ClerkProvider, currentUser } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { Toaster } from "sonner";
import StoreProvider from "@/components/providers/store-provider";
import UserProgerssProvider from "@/components/providers/user-progress-provider";
import { prisma } from "@/db/db";
import { UserProgress } from "@prisma/client";

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
    const userProgress = await prisma.userProgress.findUnique({
        where: {
            userId: user?.id,
        },
    });

    return (
        <ClerkProvider>
            <html lang="en">
                <StoreProvider>
                    <body className={`${font.className}`}>
                        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                            <UserProgerssProvider userProgress={userProgress as UserProgress} />
                            {children}
                        </ThemeProvider>
                    </body>
                </StoreProvider>
                <Toaster richColors />
            </html>
        </ClerkProvider>
    );
}
