import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import React from "react";


const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "My Blog",
    description: "A blogging Site",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-zinc-100 text-zinc-900  min-h-screen `}>

        <Container>
            {children}
        </Container>

        </body>
        </html>
    );
}
