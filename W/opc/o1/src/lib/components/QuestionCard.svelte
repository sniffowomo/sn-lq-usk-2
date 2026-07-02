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

function optionCls(i: number): string {
  const base =
    "w-full p-5 rounded-xl border-2 transition-all duration-200 text-left cursor-pointer flex items-center gap-4";
  if (showFeedback) {
    if (i === question.answer) return `${base} border-green-500 bg-green-900/20`;
    if (i === selectedAnswer && i !== question.answer)
      return `${base} border-red-500 bg-red-900/20`;
  }
  if (i === selectedAnswer)
    return `${base} border-purple-500 bg-purple-900/20 shadow-lg shadow-purple-500/10`;
  return `${base} border-surface-700 bg-surface-800 hover:border-purple-500/50 hover:bg-purple-900/10`;
}

function numCls(i: number): string {
  const base =
    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shrink-0 transition-colors duration-200";
  if (i === selectedAnswer) return `${base} bg-purple-600 text-white`;
  if (showFeedback && i === question.answer) return `${base} bg-green-600 text-white`;
  if (showFeedback && i === selectedAnswer) return `${base} bg-red-600 text-white`;
  return `${base} bg-surface-700 text-gray-400`;
}

const labels = ["A", "B", "C"];
</script>

<div class="bg-surface-900/90 backdrop-blur-lg rounded-3xl p-8 border border-surface-800 shadow-2xl max-w-2xl mx-auto relative overflow-hidden">
  <div class="mb-6">
    <div class="flex justify-between text-sm text-gray-400 mb-2">
      <span>Question {questionNumber} of {totalQuestions}</span>
      <span>{progressPct}%</span>
    </div>
    <div class="w-full h-2 bg-surface-800 rounded-full overflow-hidden">
      <div
        class="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full transition-all duration-500"
        style="width: {progressPct}%"
      ></div>
    </div>
  </div>

  <h2 class="text-xl font-semibold text-white mb-8 leading-relaxed">{question.question}</h2>

  <div class="space-y-3 mb-8">
    {#each question.options as option, i}
      <button class={optionCls(i)} onclick={() => onselect(i)}>
        <span class={numCls(i)}>{labels[i]}</span>
        <span class="text-lg font-medium {selectedAnswer === i ? 'text-purple-300' : 'text-gray-200'}">
          {option}
        </span>
      </button>
    {/each}
  </div>

  {#if showFeedback && question.explanation}
    <div class="mb-6 p-4 rounded-xl bg-surface-800/50 border border-surface-700">
      <p class="text-green-400 font-medium text-sm">{question.explanation}</p>
    </div>
  {/if}

  <div class="flex justify-between items-center">
    {#if !isFirst}
      <button
        class="px-5 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-surface-800 transition-colors"
        onclick={onprevious}
      >
        Previous
      </button>
    {:else}
      <div></div>
    {/if}

    {#if isLast}
      <button
        class="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
        onclick={onfinish}
      >
        Finish
      </button>
    {:else}
      <button
        class="px-6 py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
        onclick={onnext}
      >
        Next
      </button>
    {/if}
  </div>
</div>
