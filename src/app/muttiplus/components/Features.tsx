import { Button } from "@/components/ui/button";
import Image from "next/image";
import perkImage from "../../../../public/images/perk-image.webp";
import perkImageTwo from "../../../../public/images/perk-image-two.webp";

export default function Features() {
    return (
        <section className="py-12 bg-orange-light">
            <div className="container flex flex-col items-center justify-center gap-20">
                <h3 className="font-bold text-4xl mb-8">
                    Explore <span className="text-orange-600">mutti+</span> perks
                </h3>
                <div className="w-full space-y-10">
                    <div className="h-[20rem] flex">
                        <div className="relative h-full w-full">
                            <Image className="absolute h-full w-4/5" src={perkImageTwo} alt="Perk" />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <div className="py-16">
                                <h3 className="font-bold mb-5">For GHS 20 per month, mutti+ gives you access to:</h3>
                                <ul className="flex flex-col gap-3">
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        No out-of-pocket expenses for eligible care
                                    </li>
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Over 60 covered medications
                                    </li>
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Rapid diagnostic tests
                                    </li>
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Non-urgent virtual doctor consultations
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="h-[20rem] flex">
                        <div className="w-full h-full flex items-center justify-start">
                            <div className="h-full py-16">
                                <h3 className="font-bold mb-5 max-w-md">
                                    Our medication list includes WHO-approved essential medicines for conditions such
                                    as:
                                </h3>
                                <ul className="grid grid-cols-2 gap-3">
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Malaria
                                    </li>
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Diabetes
                                    </li>
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Ulcer
                                    </li>
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Musculoskeletal Pain
                                    </li>
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Pneumonia
                                    </li>
                                    <li className="inline-flex items-center">
                                        <svg
                                            className="mr-3"
                                            width="26"
                                            height="26"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M13 0a13 13 0 1 0 13 13A13.015 13.015 0 0 0 13 0Zm6.191 10.724-7.334 7a1.003 1.003 0 0 1-1.382 0l-3.666-3.5a1 1 0 0 1 1.382-1.448l2.975 2.841 6.643-6.34a1 1 0 0 1 1.382 1.447Z"
                                                fill="#FF5100"
                                            ></path>
                                        </svg>
                                        Hypertension
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="relative h-full w-full flex justify-center">
                            <Image className="absolute h-full w-3/4 right-10" src={perkImage} alt="Perk" />
                        </div>
                    </div>
                </div>
                <Button size="lg" className="bg-yellow-500/70 hover:bg-yellow-500 transition text-white rounded-md">
                    Claim your free trail
                </Button>
            </div>
        </section>
    );
}
