"use client";

import DrugCard from "@/app/(home)/components/DrugCard";
import NoResultSVG from "@/app/(home)/components/NoResultSVG";
import useSidebarModal from "@/hooks/useSidebarModal";
import { medications } from "@/lib/data";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Page() {
    const ITEMS_PER_PAGE = 12;
    const [itemsOffset, setItemsOffset] = useState(0);

    const pathname = usePathname();
    const pathnameArray = pathname.split("/");
    const activeSubCategory = pathnameArray[pathnameArray.length - 1];
    const { activeCategory } = useSidebarModal();

    const medicines = medications[activeCategory].filter((category) => category.category == activeSubCategory);

    const containerClass = "flex items-center justify-center gap-2 mt-10";
    const activePage = "border-t border-b border-orange-500 text-orange-500";
    const pageLinkClass = "h-[30px] aspect-square text-sm flex items-center justify-center font-semibold";

    const endOffset = itemsOffset + ITEMS_PER_PAGE;
    const currentItems = medicines.slice(itemsOffset, endOffset);
    const pageCount = Math.ceil(medicines.length / ITEMS_PER_PAGE);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * ITEMS_PER_PAGE) % medicines.length;
        setItemsOffset(newOffset);
    };

    return (
        <>
            {currentItems.length == 0 ? (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 py-10 text-sm text-center">
                    <NoResultSVG />
                    <div>
                        <h4 className="font-semibold">There are no results for</h4>
                        <p className="text-yellow-500">&apos;{activeSubCategory}&apos;</p>
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
                <>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {currentItems.map((medicine, index) => (
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
                            previousLinkClassName="hidden"
                            nextLinkClassName="hidden"
                            breakLinkClassName="h-full w-full bg-red-500"
                            activeClassName={activePage}
                            containerClassName={containerClass}
                            previousClassName={pageLinkClass}
                            nextClassName={pageLinkClass}
                            pageClassName={pageLinkClass}
                            onPageChange={handlePageClick}
                            pageCount={pageCount}
                            pageRangeDisplayed={5}
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </>
            )}
        </>
    );
}
