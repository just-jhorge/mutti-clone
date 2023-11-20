import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DiscountsPromotions = () => {
    return (
        <section className="py-12">
            <div className="container space-y-3">
                <h3 className="text-xl md:text-2xl font-bold">Discounts and promotions</h3>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
                    <p className="text-xs md:text-sm">Enjoy unbeatable discounts and promotions. Sign up to qualify!</p>
                    <div className="flex items-center gap-2">
                        <button className="rounded-full h-7 md:h-9 w-7 md:w-9 flex items-center justify-center border border-gray-200">
                            <FiChevronLeft className="text-lg md:text-xl" />
                        </button>
                        <button className="rounded-full h-7 md:h-9 w-7 md:w-9 flex items-center justify-center border border-gray-200">
                            <FiChevronRight className="text-lg md:text-xl" />
                        </button>
                    </div>
                </div>
                <div className="h-80 bg-green-500">splide component goes here</div>
            </div>
        </section>
    );
};

export default DiscountsPromotions;
