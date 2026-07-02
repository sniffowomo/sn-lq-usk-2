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

const levelColors: Record<string, string> = {
  Beginner: "text-blue-400",
  Learning: "text-green-400",
  Competent: "text-purple-400",
  Proficient: "text-pink-400",
  Expert: "text-yellow-400",
};
const levelBadge: Record<string, string> = {
  Beginner: "bg-blue-900/30 border-blue-500/50 text-blue-300",
  Learning: "bg-green-900/30 border-green-500/50 text-green-300",
  Competent: "bg-purple-900/30 border-purple-500/50 text-purple-300",
  Proficient: "bg-pink-900/30 border-pink-500/50 text-pink-300",
  Expert: "bg-yellow-900/30 border-yellow-500/50 text-yellow-300",
};
const strokeColor: Record<string, string> = {
  Beginner: "#3b82f6",
  Learning: "#22c55e",
  Competent: "#a855f7",
  Proficient: "#ec4899",
  Expert: "#eab308",
};

const color = $derived(levelColors[result.knowledgeLevel] ?? "text-purple-400");
const badge = $derived(levelBadge[result.knowledgeLevel] ?? levelBadge.Beginner);
const stroke = $derived(strokeColor[result.knowledgeLevel] ?? strokeColor.Competent);
</script>

<div class="bg-surface-900/95 backdrop-blur-xl rounded-3xl p-10 border border-surface-800 shadow-2xl max-w-2xl mx-auto text-center relative overflow-hidden">
  <h2 class="text-3xl font-bold text-white mb-8">Assessment Complete!</h2>

  <div class="mb-8">
    <div class="w-40 h-40 mx-auto relative">
      <svg class="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r="54" fill="none" stroke="#252540" stroke-width="8" />
        <circle
          cx="60" cy="60" r="54"
          fill="none"
          stroke={stroke}
          stroke-width="8"
          stroke-linecap="round"
          stroke-dasharray={circumference}
          stroke-dashoffset={dashOffset}
          class="transition-all duration-1000 ease-out"
        />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center">
        <span class="text-3xl font-bold text-white">{pct}%</span>
      </div>
    </div>
    <div class="mt-6">
      <span class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border {badge}">
        {result.knowledgeLevel}
      </span>
    </div>
  </div>

  <div class="grid grid-cols-2 gap-6 mb-8">
    <div class="bg-surface-800/50 rounded-xl p-6 border border-surface-700">
      <div class="text-3xl font-bold text-green-400 mb-2">{result.correct}</div>
      <div class="text-sm text-gray-400 uppercase tracking-wider">Correct</div>
    </div>
    <div class="bg-surface-800/50 rounded-xl p-6 border border-surface-700">
      <div class="text-3xl font-bold text-red-400 mb-2">{result.incorrect}</div>
      <div class="text-sm text-gray-400 uppercase tracking-wider">Incorrect</div>
    </div>
  </div>

  <div class="bg-surface-800/50 rounded-xl p-6 border border-surface-700 mb-8">
    <div class="text-3xl font-bold {color} mb-2">{result.accuracy}%</div>
    <div class="text-sm text-gray-400 uppercase tracking-wider">Accuracy</div>
  </div>

  <div class="flex gap-4 justify-center">
    <button
      class="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
      onclick={onrestart}
    >
      Restart Assessment
    </button>
    <button
      class="px-6 py-3 rounded-lg bg-surface-800 text-white border border-surface-700 hover:bg-surface-700 hover:border-purple-500/30 transition-all"
      onclick={onhome}
    >
      Back Home
    </button>
  </div>
</div>
