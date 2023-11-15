"use client";

import React from "react";
import { GrClose } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa";
import useSidebarModal from "@/hooks/useSidebarModal";
import useSubCategorybar from "@/hooks/useSubCategorybar";

const categories = [
    { label: "Baby and Child Health" },
    { label: "Electrical Health and Diagnostics" },
    { label: "Medicines and Treatments" },
    { label: "Men's Health" },
    { label: "Sexual Pleasure and Wellbeing" },
    { label: "Travel Health" },
    { label: "Vitamins and Supplements" },
    { label: "Women's Health" },
];

export default function SideBar({ open }: { open: boolean }) {
    const { onClose, setActiveCategory } = useSidebarModal();
    const { onOpen } = useSubCategorybar();

    const openSubCategoryBar = (category: string) => {
        setActiveCategory(category);
        onOpen();
    };

    return (
        <div
            className={`fixed ${
                open ? "block opacity-100" : "hidden opacity-0"
            } z-[200] top-0 left-0 transition h-screen w-full bg-black/50`}
        >
            <div className="fixed top-0 left-0 w-[20rem] h-screen z-[300] px-5 py-10 bg-white">
                <ul className="divide-y text-sm">
                    <li className="py-4 flex items-center gap-3">
                        <button onClick={() => onClose()}>
                            <GrClose />
                        </button>
                        <p className="font-semibold">Shop by categories</p>
                    </li>
                    {categories.map((category, index) => (
                        <li
                            key={index}
                            className="hover:bg-orange-light hover:text-orange-500 hover:cursor-pointer transition duration-300"
                        >
                            <button
                                onClick={() => openSubCategoryBar(category.label)}
                                className="w-full py-4 flex items-center justify-between "
                            >
                                {category.label} <FaAngleRight />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
