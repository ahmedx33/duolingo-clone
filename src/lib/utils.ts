import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getPercentage(current: number, target: number) {
  const percentage = (current / target) * 100


  return percentage
}