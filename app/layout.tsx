import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "EDC — Entrepreneur Development Cell", description: "A campus ecosystem for ideas, ventures, and impact.", openGraph: { title: "EDC — Entrepreneur Development Cell", description: "Build ideas into impact." } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
