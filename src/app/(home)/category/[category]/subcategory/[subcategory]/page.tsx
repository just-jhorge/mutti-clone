import DrugCard from "@/app/(home)/components/DrugCard";

export default function page() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <DrugCard />
            <DrugCard />
            <DrugCard discountAvailable />
            <DrugCard />
            <DrugCard discountAvailable />
            <DrugCard discountAvailable />
            <DrugCard />
        </div>
    );
}
