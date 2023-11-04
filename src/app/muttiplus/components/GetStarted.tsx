import { Button } from "@/components/ui/button";
import { BiSolidPhoneCall } from "react-icons/bi";

export default function GetStarted() {
    return (
        <section className="relative w-full py-24">
            <svg
                width="215"
                height="140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-0 right-0"
            >
                <circle opacity="0.5" cx="194.5" cy="194.5" r="174.5" stroke="#E46F2C" stroke-width="40"></circle>
            </svg>
            <div className="container flex flex-col items-center justify-center">
                <h3 className="font-bold text-3xl leading-loose mb-16">Access the care you deserve starting today</h3>
                <div className="flex items-start justify-center gap-44">
                    <div className="text-center">
                        <h5 className="font-semibold mb-2">Prefer to sign up over the phone?</h5>
                        <p className="text-xs mb-6 font-light">Speak with a mutti+ care agent today</p>
                        <Button
                            className="bg-transparent text-orange-600 hover:bg-transparent border border-orange-600 text-xs font-semibold"
                            size="lg"
                        >
                            <BiSolidPhoneCall size={20} className="mr-2" /> +233 024 412 1212
                        </Button>
                    </div>
                    <div className="h-36 w-0.5 bg-gray-200"></div>
                    <div className="text-center">
                        <h5 className="font-semibold mb-2">You can also walk into any pharmacy near you*</h5>
                        <p className="text-xs mb-6 font-light">and speak with the pharmacist</p>
                        <Button
                            className="bg-transparent text-orange-600 hover:bg-transparent border border-orange-600 text-xs font-semibold mb-1"
                            size="lg"
                        >
                            <BiSolidPhoneCall size={20} className="mr-2" /> See mutti+ pharmacies near you
                        </Button>
                        <p className="text-[10px] mb-6 font-light">*select pharmacies only</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
