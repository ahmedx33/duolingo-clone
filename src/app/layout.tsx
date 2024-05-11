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

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${font.className} select-none`}>
                <StoreProvider>
                    <ClerkProvider>
                        {children}
                        <SpeedInsights />
                        <Toaster richColors />
                    </ClerkProvider>
                </StoreProvider>
            </body>
        </html>
    );
}
