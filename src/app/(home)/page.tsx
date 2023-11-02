import CTA from "./components/CTA";
import Categories from "./components/Categories";
import CategoriesBar from "./components/CategoriesBar";
import DiscountsPromotions from "./components/DiscountsPromotions";
import HomeSearchBar from "./components/HomeSearchBar";

export default function Home() {
    return (
        <main>
            <CategoriesBar />
            <HomeSearchBar />
            <DiscountsPromotions />
            <Categories />
            <CTA />
        </main>
    );
}
