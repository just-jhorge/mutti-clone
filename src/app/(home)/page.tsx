"use client";

import { useState } from "react";
import CTA from "./components/CTA";
import Categories from "./components/Categories";
import DiscountsPromotions from "./components/DiscountsPromotions";
import SideBar from "./components/SideBar";
import SubCategoryBar from "./components/SubCategoryBar";
import useSidebarModal from "@/hooks/useSidebarModal";
import useSubCategorybar from "@/hooks/useSubCategorybar";

export default function Home() {
    const { isOpen } = useSidebarModal();
    const { subIsOpen } = useSubCategorybar();

    return (
        <>
            <main>
                <DiscountsPromotions />
                <Categories />
                <CTA />
            </main>
            <SideBar open={isOpen} />
            <SubCategoryBar open={subIsOpen} />
        </>
    );
}
