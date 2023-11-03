import { Button } from "@/components/ui/button";

export default function Features() {
    return (
        <section className="py-12 bg-orange-light">
            <div className="container flex flex-col items-center justify-center gap-10">
                <h3 className="font-bold text-4xl mb-8">
                    Explore <span className="text-orange-600">mutti+</span> perks
                </h3>
                <div>content</div>
                <Button size="lg" className="bg-yellow-500/70 hover:bg-yellow-500 transition text-white rounded-md">
                    Claim your free trail
                </Button>
            </div>
        </section>
    );
}
