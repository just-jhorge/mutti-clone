"use client";

import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
import useSidebarModal from "@/hooks/useSidebarModal";
import { Button } from "@/components/ui/button";

const categories = [
    { label: "Baby & Child Health", value: "baby-and-child-health" },
    { label: "Medicines & Treatments", value: "medicines-and-treatments" },
    { label: "Sexual Health", value: "sexual-pleasure-and-wellbeing" },
    { label: "Vitamins and Supplements", value: "vitamins-and-supplements" },
    { label: "Women's Health", value: "women's-health" },
];

const CategoriesBar = () => {
    const { onOpen, setActiveCategory } = useSidebarModal();

    return (
        <section className="h-16 flex items-center justify-center text-sm">
            <div className="container flex items-center gap-2 md:gap-10">
                <Button
                    onClick={() => onOpen()}
                    className="hidden md:flex items-center gap-2 bg-transparent shadow-none text-black font-normal hover:bg-transparent"
                >
                    <IoMenuOutline size={23} />
                    <p>All Categories</p>
                </Button>
                <ul className="h-full w-full py-6 lg:py-0 flex items-center gap-5 overflow-scroll lg:overflow-hidden scroll whitespace-nowrap">
                    <button onClick={() => onOpen()} className="flex lg:hidden">
                        Browse all categories
                    </button>
                    {categories.map((category) => (
                        <li key={category.value}>
                            <button onClick={() => setActiveCategory(category.label)}>
                                <Link href={`/category/${category.value}`}>{category.label}</Link>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CategoriesBar;
