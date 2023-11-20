import DrugCard from "../../components/DrugCard";

export default function page() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <DrugCard />
            <DrugCard discountAvailable />
            <DrugCard />
            <DrugCard discountAvailable />
            <DrugCard />
            <DrugCard discountAvailable />
            <DrugCard />
        </div>
    );
}
