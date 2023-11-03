import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Enquiries from "@/components/navigation/Enquiries";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import "../styles/globals.css";
import "@splidejs/react-splide/css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Enquiries />
                <Navbar />
                <>{children}</>
                <Footer />
            </body>
        </html>
    );
}
