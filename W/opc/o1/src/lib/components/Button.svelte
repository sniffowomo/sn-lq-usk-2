<script lang="ts">
interface Props {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onclick?: () => void;
  class?: string;
  children?: any;
}

let {
  variant = "primary",
  size = "md",
  disabled = false,
  onclick,
  class: className = "",
  children,
}: Props = $props();

const base =
  "font-medium rounded-lg transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-500/50";

const variants: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-purple-500/30",
  secondary:
    "bg-surface-800 text-white border border-surface-700 hover:bg-surface-700 hover:border-purple-500/30",
  ghost: "text-purple-400 hover:text-purple-300 hover:bg-purple-500/10",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const cls = $derived(
  `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "cursor-pointer active:scale-95"
  } ${className}`
);
</script>

<button class={cls} {disabled} {onclick}>
  {@render children()}
</button>
