"use client";

import { Button } from "@/components/ui/button";
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import useSidebarModal from "@/hooks/useSidebarModal";

const categories = [
    { label: "Baby & Child Health", value: "baby-and-child-health" },
    { label: "Medicines & Treatment", value: "medicines-and-treatment" },
    { label: "Sexual Health", value: "sexual-pleasure-and-wellbeing" },
    { label: "Supplements", value: "vitamins-and-supplements" },
    { label: "Women's Health", value: "women's-health" },
];

const CategoriesBar = () => {
    const { onOpen } = useSidebarModal();

    return (
        <section className="h-16 flex items-center justify-center text-sm">
            <div className="container flex items-center gap-10">
                <Button
                    onClick={() => onOpen()}
                    className="flex items-center gap-2 bg-transparent shadow-none text-black font-normal hover:bg-transparent"
                >
                    <IoMenuOutline size={23} />
                    <p>All Categories</p>
                </Button>
                <ul className="flex items-center gap-5">
                    {categories.map((category) => (
                        <li key={category.value}>
                            <Link href={`/category/${category.value}`}>{category.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default CategoriesBar;
