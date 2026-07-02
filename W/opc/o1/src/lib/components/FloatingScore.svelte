<script lang="ts">
interface Props {
  score: number;
  total: number;
  class?: string;
}

let { score = 0, total = 25, class: className = "" }: Props = $props();

const percentage = $derived(total > 0 ? Math.round((score / total) * 100) : 0);
const knowledgeLevel = $derived(
  percentage <= 20 ? "Beginner" :
  percentage <= 40 ? "Learning" :
  percentage <= 60 ? "Competent" :
  percentage <= 80 ? "Proficient" : "Expert"
);

const levelConfig: Record<string, { color: string; glow: string; border: string }> = {
  Beginner:    { color: "text-blue-400",   glow: "shadow-[0_0_20px_rgba(59,130,246,0.3)]",   border: "border-blue-500/50" },
  Learning:    { color: "text-green-400",  glow: "shadow-[0_0_20px_rgba(34,197,94,0.3)]",    border: "border-green-500/50" },
  Competent:   { color: "text-neon-purple", glow: "shadow-[0_0_20px_rgba(168,85,247,0.3)]",  border: "border-neon-purple/50" },
  Proficient:  { color: "text-neon-pink",  glow: "shadow-[0_0_20px_rgba(255,45,120,0.3)]",   border: "border-neon-pink/50" },
  Expert:      { color: "text-neon-cyan",  glow: "shadow-[0_0_25px_rgba(6,245,208,0.4)]",    border: "border-neon-cyan/50" },
};

const cfg = $derived(levelConfig[knowledgeLevel] ?? levelConfig.Beginner);
</script>

<div class="fixed top-4 right-4 z-50 animate-slide-in-right {className}">
  <div class="relative group">
    <!-- Outer glow ring -->
    <div class="absolute -inset-1 rounded-2xl bg-gradient-to-br from-neon-purple/30 to-neon-cyan/20 blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow pointer-events-none"></div>

    <div class="relative glass-panel rounded-2xl p-5 border border-neon-purple/30 min-w-[160px]">
      <!-- Scan line -->
      <div class="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div class="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent top-0 animate-[scan-line_4s_linear_infinite]"></div>
      </div>

      <!-- Header accent line -->
      <div class="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>

      <div class="text-center space-y-2">
        <!-- Score display -->
        <div class="font-display text-3xl font-black tracking-tight">
          <span class="neon-text-cyan">{score}</span>
          <span class="text-gray-600 mx-1">/</span>
          <span class="text-gray-400">{total}</span>
        </div>

        <!-- Percentage -->
        <div class="font-display text-lg font-bold {cfg.color} tracking-wider">
          {percentage}%
        </div>

        <!-- Divider -->
        <div class="h-px bg-gradient-to-r from-transparent via-neon-purple/30 to-transparent"></div>

        <!-- Knowledge level badge -->
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-display font-bold tracking-widest uppercase border {cfg.border} {cfg.color} {cfg.glow}">
          <span class="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
          {knowledgeLevel}
        </div>
      </div>
    </div>
  </div>
</div>
