<script lang="ts">
import type { AssessmentType } from '$lib/AssessmentEngine';
import { createAssessment, AssessmentEngine } from '$lib/AssessmentEngine';
import QuestionCard from '$lib/components/QuestionCard.svelte';
import FloatingScore from '$lib/components/FloatingScore.svelte';
import ResultCard from '$lib/components/ResultCard.svelte';
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

const percentage = $derived(
  total > 0 ? Math.round((score / total) * 100) : 0
);

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
</script>

<div class="min-h-screen bg-bg text-white p-4 md:p-8">
  <div class="max-w-4xl mx-auto space-y-8">
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

      <div class="max-w-2xl mx-auto bg-surface-900/80 backdrop-blur-xl rounded-2xl p-6 border border-surface-800">
        <div class="flex justify-between text-sm text-gray-400 mb-3">
          <span>Score: {score} / {total}</span>
          <span>{percentage}%</span>
        </div>
        <div class="w-full h-2 bg-surface-800 rounded-full overflow-hidden mb-3">
          <div
            class="h-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full transition-all duration-500"
            style="width: {percentage}%"
          ></div>
        </div>
        <div class="flex justify-between items-center text-sm">
          <span class="text-gray-400">
            Question {currentIdx + 1} of {total} &middot;
            {currentIdx} answered &middot;
            {total - currentIdx - 1} remaining
          </span>
          <span class="px-3 py-1 rounded-full text-xs font-medium border
            {knowledgeLevel === 'Beginner' ? 'bg-blue-900/30 border-blue-500/50 text-blue-300' :
             knowledgeLevel === 'Learning' ? 'bg-green-900/30 border-green-500/50 text-green-300' :
             knowledgeLevel === 'Competent' ? 'bg-purple-900/30 border-purple-500/50 text-purple-300' :
             knowledgeLevel === 'Proficient' ? 'bg-pink-900/30 border-pink-500/50 text-pink-300' :
             'bg-yellow-900/30 border-yellow-500/50 text-yellow-300'}">
            {knowledgeLevel}
          </span>
        </div>
      </div>
    {:else if result}
      <ResultCard {result} onrestart={handleRestart} {onhome} />
    {/if}

    {#if !completed}
      <div class="text-center">
        <button
          class="text-gray-400 hover:text-white transition-colors text-sm"
          onclick={onhome}
        >
          &larr; Back to Home
        </button>
      </div>
    {/if}
  </div>
</div>
