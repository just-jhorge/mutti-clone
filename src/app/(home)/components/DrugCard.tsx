import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function DrugCard({ discountAvailable }: { discountAvailable?: boolean }) {
    return (
        <Link href="/products/12381">
            <div className="relative h-[500px] w-full lg:w-[300px] p-6 border border-gray-200 rounded-sm overflow-hidden">
                <div className="relative h-3/5 w-full bg-gradient-to-br from-cyan-100 to-cyan-300"></div>
                <div className="h-2/5 flex flex-col items-start justify-end space-y-2">
                    <div className="space-y-1.5">
                        <h4>Soluble Aspirin Teva 75mg Tablets X100</h4>
                        <p>GHC 11.00</p>
                    </div>
                    <button className="flex items-center gap-1 bg-gray-300 hover:bg-yellow-400 hover:text-white transition duration-200 p-3 rounded-sm text-sm">
                        <p>Add to cart</p>
                        <FaPlus />
                    </button>
                </div>
                {discountAvailable && (
                    <div className="absolute flex items-center justify-center h-12 w-64 bg-rose-600/80 shadow-md text-white -rotate-45 top-8 -left-16">
                        <p className="text-xs font-semibold">-9% with mutti</p>
                    </div>
                )}
            </div>
        </Link>
    );
}
