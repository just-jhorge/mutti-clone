import Enquiries from "@/components/navigation/Enquiries";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

import "@splidejs/react-splide/css";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="relative">
                <Enquiries />
                <Navbar />
                <>{children}</>
                <Footer />
            </body>
        </html>
    );
}
