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
            <main className="py-10 bg-gray-50">
                <div className="container">
                    {pathname !== "/" && (
                        <div className="space-y-5 mb-10">
                            <div>Home / Search Results / {activeCategory}</div>
                            <h3 className="text-2xl md:text-3xl font-bold">{activeCategory}</h3>
                        </div>
                    )}
                    {children}
                </div>
            </main>
            <SideBar open={isOpen} />
            <SubCategoryBar open={subIsOpen} />
        </>
    );
}
