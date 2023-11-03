import type { Metadata } from "next";
import Header from "./components/Header";
import WhyMutti from "./components/WhyMutti";
import Features from "./components/Features";
import GetStarted from "./components/GetStarted";

export const metadata: Metadata = {
    title: "mymutti: Quality meds and healthcare at affordable prices",
    description: "Generated by create next app",
};

export default function page() {
    return (
        <main>
            <Header />
            <WhyMutti />
            <Features />
            <GetStarted />
        </main>
    );
}
