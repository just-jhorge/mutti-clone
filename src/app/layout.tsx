import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Enquiries from "@/components/navigation/Enquiries";
import Navbar from "@/components/navigation/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Home - mutti",
    description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Enquiries />
                <Navbar />
                <>{children}</>
            </body>
        </html>
    );
}
