"use client";

import DrugCard from "@/app/(home)/components/DrugCard";
import NoResultSVG from "@/app/(home)/components/NoResultSVG";
import useSidebarModal from "@/hooks/useSidebarModal";
import { medications } from "@/lib/data";
import { usePathname } from "next/navigation";

export default function Page() {
    const pathname = usePathname();
    const pathnameArray = pathname.split("/");
    const activeSubCategory = pathnameArray[pathnameArray.length - 1];
    const { activeCategory } = useSidebarModal();

    const medicines = medications[activeCategory].filter((category) => category.category == activeSubCategory);

    return (
        <>
            {medicines.length == 0 ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 py-10 text-sm text-center">
                    <NoResultSVG />
                    <div>
                        <h4 className="font-semibold">There are no results for</h4>
                        <p className="text-yellow-500">'{activeSubCategory}'</p>
                    </div>
                    <p>Check your spelling or try searching for something else.</p>
                    <div className="py-2 px-10 rounded-sm bg-orange-100">
                        <p>
                            <span className="text-orange-600 font-bold">chat with us</span> or call{" "}
                            <span className="text-orange-600 font-bold">0558134375</span> for further assistance
                        </p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                    {medicines.map((medicine, index) => (
                        <DrugCard
                            key={index}
                            name={medicine.name}
                            price={medicine.price}
                            discount={medicine.discount}
                        />
                    ))}
                </div>
            )}
        </>
    );
}
