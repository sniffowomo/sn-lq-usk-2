// <reference path="./app.d.ts" />

import { AssessmentEngine, AssessmentType } from '../lib/AssessmentEngine.ts';
import { QuestionCard } from '../lib/components/QuestionCard.svelte';
import { Button } from '../lib/components/Button.svelte';
import { ProgressBar } from '../lib/components/ProgressBar.svelte';
import { FloatingScore } from '../lib/components/FloatingScore.svelte';
import { ResultCard } from '../lib/components/ResultCard.svelte';

interface AssessmentPageProps {
  type: AssessmentType;
}

let { type } = $props<AssessmentPageProps>();

let assessmentEngine = $state<AssessmentEngine | null>(null);
let selectedAnswer = $state<number | null>(null);
let showFeedback = $state(false);
let showResults = $state(false);

$effect(() => {
  if (type) {
    assessmentEngine = new AssessmentEngine(
      type === 'svelte' 
        ? await import('../lib/data/svelteQuestions.ts').then(m => m.svelteQuestions)
        : await import('../lib/data/usabilityQuestions.ts').then(m => m.usabilityQuestions)
    );
  }
});

function handleAnswerSelect(answerIndex: number) {
  if (assessmentEngine && !showFeedback) {
    selectedAnswer = answerIndex;
    assessmentEngine.selectAnswer(answerIndex);
    showFeedback = true;
  }
}

function handleNext() {
  if (assessmentEngine) {
    assessmentEngine.nextQuestion();
    selectedAnswer = null;
    showFeedback = false;
    
    if (assessmentEngine.isCompleted) {
      showResults = true;
    }
  }
}

function restartAssessment() {
  assessmentEngine?.restart();
  selectedAnswer = null;
  showFeedback = false;
  showResults = false;
}

function goToHome() {
  type = 'svelte' in window ? 'svelte' : 'usability';
  assessmentEngine = null;
  selectedAnswer = null;
  showFeedback = false;
  showResults = false;
}

const assessmentContainerStyles = "min-h-screen bg-gradient-to-br from-bg to-surface-900 text-white p-8";
const contentContainerStyles = "max-w-4xl mx-auto";
const progressSectionStyles = "sticky top-4 z-40 mb-8 bg-surface-900/80 backdrop-blur-xl rounded-2xl p-6 border border-surface-800";
const questionSectionStyles = "space-y-8";
const navigationStyles = "flex justify-between mt-8";
const homeButtonStyles = "mt-8";

const progressStats = $derived(
  assessmentEngine ? {
    progress: assessmentEngine.progress,
    answered: assessmentEngine.answeredCount,
    remaining: assessmentEngine.remainingCount,
    percentage: assessmentEngine.percentage,
    knowledgeLevel: assessmentEngine.knowledgeLevel,
  } : null
);

const currentQuestion = $derived(
  assessmentEngine && assessmentEngine.currentQuestion ? assessmentEngine.currentQuestion : null
);

const result = $derived(
  assessmentEngine && showResults ? assessmentEngine.getResult() : null
);