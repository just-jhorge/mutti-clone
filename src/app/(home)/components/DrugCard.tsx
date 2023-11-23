import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import React from "react";
import { formatCurrency } from "@/lib/utils";

interface DrugCardProps {
    name: string;
    price: number;
    discount?: number;
}

const addToCart = () => {
    console.log("Added to cart");
};

const DrugCard: React.FC<DrugCardProps> = ({ name, price, discount }) => {
    return (
        <Link href="/products/12381">
            <div className="relative h-[250px] lg:h-[500px] w-full lg:w-[300px] flex lg:flex-col flex-row lg:p-3 border border-gray-200 rounded-sm overflow-hidden hover:shadow-md hover:bg-white transition">
                <div className="relative h-full lg:h-3/5 w-1/2 lg:w-full bg-gradient-to-br from-gray-50 to-gray-400"></div>
                <div className="h-full lg:h-2/5 w-1/2 lg:w-full flex flex-col items-start justify-between lg:justify-end space-y-2 p-3">
                    <div className="space-y-4 lg:space-y-2.5">
                        <h4 className="text-base">{name}</h4>
                        <p className="font-semibold">{formatCurrency(price)}</p>
                    </div>
                    <button
                        className="flex items-center gap-1 bg-gray-300 hover:bg-yellow-400 hover:text-white transition duration-200 p-3 rounded-sm text-sm"
                        onClick={addToCart}
                    >
                        <p>Add to cart</p>
                        <FaPlus />
                    </button>
                </div>
                {discount && (
                    <div className="absolute flex items-center justify-center h-12 w-64 bg-rose-600/80 shadow-md text-white -rotate-45 top-8 -left-16">
                        <p className="text-xs font-semibold">-{discount}% with mutti+</p>
                    </div>
                )}
            </div>
        </Link>
    );
};

export default DrugCard;
