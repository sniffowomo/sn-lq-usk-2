<script lang="ts">
import type { AssessmentType } from '$lib/AssessmentEngine';
import { createAssessment, AssessmentEngine } from '$lib/AssessmentEngine';
import QuestionCard from '$lib/components/QuestionCard.svelte';
import FloatingScore from '$lib/components/FloatingScore.svelte';
import ResultCard from '$lib/components/ResultCard.svelte';
import Footer from '$lib/components/Footer.svelte';
import type { AssessmentResult, Question } from '$lib/data/types.ts';

interface Props {
  type: AssessmentType;
  onhome?: () => void;
}

let { type, onhome }: Props = $props();

let engine = $state(createAssessment(type));
let currentIdx = $state(0);
let selectedAnswers = $state<number[]>(new Array(engine.totalQuestions).fill(-1));
let completed = $state(false);

const total = $derived(engine.totalQuestions);
const currentQuestion = $derived<Question>(engine.allQuestions[currentIdx]);

const score = $derived.by(() => {
  let s = 0;
  for (let i = 0; i < currentIdx; i++) {
    if (selectedAnswers[i] === engine.allQuestions[i].answer) s++;
  }
  return s;
});

const percentage = $derived(total > 0 ? Math.round((score / total) * 100) : 0);

const knowledgeLevel = $derived(
  percentage <= 20 ? "Beginner" :
  percentage <= 40 ? "Learning" :
  percentage <= 60 ? "Competent" :
  percentage <= 80 ? "Proficient" : "Expert"
);

const result = $derived<AssessmentResult | null>(completed ? {
  score,
  total,
  percentage,
  knowledgeLevel,
  correct: score,
  incorrect: total - score,
  accuracy: total > 0 ? Math.round((score / total) * 100) : 0,
} : null);

const levelColors: Record<string, string> = {
  Beginner: "text-blue-400 border-blue-500/40 bg-blue-500/10",
  Learning: "text-green-400 border-green-500/40 bg-green-500/10",
  Competent: "text-neon-purple border-neon-purple/40 bg-neon-purple/10",
  Proficient: "text-neon-pink border-neon-pink/40 bg-neon-pink/10",
  Expert: "text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10",
};

function handleSelect(index: number) {
  const arr = [...selectedAnswers];
  arr[currentIdx] = index;
  selectedAnswers = arr;
  engine.selectAnswer(index);
}

function handleNext() {
  engine.nextQuestion();
  currentIdx = engine.currentIndex;
}

function handlePrevious() {
  engine.previousQuestion();
  currentIdx = engine.currentIndex;
}

function handleFinish() {
  completed = true;
}

function handleRestart() {
  engine = createAssessment(type);
  currentIdx = 0;
  selectedAnswers = new Array(engine.totalQuestions).fill(-1);
  completed = false;
}

const title = $derived(type === 'svelte' ? 'Svelte 5' : 'Usability & UX');
</script>

<svelte:head>
  <title>NEXUS // {title} Assessment</title>
</svelte:head>

<div class="min-h-screen bg-bg text-white relative overflow-hidden grid-bg flex flex-col">
  <!-- Ambient background -->
  <div class="fixed inset-0 pointer-events-none">
    <div class="absolute -top-40 -right-40 w-[400px] h-[400px] bg-neon-purple/5 rounded-full blur-[120px]"></div>
    <div class="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[120px]"></div>
    <div class="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-purple/15 to-transparent top-0 animate-[scan-line_8s_linear_infinite]"></div>
  </div>

  <div class="relative z-10 max-w-4xl mx-auto px-3 sm:px-4 md:px-8 py-6 sm:py-8 space-y-4 sm:space-y-6">
    {#if !completed}
      <FloatingScore {score} {total} />

      <QuestionCard
        question={currentQuestion}
        questionNumber={currentIdx + 1}
        totalQuestions={total}
        selectedAnswer={selectedAnswers[currentIdx]}
        showFeedback={selectedAnswers[currentIdx] !== -1}
        onselect={handleSelect}
        onnext={handleNext}
        onprevious={handlePrevious}
        onfinish={handleFinish}
      />

      <!-- Bottom HUD panel -->
      <div class="max-w-2xl mx-auto animate-slide-up" style="animation-delay: 0.2s;">
        <div class="relative glass-panel rounded-xl p-4 sm:p-5 border border-neon-purple/15">
          <!-- HUD corners -->
          <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-neon-cyan/30"></div>
          <div class="absolute top-0 right-0 w-4 h-4 border-t border-r border-neon-cyan/30"></div>
          <div class="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neon-cyan/30"></div>
          <div class="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neon-cyan/30"></div>

          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-3">
              <span class="font-display text-[10px] tracking-[0.3em] text-gray-600 uppercase">Score</span>
              <span class="font-display text-sm font-bold text-neon-cyan">{score} / {total}</span>
            </div>
            <span class="font-display text-sm font-bold text-neon-purple">{percentage}%</span>
          </div>

          <div class="w-full h-1.5 bg-surface-800 rounded-full overflow-hidden mb-3 border border-surface-700/30">
            <div
              class="h-full bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan rounded-full transition-all duration-500 relative"
              style="width: {percentage}%"
            >
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style="background-size: 200% 100%;"></div>
            </div>
          </div>

          <div class="flex flex-wrap justify-between items-center gap-2">
            <span class="font-display text-[9px] sm:text-[10px] tracking-widest text-gray-600 uppercase">
              Q{currentIdx + 1}/{total} &middot; {currentIdx} done &middot; {total - currentIdx - 1} left
            </span>
            <span class="px-3 py-1 rounded text-[10px] font-display font-bold tracking-widest uppercase border {levelColors[knowledgeLevel] ?? levelColors.Beginner}">
              {knowledgeLevel}
            </span>
          </div>
        </div>
      </div>
    {:else if result}
      <ResultCard {result} onrestart={handleRestart} {onhome} />
    {/if}

    {#if !completed}
      <div class="text-center pt-2">
        <button
          class="font-display text-[10px] tracking-[0.3em] text-gray-600 uppercase hover:text-neon-purple transition-colors duration-300"
          onclick={onhome}
        >
          &larr; Return to Base
        </button>
      </div>
    {/if}

    <div class="mt-auto pt-8">
      <Footer />
    </div>
  </div>
</div>
