import type { Metadata } from "next";
import Image from "next/image";
import ghanaFlag from "../../../public/images/ghana-flag.svg";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Upload Prescription - mutti",
    description: "Generated by create next app",
};

export default function page() {
    return (
        <section className="py-12 bg-orange-50">
            <div className="container flex flex-col space-y-16 items-center justify-center">
                <h3 className="font-bold text-xl tracking-wider">Electronic Prescription Uploader</h3>
                <form className="w-3/5">
                    <div className="mb-6">
                        <label htmlFor="f_name" className="block mb-2 text-sm font-medium text-gray-900">
                            First name
                        </label>
                        <input
                            type="text"
                            id="f_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="eg. John"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="l_name" className="block mb-2 text-sm font-medium text-gray-900">
                            Last name
                        </label>
                        <input
                            type="text"
                            id="l_name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="eg. Doe"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="contact" className="block mb-2 text-sm font-medium text-gray-900">
                            Your active phone number
                        </label>
                        <div className="flex">
                            <span className="relative inline-flex items-center gap-2 px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-sm cursor-not-allowed">
                                <Image className="" width={25} height={20} src={ghanaFlag} alt="GH" />
                                <p>GH (+233)</p>
                            </span>
                            <input
                                type="text"
                                id="contact"
                                className="rounded-none rounded-r-sm bg-gray-50 border text-gray-900 outline-none focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                placeholder="Eg. 024*******"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="muttiID" className="block mb-2 text-sm font-medium text-gray-900">
                            mutti ID (optional)
                        </label>
                        <input
                            type="number"
                            id="muttiID"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm outline-none rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            placeholder="7-digit number behind mutti card"
                            required
                        />
                    </div>
                    <div className="flex flex-col items-start justify-center w-full mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900">Upload your prescription</label>
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-blue-500 border-dashed rounded-sm cursor-pointer"
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg
                                    className="w-8 h-8 mb-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                    />
                                </svg>
                                <p className="mb-2 text-sm text-gray-500">
                                    <span className="font-semibold">Click to upload</span> or drag and drop a
                                    prescription
                                </p>
                                <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (Max 5MB)</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div>
                    <Button className="w-full rounded-sm" disabled>
                        Send prescription
                    </Button>
                </form>
            </div>
        </section>
    );
}
