"use client";
import { store } from "@/lib/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function StoreProvider({ children }: { children: ReactNode }) {
    return (
        <div>
            <Provider store={store}>{children}</Provider>
        </div>
    );
}