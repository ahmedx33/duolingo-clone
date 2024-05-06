"use client";
import { store } from "@/lib/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createPortal } from "react-dom";

export default function StoreProvider({ children }: { children: ReactNode }) {
    return createPortal(
        <div>
            <Provider store={store}>{children}</Provider>
        </div>,
        document.querySelector("body") as Element
    );
}
