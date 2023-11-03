import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ellipse from "../../../../public/images/ellipse.webp";
import assistance from "../../../../public/images/assistance.webp";
import join from "../../../../public/images/become-member-image.webp";
import discounts from "../../../../public/images/discounts.webp";
import deliveries from "../../../../public/images/free-deliveries.webp";

const CTA = () => {
    return (
        <section className="py-12">
            <div className="container h-80 rounded-sm overflow-hidden">
                <div className="relative w-full h-full bg-cta px-16 flex flex-col items-start justify-center gap-5">
                    <h3 className="text-3xl max-w-sm font-semibold">
                        Enjoy unbeatable discounts and great healthcare access by joining mutti.
                    </h3>
                    <Button className="bg-yellow-500/70 hover:bg-yellow-500 transition text-white rounded-md" size="lg">
                        Become a mutti member &#8594;
                    </Button>
                    <Image className="absolute right-0 top-0" width={308} height={308} src={ellipse} alt="" />
                    <Image className="absolute right-60 bottom-0" width={368} height={308} src={join} alt="" />
                    <Image className="absolute right-10 top-20" width={300} height={308} src={discounts} alt="" />
                    <Image className="absolute right-[32rem] top-44" width={260} height={308} src={deliveries} alt="" />
                    <Image className="absolute right-[31rem] top-5" width={260} height={308} src={assistance} alt="" />
                </div>
            </div>
        </section>
    );
};

export default CTA;
