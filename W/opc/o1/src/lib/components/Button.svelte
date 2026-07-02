<script lang="ts">
interface Props {
  variant?: "primary" | "secondary" | "ghost" | "danger";
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

let hovered = $state(false);

const base = "relative font-display font-semibold tracking-wider uppercase transition-all duration-300 focus:outline-none overflow-hidden group";

const variants: Record<string, string> = {
  primary: [
    "bg-gradient-to-r from-neon-purple via-neon-pink to-neon-purple text-white",
    "border border-neon-purple/50",
    "shadow-[0_0_15px_rgba(168,85,247,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]",
    "hover:shadow-[0_0_30px_rgba(168,85,247,0.5),0_0_60px_rgba(255,45,120,0.2)]",
    "hover:border-neon-pink/60",
    "active:scale-95",
  ].join(" "),
  secondary: [
    "bg-surface-800/80 text-neon-cyan",
    "border border-neon-cyan/30",
    "shadow-[0_0_10px_rgba(6,245,208,0.1)]",
    "hover:bg-surface-700/80 hover:border-neon-cyan/60",
    "hover:shadow-[0_0_25px_rgba(6,245,208,0.3)]",
    "active:scale-95",
  ].join(" "),
  ghost: [
    "text-neon-purple/80 bg-transparent",
    "border border-transparent",
    "hover:text-neon-purple hover:bg-neon-purple/5",
    "hover:border-neon-purple/20",
  ].join(" "),
  danger: [
    "bg-red-900/50 text-red-300",
    "border border-red-500/30",
    "hover:bg-red-800/50 hover:border-red-400/50",
    "hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]",
    "active:scale-95",
  ].join(" "),
};

const sizes: Record<string, string> = {
  sm: "px-5 py-2 text-xs tracking-widest",
  md: "px-7 py-3 text-sm",
  lg: "px-10 py-4 text-base",
};

const cls = $derived(
  `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-40 cursor-not-allowed pointer-events-none" : "cursor-pointer"
  } ${className}`
);
</script>

<button class={cls} {disabled} {onclick}>
  <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none"></span>
  <span class="relative z-10 flex items-center justify-center gap-2">
    {@render children()}
  </span>
</button>
