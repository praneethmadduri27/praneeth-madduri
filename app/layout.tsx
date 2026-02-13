import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Praneeth M S | BFSI Consultant",
    description: "Digital Transformation BFSI Consultant specializing in Banking Operations, Regulatory Compliance, and Information Security.",
    keywords: ["BFSI", "Digital Transformation", "Banking Operations", "Risk Governance", "RBI Compliance", "Praneeth M S"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.variable}>{children}</body>
        </html>
    );
}
