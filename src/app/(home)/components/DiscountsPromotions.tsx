import { Button } from "@/components/ui/button";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const DiscountsPromotions = () => {
    return (
        <section className="py-12">
            <div className="container space-y-3">
                <h3 className="text-2xl font-bold">Discounts and promotions</h3>
                <div className="flex items-center justify-between">
                    <p className="text-sm">Enjoy unbeatable discounts and promotions. Sign up to qualify!</p>
                    <div className="flex items-center gap-2">
                        <Button className="rounded-full" size="icon" variant="outline">
                            <FiChevronLeft size={22} />
                        </Button>
                        <Button className="rounded-full" size="icon" variant="outline">
                            <FiChevronRight size={22} />
                        </Button>
                    </div>
                </div>
                <div className="h-64 bg-green-500">splide component goes here</div>
            </div>
        </section>
    );
};

export default DiscountsPromotions;
