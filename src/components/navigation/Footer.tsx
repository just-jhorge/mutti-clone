import React from "react";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import { MdOutlineLocationOn } from "react-icons/md";
import { BiChevronDown } from "react-icons/bi";
import ghanaFlag from "../../../public/images/ghana-flag.svg";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function Footer() {
    return (
        <footer className="w-screen h-auto bg-orange-50 py-10">
            <div className="container space-y-8">
                <div className="grid grid-cols-6 gap-4">
                    <div className="flex flex-col items-start gap-4">
                        <div className="relative w-24 h-8">
                            <Image fill src={logo} alt="mutti" />
                        </div>
                        <p className="text-sm text-gray-500">mymutti &copy; 2023. All rights reserved</p>
                    </div>
                    <div className="flex flex-col items-start gap-3 text-sm">
                        <h3 className="font-semibold">mymutti</h3>
                        <ul>
                            <li>About us</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-3 text-sm">
                        <h3 className="font-semibold">Get support</h3>
                        <ul>
                            <li>FAQ</li>
                            <li>Delivery and returns</li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-3 text-sm">
                        <h3 className="font-semibold">Our location</h3>
                        <ul className="space-y-1">
                            <li>
                                <div className="flex items-center gap-1">
                                    <div className="h-4 w-4 rounded-full">
                                        <Image
                                            className="h-full w-full rounded-full"
                                            src={ghanaFlag}
                                            alt="Ghana flag"
                                        />
                                    </div>
                                    <p>Ghana</p>
                                    <BiChevronDown />
                                </div>
                            </li>
                            <li className="flex items-start gap-1">
                                <MdOutlineLocationOn size={20} /> <span>mPharma, 6 Madu Flower Cl, Accra, Ghana</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-start gap-3 text-sm">
                        <h3 className="font-semibold">Social Networks</h3>
                        <div className="flex items-center gap-2 text-xl">
                            <AiFillFacebook />
                            <AiOutlineInstagram />
                            <FaXTwitter />
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3 text-sm">
                        <h3 className="font-semibold">Join the mutti family</h3>
                        <Button className="w-full bg-yellow-500/80 hover:bg-yellow-500 transition text-white rounded-md">
                            Become a mutti member
                        </Button>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}
