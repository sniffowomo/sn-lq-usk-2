// <reference path="./types.ts" />

let { class: className = "", size = "md" } = $props<{ class?: string; size?: "sm" | "md" | "lg" }>();

const sizeStyles = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

const progressBarStyles = "w-full bg-surface-800 rounded-full overflow-hidden shadow-inner";

const progressFillStyles = "h-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 transition-all duration-500 ease-out rounded-full relative overflow-hidden";

const shimmerStyles = "absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out";

const sizeClass = $derived(sizeStyles[size]);
const progressClasses = $derived(`${progressBarStyles} ${className}`);
const fillClasses = $derived(`${progressFillStyles} ${sizeClass}`);