"use client";

import { createContext, useContext } from "react";
import { MotionValue, useMotionValue } from "framer-motion";

const ScrollContext = createContext<MotionValue<number> | null>(null);

export function useScrollContext() {
    const context = useContext(ScrollContext);
    if (!context) {
        // Fallback to a dummy motion value if used outside provider
        // throw new Error("useScrollContext must be used within a ScrollProvider");
        console.warn("useScrollContext used outside ScrollProvider");
        return new MotionValue();
    }
    return context;
}

export const ScrollProvider = ScrollContext.Provider;
