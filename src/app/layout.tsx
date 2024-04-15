import { Metadata } from "next";

import { Open_Sans } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import { Toaster } from "sonner";
import StoreProvider from "@/components/providers/store-provider";

const font = Open_Sans({ subsets: ["latin"] });

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
        <ClerkProvider>
            <html lang="en">
                <StoreProvider>
                    <body className={`${font.className}`}>
                        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                            {children}
                        </ThemeProvider>
                    </body>
                </StoreProvider>
                <Toaster richColors />
            </html>
        </ClerkProvider>
    );
}
