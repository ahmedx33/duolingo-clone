import { ClerkLoaded, ClerkLoading, SignInButton, UserButton } from "@clerk/nextjs";
import Logo from "./logo";
import Spinner from "../spinner";

export default function Header() {
    return (
        <main className="border-b-2 py-5 px-56 max-md:px-10 flex items-center justify-between">
            <h1>
                <Logo />
            </h1>
            <ClerkLoading>
                <Spinner />
            </ClerkLoading>

            <ClerkLoaded>
                <SignInButton>
                    <UserButton afterSignOutUrl="/" />
                </SignInButton>
            </ClerkLoaded>
        </main>
    );
}
