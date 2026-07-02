<script lang="ts">
interface Props {
  score: number;
  total: number;
  class?: string;
}

let { score = 0, total = 25, class: className = "" }: Props = $props();

const percentage = $derived(total > 0 ? Math.round((score / total) * 100) : 0);
const knowledgeLevel = $derived(
  percentage <= 20
    ? "Beginner"
    : percentage <= 40
      ? "Learning"
      : percentage <= 60
        ? "Competent"
        : percentage <= 80
          ? "Proficient"
          : "Expert"
);

const badgeColors: Record<string, string> = {
  Beginner: "bg-blue-900/30 border-blue-500/50 text-blue-300",
  Learning: "bg-green-900/30 border-green-500/50 text-green-300",
  Competent: "bg-purple-900/30 border-purple-500/50 text-purple-300",
  Proficient: "bg-pink-900/30 border-pink-500/50 text-pink-300",
  Expert: "bg-yellow-900/30 border-yellow-500/50 text-yellow-300",
};

const badge = $derived(badgeColors[knowledgeLevel] ?? badgeColors.Beginner);
</script>

<div
  class="fixed top-4 right-4 z-50 bg-surface-900/95 backdrop-blur-xl rounded-2xl p-4 border border-surface-800 shadow-2xl max-w-xs {className}"
>
  <div class="text-center space-y-2">
    <div class="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      {score} / {total}
    </div>
    <div class="text-lg font-semibold text-white">{percentage}%</div>
    <span class="inline-block px-3 py-1 rounded-full text-xs font-medium border {badge}">
      {knowledgeLevel}
    </span>
  </div>
</div>
