import { Metadata } from "next";

import { Nunito } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import { Toaster } from "sonner";
import StoreProvider from "@/components/providers/store-provider";

import { SpeedInsights } from "@vercel/speed-insights/next";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Duolingo Clone - The world's best way to learn a language",
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
