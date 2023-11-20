import React from "react";
import CategoryCard from "./CategoryCard";
import { Category } from "../../../../types";

const categories: Category[] = [
    {
        category_label: "Baby and Child Health",
        category_image: "/images/baby_and_child_health.png",
        category_link: "/category/baby-and-child-health",
    },
    {
        category_label: "Medicines and Treatments",
        category_image: "/images/medicines_and_treatments_preview.png",
        category_link: "/category/medicines-and-treatments",
    },
    {
        category_label: "Sexual Pleasure and Wellbeing",
        category_image: "/images/sexual_pleasure_and_wellbeing.png",
        category_link: "/category/sexual-pleasure-and-wellbeing",
    },
    {
        category_label: "Vitamins and supplements",
        category_image: "/images/vitamins_and_supplements.png",
        category_link: "/category/vitamins-and-supplements",
    },
    {
        category_label: "Women's Health",
        category_image: "/images/womens_health.png",
        category_link: "/category/women's-health",
    },
];

const Categories = () => {
    return (
        <section className="py-12">
            <div className="space-y-5">
                <h3 className="text-2xl font-bold">
                    Hi there, <br /> what are you looking for?
                </h3>
                <div className="grid md:grid-cols-3 gap-5">
                    {categories.map((category, index) => (
                        <CategoryCard
                            key={index}
                            category_image={category.category_image}
                            category_label={category.category_label}
                            category_link={category.category_link}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
