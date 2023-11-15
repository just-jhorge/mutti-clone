"use client";

import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import useSubCategorybar from "@/hooks/useSubCategorybar";
import useSidebarModal from "@/hooks/useSidebarModal";
import { SubCategories } from "../../../../types";

const categories: SubCategories = {
    "Baby and Child Health": {
        categoryLink: "baby-and-child-health",
        subCategories: [
            { label: "Allergy and Hayfever" },
            { label: "Colic Management" },
            { label: "Fever and Pain" },
            { label: "First Aid" },
            { label: "Teething" },
        ],
    },
    "Electrical Health and Diagnostics": {
        categoryLink: "",
        subCategories: [{ label: "Diabetes" }, { label: "Heart Health" }],
    },
    "Medicines and Treatments": {
        categoryLink: "",
        subCategories: [
            { label: "Allergy and Hayfever" },
            { label: "Cough Cold & Flu" },
            { label: "Eye Care" },
            { label: "First Aid" },
            { label: "Pain" },
            { label: "Skincare" },
            { label: "Stomach and Bowel" },
        ],
    },
    "Men's Health": {
        categoryLink: "",
        subCategories: [{ label: "Men's Health Supplements" }, { label: "Men's Sexual Health" }],
    },
    "Sexual Pleasure and Wellbeing": {
        categoryLink: "",
        subCategories: [
            { label: "Condoms" },
            { label: "Feminine Hygiene and Health" },
            { label: "Lubricants and Gels" },
        ],
    },
    "Travel Health": {
        categoryLink: "",
        subCategories: [
            { label: "Antimalarials" },
            { label: "Children's Travel Health" },
            { label: "First Aid" },
            { label: "Travel Sickness" },
        ],
    },
    "Vitamins and Supplements": {
        categoryLink: "",
        subCategories: [
            { label: "Bone Health" },
            { label: "Digestive Health" },
            { label: "Immune Health" },
            { label: "Men's Health Supplements" },
            { label: "Multivitamins" },
            { label: "Women's Health Supplements" },
        ],
    },
    "Women's Health": {
        categoryLink: "",
        subCategories: [
            { label: "Menstrual Health" },
            { label: "Morning After Pill" },
            { label: "Thrush" },
            { label: "Women's Health Supplements" },
        ],
    },
};

export default function SideBar({ open }: { open: boolean }) {
    const { activeCategory } = useSidebarModal();
    const { onClose } = useSubCategorybar();

    const subCategory = categories[activeCategory].subCategories;

    return (
        <div
            className={`fixed ${open ? "block" : "hidden"} top-0 left-0 w-[20rem] h-screen z-[400] px-5 py-10 bg-white`}
        >
            <ul className="divide-y text-sm">
                <li className="py-4">
                    <button className="flex items-center gap-1" onClick={() => onClose()}>
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
                        <Link href="/" className="w-full">
                            {category.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
