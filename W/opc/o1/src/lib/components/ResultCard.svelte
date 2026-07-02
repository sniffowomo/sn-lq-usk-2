<script lang="ts">
import type { AssessmentResult } from '$lib/data/types.ts';

interface Props {
  result: AssessmentResult;
  onrestart?: () => void;
  onhome?: () => void;
}

let { result, onrestart, onhome }: Props = $props();

const pct = $derived(result.percentage);
const circumference = 2 * Math.PI * 54;
const dashOffset = $derived(circumference - (pct / 100) * circumference);

const levelConfig: Record<string, { color: string; badge: string; stroke: string; glow: string }> = {
  Beginner:   { color: "text-blue-400",    badge: "bg-blue-500/10 border-blue-500/40 text-blue-300",   stroke: "#3b82f6", glow: "drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" },
  Learning:   { color: "text-green-400",   badge: "bg-green-500/10 border-green-500/40 text-green-300", stroke: "#22c55e", glow: "drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" },
  Competent:  { color: "text-neon-purple", badge: "bg-neon-purple/10 border-neon-purple/40 text-purple-300", stroke: "#a855f7", glow: "drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" },
  Proficient: { color: "text-neon-pink",   badge: "bg-neon-pink/10 border-neon-pink/40 text-pink-300",  stroke: "#ff2d78", glow: "drop-shadow-[0_0_8px_rgba(255,45,120,0.5)]" },
  Expert:     { color: "text-neon-cyan",   badge: "bg-neon-cyan/10 border-neon-cyan/40 text-cyan-300", stroke: "#06f5d0", glow: "drop-shadow-[0_0_12px_rgba(6,245,208,0.6)]" },
};

const cfg = $derived(levelConfig[result.knowledgeLevel] ?? levelConfig.Beginner);

const confettiColors = ["#ff2d78", "#a855f7", "#06f5d0", "#3b82f6", "#ffe600", "#39ff14"];
const confettiPieces = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  delay: Math.random() * 2,
  duration: 2 + Math.random() * 3,
  color: confettiColors[i % confettiColors.length],
  size: 4 + Math.random() * 6,
  rotation: Math.random() * 360,
}));
</script>

<div class="animate-scale-in">
  <!-- Confetti -->
  {#if pct >= 60}
    <div class="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {#each confettiPieces as piece}
        <div
          class="absolute rounded-sm"
          style="
            left: {piece.left}%;
            width: {piece.size}px;
            height: {piece.size}px;
            background: {piece.color};
            animation: confetti-fall {piece.duration}s linear {piece.delay}s both;
            transform: rotate({piece.rotation}deg);
          "
        ></div>
      {/each}
    </div>
  {/if}

  <div class="relative glass-panel rounded-2xl p-6 sm:p-10 border border-neon-purple/20 max-w-2xl mx-auto text-center">
    <!-- HUD corners -->
    <div class="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/50"></div>
    <div class="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-cyan/50"></div>
    <div class="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-cyan/50"></div>
    <div class="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/50"></div>

    <!-- Title -->
    <div class="mb-8">
      <h2 class="font-display text-2xl sm:text-3xl font-black tracking-wider uppercase text-white mb-2">
        Mission <span class="neon-text-cyan">Complete</span>
      </h2>
      <div class="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
    </div>

    <!-- Circular score -->
    <div class="mb-8 sm:mb-10">
      <div class="w-32 h-32 sm:w-44 sm:h-44 mx-auto relative">
        <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <!-- Background ring -->
          <circle cx="60" cy="60" r="54" fill="none" stroke="#1a1a30" stroke-width="6" />
          <!-- Track grid -->
          <circle cx="60" cy="60" r="54" fill="none" stroke="rgba(168,85,247,0.08)" stroke-width="6" stroke-dasharray="4 8" />
          <!-- Progress ring -->
          <circle
            cx="60" cy="60" r="54"
            fill="none"
            stroke={cfg.stroke}
            stroke-width="6"
            stroke-linecap="round"
            stroke-dasharray={circumference}
            stroke-dashoffset={dashOffset}
            class="transition-all duration-[1.5s] ease-out {cfg.glow}"
          />
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="font-display text-3xl sm:text-4xl font-black {cfg.color}">{pct}%</span>
          <span class="font-display text-[10px] tracking-[0.3em] text-gray-500 uppercase mt-1">Score</span>
        </div>
      </div>
      <div class="mt-6">
        <span class="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-display font-bold tracking-[0.2em] uppercase border {cfg.badge} animate-pulse-glow">
          <span class="w-2 h-2 rounded-full bg-current animate-pulse"></span>
          {result.knowledgeLevel}
        </span>
      </div>
    </div>

    <!-- Stats grid -->
    <div class="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
      <div class="glass-panel rounded-xl p-3 sm:p-5 border border-neon-green/20">
        <div class="font-display text-2xl sm:text-3xl font-black text-neon-green mb-1">{result.correct}</div>
        <div class="font-display text-[10px] tracking-[0.3em] text-gray-500 uppercase">Correct</div>
      </div>
      <div class="glass-panel rounded-xl p-3 sm:p-5 border border-red-500/20">
        <div class="font-display text-2xl sm:text-3xl font-black text-red-400 mb-1">{result.incorrect}</div>
        <div class="font-display text-[10px] tracking-[0.3em] text-gray-500 uppercase">Incorrect</div>
      </div>
    </div>

    <div class="glass-panel rounded-xl p-3 sm:p-5 border border-neon-purple/20 mb-6 sm:mb-8">
      <div class="font-display text-2xl sm:text-3xl font-black {cfg.color} mb-1">{result.accuracy}%</div>
      <div class="font-display text-[10px] tracking-[0.3em] text-gray-500 uppercase">Accuracy</div>
    </div>

    <!-- Actions -->
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        class="px-8 py-3 rounded-lg font-display text-xs tracking-widest uppercase bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all duration-300 active:scale-95"
        onclick={onrestart}
      >
        Restart Mission
      </button>
      <button
        class="px-8 py-3 rounded-lg font-display text-xs tracking-widest uppercase glass-panel text-neon-cyan border border-neon-cyan/30 hover:border-neon-cyan/60 hover:shadow-[0_0_20px_rgba(6,245,208,0.2)] transition-all duration-300 active:scale-95"
        onclick={onhome}
      >
        Base Camp
      </button>
    </div>
  </div>
</div>
