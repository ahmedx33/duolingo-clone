"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ClerkLoaded, ClerkLoading, RedirectToUserProfile, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import RedirectButton from "../redirect-button";
import Spinner from "../spinner";
import { useRouter } from "next/navigation";

export default function Hero() {
   
    return (
        <main className="flex items-center justify-center w-full h-full max-lg:flex-col max-lg:mt-[12rem]">
            <section className="max-lg:hidden">
                <Image src="/svg/welcome.svg" alt="welcome" width={500} height={500} draggable={false} />
            </section>
            <section className="flex flex-col justify-center items-center gap-y-4 max-lg:h-full">
                <p className="text-[#4B4B4B] text-3xl font-bold w-[520px] text-center mb-10 max-sm:w-[350px]">The free, fun, and effective way to learn a language!</p>

                <ClerkLoading>
                    <Spinner />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <RedirectButton>CONTINUE LEARNING</RedirectButton>
                    </SignedIn>
                    <SignedOut>
                        <SignUpButton  mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                            <Button className="h-[50px] w-[300px] text-white text-[1rem] font-bold" variant="primaryGreen">
                                GET STARTED
                            </Button>
                        </SignUpButton>
                        <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
                            <Button className="h-[50px]  w-[300px] text-[#1CB0F6] text-[1rem] font-bold">ALREADY HAVE AN ACCOUNT</Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </section>
        </main>
    );
}
