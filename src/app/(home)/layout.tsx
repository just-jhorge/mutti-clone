"use client";

import SideBar from "./components/SideBar";
import useSidebarModal from "@/hooks/useSidebarModal";
import SubCategoryBar from "./components/SubCategoryBar";
import useSubCategorybar from "@/hooks/useSubCategorybar";
import CategoriesBar from "./components/CategoriesBar";
import HomeSearchBar from "./components/HomeSearchBar";
import { usePathname } from "next/navigation";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const { subIsOpen } = useSubCategorybar();
    const { isOpen, activeCategory } = useSidebarModal();

    return (
        <>
            <CategoriesBar />
            <HomeSearchBar />
            <main className="container py-12">
                {pathname !== "/" && <h3 className="text-2xl md:text-3xl font-bold mb-5">{activeCategory}</h3>}
                {children}
            </main>
            <SideBar open={isOpen} />
            <SubCategoryBar open={subIsOpen} />
        </>
    );
}
