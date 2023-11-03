import { Button } from "@/components/ui/button";

export default function Header() {
    return (
        <section className="h-[465px] w-full bg-hero bg-no-repeat bg-cover">
            <div className="container h-full w-full flex flex-col items-start justify-center gap-5">
                <h3 className="font-bold text-4xl">
                    Introducing <span className="text-orange-600">mutti+</span>
                </h3>
                <p className="max-w-md text-lg">
                    Experience affordable primary healthcare that gives you access to virtual doctor consultations,
                    rapid diagnostic tests and a wide range of medications, for a healthier you from only{" "}
                    <span className="font-bold">GHS 20 per month</span>.
                </p>
                <Button size="lg" className="bg-yellow-500/70 hover:bg-yellow-500 transition text-white rounded-md">
                    Claim your free trail
                </Button>
            </div>
        </section>
    );
}
