// <reference path="./types.ts" />

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  class?: string;
}

let {
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  class: className = "",
} = $props<ButtonProps>();

const baseStyles = "font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500/50";

const variantStyles = {
  primary: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/30",
  secondary: "bg-surface-800 text-white border border-surface-700 hover:bg-surface-700 hover:border-purple-500/30",
  ghost: "text-purple-400 hover:text-purple-300 hover:bg-purple-500/10",
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const disabledStyles = disabled
  ? "opacity-50 cursor-not-allowed pointer-events-none"
  : "cursor-pointer transform active:scale-95";

const buttonClasses = $derived(
  `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`
);