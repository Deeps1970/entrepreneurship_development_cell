import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://edc-srmvdp.vercel.app"),
  title: "EDC — Entrepreneurship Development Cell | SRM Vadapalani",
  description: "A premier student-led ecosystem turning ideas into scalable impact, ventures, and innovation at SRM Institute of Science & Technology, Vadapalani.",
  icons: {
    icon: "/edc-logo.png",
    shortcut: "/edc-logo.png",
    apple: "/edc-logo.png",
  },
  openGraph: {
    title: "EDC — Entrepreneurship Development Cell | SRM Vadapalani",
    description: "Build ideas into impact. Explore our Board of Directors, Venturefest'26, and startup initiatives.",
    images: ["/edc-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
