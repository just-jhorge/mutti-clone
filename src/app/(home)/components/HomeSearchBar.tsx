import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AiFillCaretDown } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import searchBanner from "../../../../public/images/search-banner.webp";

const HomeSearchBar = () => {
    return (
        <section className="relative bg-orange-light h-64 w-full py-12">
            <div className="container h-full w-full">
                <div className="h-full w-full relative z-50 space-y-5">
                    <div>
                        <h3 className="text-3xl font-bold">Affordable healthcare</h3>
                        <p className="text-sm">Make sure your kids are happy and healthy</p>
                    </div>
                    <div className="w-full h-[5.5rem] bg-white rounded-xl flex items-center divide-x-2 divide-gray-200 gap-4 py-4 px-6">
                        <div className="space-y-0.5">
                            <p className="text-xs text-gray-400">City</p>
                            <p className="flex items-center gap-1 text-gray-600">
                                Accra{" "}
                                <span>
                                    <AiFillCaretDown />
                                </span>
                            </p>
                        </div>
                        <div className="flex-1 space-y-0.5 pl-4">
                            <p className="text-xs text-gray-400">What are you looking for?</p>
                            <div className="flex items-center gap-2">
                                <CiSearch className="text-gray-600" size={23} />
                                <input
                                    className="placeholder:text-[10px] w-full outline-none text-sm text-slate-900"
                                    type="search"
                                    placeholder="eg. Paracetamol, etc.."
                                />
                            </div>
                        </div>
                        <div className="pl-4">
                            <Button
                                size="icon"
                                className="bg-yellow-500/80 hover:bg-yellow-500 text-white rounded-lg h-12 w-12"
                            >
                                <CiSearch size={28} />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <Image
                className="absolute h-full w-1/2 z-30 top-0 bottom-0 right-20"
                src={searchBanner}
                alt="Childcare banner"
            />
        </section>
    );
};

export default HomeSearchBar;