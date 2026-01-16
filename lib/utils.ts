import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const toTitleCase = (str: string) => {
  return str
    .split("")
    .map((l, i) => (i === 0 ? l.toUpperCase() : l))
    .join("");
};