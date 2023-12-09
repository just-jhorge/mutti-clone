"use client";

import { medications } from "@/lib/data";
import ReactPaginate from "react-paginate";
import DrugCard from "../../components/DrugCard";
import useSidebarModal from "@/hooks/useSidebarModal";
import { useState } from "react";

export default function Page() {
    const ITEMS_PER_PAGE = 12;
    const containerClass = "flex items-center justify-center gap-2";
    const activePage = "border-t border-b border-orange-500 text-orange-500";
    const pageLinkClass = "h-[30px] aspect-square text-sm flex items-center justify-center font-semibold";
    const [itemsOffset, setItemsOffset] = useState(0);

    const { activeCategory } = useSidebarModal();
    const medicines = medications[activeCategory];

    const endOffset = itemsOffset + ITEMS_PER_PAGE;
    const currentItems = medicines.slice(itemsOffset, endOffset);
    const pageCount = Math.ceil(medicines.length / ITEMS_PER_PAGE);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * ITEMS_PER_PAGE) % medicines.length;
        setItemsOffset(newOffset);
    };

    return (
        // TODO: Implement Pagination
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {currentItems &&
                    currentItems.map((medicine, index) => (
                        <DrugCard
                            key={index}
                            name={medicine.name}
                            price={medicine.price}
                            discount={medicine.discount}
                        />
                    ))}
            </div>
            <div className="w-full flex items-center justify-center">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    breakLinkClassName="h-full w-full bg-red-500"
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    renderOnZeroPageCount={null}
                    activeClassName={activePage}
                    nextClassName={pageLinkClass}
                    pageClassName={pageLinkClass}
                    onPageChange={handlePageClick}
                    previousClassName={pageLinkClass}
                    containerClassName={containerClass}
                />
            </div>
        </>
    );
}
