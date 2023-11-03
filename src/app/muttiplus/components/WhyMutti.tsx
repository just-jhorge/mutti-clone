import { Button } from "@/components/ui/button";

export default function WhyMutti() {
    return (
        <section className="py-16">
            <div className="container flex flex-col items-center justify-center">
                <h3 className="font-bold text-4xl mb-8">
                    Why <span className="text-orange-600">mutti+</span>
                </h3>
                <div className="text-center space-y-8">
                    <p className="text-xl max-w-4xl font-light">
                        With mutti, we understand that health is the foundation of a thriving life. Inspired by this, we
                        have pored over half a million patient visits into careful analysis to create a health
                        subscription plan that is as diverse and dynamic as the lives it will cover. We are excited to
                        introduce you to a health coverage plan that extends beyond the ordinary, embracing preventive
                        care, testing, and treatments. Our goal is to make healthcare not only comprehensive but also
                        affordable. So whether you are an individual, nurturing a family, or part of a vibrant
                        community, mutti+ is here to support you!
                    </p>
                    <Button size="lg" className="bg-yellow-500/70 hover:bg-yellow-500 transition text-white rounded-md">
                        Claim your free trail
                    </Button>
                </div>
            </div>
        </section>
    );
}
