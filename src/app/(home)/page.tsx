"use client";

import { useState } from "react";
import CTA from "./components/CTA";
import Categories from "./components/Categories";
import CategoriesBar from "./components/CategoriesBar";
import DiscountsPromotions from "./components/DiscountsPromotions";
import HomeSearchBar from "./components/HomeSearchBar";
import SideBar from "./components/SideBar";

export default function Home() {
    const [sideOpened, setSideOpened] = useState(false);

    // const toggleSideBar = () => {
    //     setSideOpened(true);
    // };

    return (
        <>
            <main>
                <CategoriesBar />
                <HomeSearchBar />
                <DiscountsPromotions />
                <Categories />
                <CTA />
            </main>
            <SideBar open={sideOpened} />
        </>
    );
}
