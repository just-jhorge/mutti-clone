"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";

const navigationLinks = [
    { label: "Home", value: "/" },
    { label: "Upload Prescription", value: "/prescriptions" },
    { label: "mutti Doctor", value: "/muttidoctor" },
    { label: "mutti+", value: "/muttiplus" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="w-full h-28 border-b border-gray-300">
            <div className="container w-full h-full flex items-center justify-between">
                <div className="flex items-end gap-10">
                    <div className="relative w-24 h-8">
                        <Image fill src={logo} alt="mutti" />
                    </div>
                    <ul className="flex items-center gap-6">
                        {navigationLinks.map((item) => {
                            const isActive = pathname === item.value;

                            return (
                                <li key={item.value}>
                                    <Link className={isActive ? "text-orange-600" : ""} href={item.value}>
                                        {item.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="flex items-center divide-x-2 gap-5">
                    <div className="flex items-center gap-1">
                        <p>Login</p>
                        <span>/</span>
                        <Button className="bg-yellow-500/70 hover:bg-yellow-500 transition text-white rounded-md">
                            Become a mutti member
                        </Button>
                    </div>
                    <div>country selector</div>
                    <div className="flex items-center gap-1">
                        <AiOutlineShoppingCart size={20} />
                        <div className="h-5 w-5 text-xs rounded-full flex items-center justify-center bg-red-500 text-white">
                            0
                        </div>
                        <p>items</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
