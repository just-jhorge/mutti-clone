"use client";

import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";
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
<<<<<<< HEAD
            <div className="container flex items-center gap-10">
                <button
                    onClick={() => onOpen()}
                    className="flex items-center gap-2 bg-transparent shadow-none text-black font-normal hover:bg-transparent py-3"
                >
                    <IoMenuOutline size={23} />
                    <p>All Categories</p>
                </button>
                <ul className="flex items-center gap-5">
=======
            <div className="container flex items-center gap-2 md:gap-10">
                <Button
                    onClick={() => onOpen()}
                    className="hidden md:flex items-center gap-2 bg-transparent shadow-none text-black font-normal hover:bg-transparent"
                >
                    <IoMenuOutline size={23} />
                    <p>All Categories</p>
                </Button>
                <ul className="h-full w-full py-6 md:py-0 flex items-center gap-5 overflow-scroll whitespace-nowrap">
                    <button onClick={() => onOpen()} className="flex md:hidden">
                        Browse all categories
                    </button>
>>>>>>> 868480b0f316eca9c2c2f27642b4537306bedc2c
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
