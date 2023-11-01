import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoMenuOutline } from "react-icons/io5";

const categories = [
    { label: "Baby & Child Health", value: "baby-and-child-health" },
    { label: "Medicines & Treatment", value: "medicines-and-treatment" },
    { label: "Sexual Health", value: "sexual-pleasure-and-wellbeing" },
    { label: "Supplements", value: "vitamins-and-supplements" },
    { label: "Women's Health", value: "women's-health" },
];

export default function Home() {
    return (
        <main>
            <section className="h-16 flex items-center justify-center text-sm">
                <div className="container flex items-center gap-10">
                    <div className="flex items-center gap-2">
                        <IoMenuOutline size={23} />
                        <p>All Categories</p>
                    </div>
                    <ul className="flex items-center gap-5">
                        {categories.map((category) => (
                            <li key={category.value}>
                                <Link href={`/category/${category.value}`}>{category.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}
