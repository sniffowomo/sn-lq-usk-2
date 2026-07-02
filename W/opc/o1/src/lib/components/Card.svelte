<script lang="ts">
interface Props {
  class?: string;
  glow?: boolean;
  children?: any;
}

let { class: className = "", glow = false, children }: Props = $props();

const card = "relative glass-panel rounded-xl overflow-hidden transition-all duration-500 group";
const border = "absolute inset-0 rounded-xl pointer-events-none";
const inner = "relative z-10";
const corner = "absolute pointer-events-none";
</script>

<div class="{card} {className}">
  <!-- Animated gradient border -->
  <div class="absolute inset-0 rounded-xl p-px bg-gradient-to-br from-neon-purple/40 via-neon-cyan/20 to-neon-pink/40 opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none">
    <div class="w-full h-full rounded-xl bg-surface-900/95"></div>
  </div>

  <!-- Hover glow -->
  {#if glow}
    <div class="absolute -inset-1 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
  {/if}

  <!-- Scan line overlay on hover -->
  <div class="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-xl">
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/[0.03] to-transparent h-[200%] -translate-y-full group-hover:translate-y-full transition-transform duration-[2s] ease-linear"></div>
  </div>

  <!-- HUD corners -->
  <div class="{corner} top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors duration-500"></div>
  <div class="{corner} top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors duration-500"></div>
  <div class="{corner} bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors duration-500"></div>
  <div class="{corner} bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-cyan/50 group-hover:border-neon-cyan transition-colors duration-500"></div>

  <div class="{inner} p-6">
    {@render children()}
  </div>
</div>
