import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Category } from "../../../../types";

const CategoryCard: React.FC<Category> = (category: Category) => {
    return (
        <Link href={category.category_link}>
            <div className="relative bg-orange-light rounded-sm py-5 h-48 w-full px-6 md:px-10 hover:shadow-sm overflow-hidden transition flex flex-col justify-between">
                <h3 className="text-xl font-bold max-w-[11rem]">{category.category_label}</h3>
                <p className="text-5xl">&#8594;</p>
                <Image
                    width={258}
                    height={208}
                    className="absolute z-20 right-0 bottom-0 overflow-hidden"
                    src={category.category_image}
                    alt="Category Image"
                />
            </div>
        </Link>
    );
};

export default CategoryCard;
