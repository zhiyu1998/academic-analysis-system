import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import type { ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * 生成一个随机数
 * @param min
 * @param max
 */
export function generateRandomInteger(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}