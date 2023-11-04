"use client";

import { RotatingLines } from "react-loader-spinner";

export default function loading() {
    return (
        <div className="h-[70vh] w-full flex items-start justify-center pt-16">
            <RotatingLines strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="48" visible={true} />
        </div>
    );
}
