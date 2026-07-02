<script>
import { createAssessment, AssessmentEngine, AssessmentType } from '../lib/AssessmentEngine.ts';
import { Card } from '../lib/components/Card.svelte';
import { Button } from '../lib/components/Button.svelte';

let assessmentType = $state(null);
let assessmentEngine = $state(null);
let showResults = $state(false);

function startAssessment(type) {
  assessmentType = type;
  assessmentEngine = createAssessment(type);
  showResults = false;
}

function restartAssessment() {
  if (assessmentEngine) {
    assessmentEngine.restart();
    showResults = false;
  }
}

function goToHome() {
  assessmentType = null;
  assessmentEngine = null;
  showResults = false;
}

function handleAnswerSelect(answerIndex) {
  if (assessmentEngine) {
    assessmentEngine.selectAnswer(answerIndex);
  }
}

function handleNext() {
  if (assessmentEngine) {
    assessmentEngine.nextQuestion();
    if (assessmentEngine.isCompleted) {
      showResults = true;
    }
  }
}

const homePageStyles = "min-h-screen bg-gradient-to-br from-bg to-surface-900 text-white p-8";
const containerStyles = "max-w-6xl mx-auto";
const headerStyles = "text-center mb-16";
const titleStyles = "text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent";
const subtitleStyles = "text-xl text-gray-400 max-w-2xl mx-auto";
const cardsContainerStyles = "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16";
const floatingScoreStyles = "fixed top-4 right-4 z-50";
const assessmentContainerStyles = "space-y-8";
const navigationStyles = "flex justify-between mt-8";
const resultStyles = "mt-8";

const floatingScore = $derived(
  assessmentEngine ? 
    {
      score: assessmentEngine.score,
      total: assessmentEngine.totalQuestions,
      class: floatingScoreStyles
    } : null
);

const assessmentStats = $derived(
  assessmentEngine ? {
    progress: assessmentEngine.progress,
    answered: assessmentEngine.answeredCount,
    remaining: assessmentEngine.remainingCount,
    percentage: assessmentEngine.percentage,
    knowledgeLevel: assessmentEngine.knowledgeLevel,
  } : null
);

const assessmentResult = $derived(
  assessmentEngine && showResults ? assessmentEngine.getResult() : null
);
</script>

<div class="{homePageStyles} {containerStyles}">
  {#if !assessmentType}
    <div class="{headerStyles}">
      <h1 class="{titleStyles}">Premium Developer Assessment Platform</h1>
      <p class="{subtitleStyles}">Choose your assessment to master your skills</p>
    </div>
    
    <div class="{cardsContainerStyles}">
      <Card class="p-8">
        <div class="text-center space-y-6">
          <h2 class="text-2xl font-bold text-white">Svelte 5 Knowledge Assessment</h2>
          <p class="text-gray-400">Test your expertise in Svelte 5 framework, runes, and advanced component patterns</p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => startAssessment('svelte')}
          >
            Start Svelte Assessment
          </Button>
        </div>
      </Card>
      
      <Card class="p-8">
        <div class="text-center space-y-6">
          <h2 class="text-2xl font-bold text-white">Usability & UX Assessment</h2>
          <p class="text-gray-400">Evaluate your understanding of UX principles, accessibility, and user experience design</p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => startAssessment('usability')}
          >
            Start Usability Assessment
          </Button>
        </div>
      </Card>
    </div>
  {:else if !showResults}
    <svelte:component this="svelte:svelte"
      type={assessmentType}
      on:restart={restartAssessment}
      on:home={goToHome}
      on:select={(e) => handleAnswerSelect(e.detail)}
      on:next={handleNext} />
  {:else}
    <div class="{resultStyles}">
      <h2 class="text-3xl font-bold mb-6">Assessment Complete!</h2>
      <p>Your results will be displayed here.</p>
    </div>
  {/if}
  
  {#if assessmentEngine}
    <button 
      class="{navigationStyles}"
      onClick={() => goToHome()}
    >
      <span>← Back to Home</span>
    </button>
  {/if}
</div>

<style>
.from-bg {
  --bg: #0b0b13;
}
.to-surface-900 {
  --surface-900: #151526;
}

.text-transparent {
  color: transparent;
}

.bg-clip-text {
  background-clip: text;
}
</style>
