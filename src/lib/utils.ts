import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "GHS",
    });

    return formatter.format(amount);
}
