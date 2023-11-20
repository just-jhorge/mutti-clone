"use client";

import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import useSubCategorybar from "@/hooks/useSubCategorybar";
import useSidebarModal from "@/hooks/useSidebarModal";
import { categories } from "@/lib/data";

export default function SideBar({ open }: { open: boolean }) {
    const { activeCategory, onClose } = useSidebarModal();
    const { subOnClose } = useSubCategorybar();

    const mainLink = categories[activeCategory].categoryLink;
    const subCategory = categories[activeCategory].subCategories;

    const closeModal = () => {
        subOnClose();
        onClose();
    };

    return (
        <div
            className={`fixed ${open ? "block" : "hidden"} top-0 left-0 w-[20rem] h-screen z-[400] px-5 py-10 bg-white`}
        >
            <ul className="divide-y text-sm">
                <li className="py-4">
                    <button className="flex items-center gap-1" onClick={() => subOnClose()}>
                        <IoIosArrowRoundBack />
                        <p className="text-xs">Back</p>
                    </button>
                </li>
                <li className="py-8 flex items-center justify-between">
                    <p className="font-bold">{activeCategory}</p>
                    <Link href="/category/baby-and-child-health" className="text-orange-500 font-semibold underline">
                        See all
                    </Link>
                </li>
                {subCategory.map((category, index) => (
                    <li key={index} className="py-4">
                        <Link href={`/category/${mainLink}/subcategory/${category.subCategoryLink}`} className="w-full">
                            <button onClick={closeModal}>{category.label}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
