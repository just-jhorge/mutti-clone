"use client";

import { medications } from "@/lib/data";
import DrugCard from "../../components/DrugCard";
import useSidebarModal from "@/hooks/useSidebarModal";

export default function page() {
    const { activeCategory } = useSidebarModal();
    const medicines = medications[activeCategory];

    return (
        // TODO: Implement Pagination
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {medicines.map((medicine) => (
                <DrugCard name={medicine.name} price={medicine.price} discount={medicine.discount} />
            ))}
        </div>
    );
}
