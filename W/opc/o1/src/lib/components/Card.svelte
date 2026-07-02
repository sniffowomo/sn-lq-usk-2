// <reference path="./types.ts" />

let { class: className = "" } = $props<{ class?: string }>();

const cardStyles = "bg-surface-900/80 backdrop-blur-md rounded-2xl p-6 border border-surface-800 hover:border-purple-500/30 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 relative overflow-hidden group";

const cardGradient = "absolute inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none";

const contentStyles = "relative z-10";

const cardClasses = $derived(`${cardStyles} ${className}`);