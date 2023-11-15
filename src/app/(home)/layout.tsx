"use client";

import SideBar from "./components/SideBar";
import useSidebarModal from "@/hooks/useSidebarModal";
import SubCategoryBar from "./components/SubCategoryBar";
import useSubCategorybar from "@/hooks/useSubCategorybar";
import CategoriesBar from "./components/CategoriesBar";
import HomeSearchBar from "./components/HomeSearchBar";

export default function layout({ children }: { children: React.ReactNode }) {
    const { isOpen, activeCategory } = useSidebarModal();
    const { subIsOpen } = useSubCategorybar();

    return (
        <>
            <CategoriesBar />
            <HomeSearchBar />
            <main className="container py-12">
                <h3 className="text-3xl font-bold mb-5">{activeCategory}</h3>
                {children}
            </main>
            <SideBar open={isOpen} />
            <SubCategoryBar open={subIsOpen} />
        </>
    );
}
