<script lang="ts">
interface Props {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  class?: string;
}

let { value = 0, max = 100, size = "md", class: className = "" }: Props = $props();

const pct = $derived(max > 0 ? Math.min(Math.round((value / max) * 100), 100) : 0);

const heights: Record<string, string> = { sm: "h-1.5", md: "h-2.5", lg: "h-4" };
</script>

<div class="relative w-full {heights[size]} {className}">
  <!-- Track -->
  <div class="absolute inset-0 bg-surface-800 rounded-full overflow-hidden border border-surface-700/50">
    <!-- Grid overlay -->
    <div class="absolute inset-0 opacity-20" style="background-image: repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(168,85,247,0.1) 8px, rgba(168,85,247,0.1) 9px);"></div>
  </div>

  <!-- Fill -->
  <div class="absolute inset-0 rounded-full overflow-hidden">
    <div
      class="h-full rounded-full transition-all duration-700 ease-out relative"
      style="width: {pct}%"
    >
      <!-- Gradient fill -->
      <div class="absolute inset-0 bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-full"></div>

      <!-- Shimmer overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer rounded-full" style="background-size: 200% 100%;"></div>

      <!-- Leading edge glow -->
      <div class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-full bg-white/30 blur-sm rounded-full"></div>
    </div>
  </div>

  <!-- Neon border glow -->
  {#if pct > 0}
    <div
      class="absolute top-0 left-0 h-full rounded-full blur-sm opacity-50"
      style="width: {pct}%; background: linear-gradient(90deg, var(--color-neon-purple), var(--color-neon-pink));"
    ></div>
  {/if}
</div>
