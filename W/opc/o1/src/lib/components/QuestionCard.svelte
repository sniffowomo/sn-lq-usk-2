<script lang="ts">
import type { Question } from '$lib/data/types.ts';

interface Props {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number;
  showFeedback: boolean;
  onselect: (index: number) => void;
  onnext: () => void;
  onprevious?: () => void;
  onfinish?: () => void;
}

let {
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  showFeedback,
  onselect,
  onnext,
  onprevious,
  onfinish,
}: Props = $props();

const isFirst = $derived(questionNumber === 1);
const isLast = $derived(questionNumber === totalQuestions);
const progressPct = $derived(Math.round((questionNumber / totalQuestions) * 100));
const questionKey = $derived(question.id);

function optionCls(i: number): string {
  const base = "w-full p-3.5 sm:p-5 rounded-lg border transition-all duration-300 text-left cursor-pointer flex items-center gap-3 sm:gap-4 group/opt relative overflow-hidden";
  if (showFeedback) {
    if (i === question.answer)
      return `${base} border-neon-green/60 bg-neon-green/5 shadow-[0_0_20px_rgba(57,255,20,0.15)]`;
    if (i === selectedAnswer && i !== question.answer)
      return `${base} border-red-500/60 bg-red-500/5 shadow-[0_0_20px_rgba(239,68,68,0.15)]`;
  }
  if (i === selectedAnswer)
    return `${base} border-neon-purple/70 bg-neon-purple/10 shadow-[0_0_20px_rgba(168,85,247,0.2)]`;
  return `${base} border-surface-700/60 bg-surface-800/40 hover:border-neon-purple/40 hover:bg-neon-purple/5 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)]`;
}

function numCls(i: number): string {
  const base = "w-9 h-9 rounded-lg flex items-center justify-center text-sm font-display font-bold tracking-wider shrink-0 transition-all duration-300 border";
  if (i === selectedAnswer) return `${base} bg-neon-purple/20 border-neon-purple/60 text-neon-purple shadow-[0_0_10px_rgba(168,85,247,0.3)]`;
  if (showFeedback && i === question.answer) return `${base} bg-neon-green/20 border-neon-green/60 text-neon-green shadow-[0_0_10px_rgba(57,255,20,0.3)]`;
  if (showFeedback && i === selectedAnswer) return `${base} bg-red-500/20 border-red-500/60 text-red-400`;
  return `${base} bg-surface-700/50 border-surface-600/30 text-gray-500 group-hover/opt:border-neon-purple/30 group-hover/opt:text-neon-purple/70`;
}

const labels = ["A", "B", "C"];

const diffColors: Record<string, string> = {
  Beginner: "text-blue-400 border-blue-500/30 bg-blue-500/10",
  Intermediate: "text-neon-yellow border-neon-yellow/30 bg-neon-yellow/10",
  Advanced: "text-neon-pink border-neon-pink/30 bg-neon-pink/10",
};
</script>

{#key questionKey}
<div class="animate-slide-up">
  <div class="relative glass-panel rounded-2xl p-5 sm:p-8 border border-neon-purple/20">
    <!-- HUD corners -->
    <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-neon-cyan/40"></div>
    <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-neon-cyan/40"></div>
    <div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-neon-cyan/40"></div>
    <div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-neon-cyan/40"></div>

    <!-- Top accent line -->
    <div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-neon-purple/40 to-transparent"></div>

    <!-- Header -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center gap-3">
        <span class="font-display text-xs tracking-[0.3em] text-neon-cyan/70 uppercase">Query</span>
        <span class="font-display text-lg font-bold text-white">
          <span class="neon-text-purple">{questionNumber}</span>
          <span class="text-gray-600 mx-1">/</span>
          <span class="text-gray-400">{totalQuestions}</span>
        </span>
      </div>
      {#if question.difficulty}
        <span class="px-3 py-1 rounded text-xs font-display font-bold tracking-widest uppercase border {diffColors[question.difficulty] ?? 'text-gray-400 border-gray-600/30'}">
          {question.difficulty}
        </span>
      {/if}
    </div>

    <!-- Progress bar -->
    <div class="mb-8">
      <div class="w-full h-1 bg-surface-700/50 rounded-full overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-full transition-all duration-500"
          style="width: {progressPct}%"
        ></div>
      </div>
    </div>

    <!-- Question -->
    <h2 class="text-lg sm:text-xl md:text-2xl font-body font-semibold text-white/90 mb-6 sm:mb-8 leading-relaxed tracking-wide">
      {question.question}
    </h2>

    <!-- Options -->
    <div class="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
      {#each question.options as option, i}
        <button class={optionCls(i)} onclick={() => onselect(i)}>
          <span class={numCls(i)}>{labels[i]}</span>
          <span class="text-sm sm:text-base font-medium {selectedAnswer === i ? 'text-neon-purple' : 'text-gray-300 group-hover/opt:text-white'} transition-colors duration-300">
            {option}
          </span>
          {#if showFeedback && i === question.answer}
            <span class="ml-auto text-neon-green text-xs font-display tracking-wider">CORRECT</span>
          {:else if showFeedback && i === selectedAnswer && i !== question.answer}
            <span class="ml-auto text-red-400 text-xs font-display tracking-wider">WRONG</span>
          {/if}
        </button>
      {/each}
    </div>

    <!-- Feedback -->
    {#if showFeedback && question.explanation}
      <div class="mb-6 p-4 rounded-lg border border-neon-green/20 bg-neon-green/5 animate-scale-in">
        <p class="text-neon-green/90 font-body text-sm leading-relaxed">
          <span class="font-display text-xs tracking-widest uppercase text-neon-green/60 mr-2">Analysis</span>
          {question.explanation}
        </p>
      </div>
    {/if}

    <!-- Navigation -->
    <div class="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-3 sm:gap-0 pt-4 border-t border-surface-700/30">
      {#if !isFirst}
        <button
          class="px-5 py-2.5 rounded-lg font-display text-xs tracking-widest uppercase text-gray-400 border border-surface-700/50 hover:text-neon-purple hover:border-neon-purple/40 hover:shadow-[0_0_15px_rgba(168,85,247,0.1)] transition-all duration-300 order-2 sm:order-1"
          onclick={onprevious}
        >
          &larr; Prev
        </button>
      {:else}
        <div class="order-2 sm:order-1"></div>
      {/if}

      {#if isLast}
        <button
          class="px-8 py-2.5 rounded-lg font-display text-xs tracking-widest uppercase bg-gradient-to-r from-neon-cyan to-neon-green text-bg font-bold shadow-[0_0_20px_rgba(6,245,208,0.3)] hover:shadow-[0_0_35px_rgba(6,245,208,0.5)] transition-all duration-300 active:scale-95 order-1 sm:order-2"
          onclick={onfinish}
        >
          Submit &rarr;
        </button>
      {:else}
        <button
          class="px-8 py-2.5 rounded-lg font-display text-xs tracking-widest uppercase bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.5)] transition-all duration-300 active:scale-95 order-1 sm:order-2"
          onclick={onnext}
        >
          Next &rarr;
        </button>
      {/if}
    </div>
  </div>
</div>
{/key}
