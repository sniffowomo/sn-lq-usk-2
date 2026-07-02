<script lang="ts">
interface Props {
  value: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  class?: string;
}

let { value = 0, max = 100, size = "md", class: className = "" }: Props = $props();

const pct = $derived(max > 0 ? Math.min(Math.round((value / max) * 100), 100) : 0);

const heights: Record<string, string> = { sm: "h-1", md: "h-2", lg: "h-3" };
</script>

<div class="w-full bg-surface-800 rounded-full overflow-hidden shadow-inner {heights[size]} {className}">
  <div
    class="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full transition-all duration-500 ease-out"
    style="width: {pct}%"
  ></div>
</div>
