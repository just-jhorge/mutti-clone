import Image from "next/image";
import doctor from "../../../public/images/doctor.svg";

export default function page() {
    return (
        <main className="h-[50vh] lg:h-[62vh] flex items-center justify-center">
            <div className="container flex flex-col items-center justify-center gap-10">
                <div className="relative w-[15rem] lg:w-[20rem]">
                    <Image src={doctor} alt="Mutti Doctor" />
                </div>
                <p>Mutti Doctor, coming soon...</p>
            </div>
        </main>
    );
}
