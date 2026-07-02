import type { Question, AssessmentResult } from './data/types';
import { svelteQuestions } from './data/svelteQuestions';
import { usabilityQuestions } from './data/usabilityQuestions';

export type AssessmentType = 'svelte' | 'usability';

export class AssessmentEngine {
  currentIndex = 0;
  selectedAnswers: number[];

  readonly allQuestions: Question[];

  constructor(questions: Question[]) {
    this.allQuestions = questions;
    this.selectedAnswers = new Array(questions.length).fill(-1);
  }

  get currentQuestion(): Question {
    return this.allQuestions[this.currentIndex];
  }

  get totalQuestions(): number {
    return this.allQuestions.length;
  }

  get progress(): number {
    return this.totalQuestions > 0
      ? Math.round((this.currentIndex / this.totalQuestions) * 100)
      : 0;
  }

  get answeredCount(): number {
    return this.currentIndex;
  }

  get remainingCount(): number {
    return this.allQuestions.length - this.currentIndex - 1;
  }

  get score(): number {
    let s = 0;
    for (let i = 0; i < this.currentIndex; i++) {
      if (this.selectedAnswers[i] === this.allQuestions[i].answer) s++;
    }
    return s;
  }

  get percentage(): number {
    return this.totalQuestions > 0
      ? Math.round((this.score / this.totalQuestions) * 100)
      : 0;
  }

  get knowledgeLevel(): "Beginner" | "Learning" | "Competent" | "Proficient" | "Expert" {
    const p = this.percentage;
    if (p <= 20) return "Beginner";
    if (p <= 40) return "Learning";
    if (p <= 60) return "Competent";
    if (p <= 80) return "Proficient";
    return "Expert";
  }

  get correctAnswers(): number {
    let c = 0;
    for (let i = 0; i < this.currentIndex; i++) {
      if (this.selectedAnswers[i] === this.allQuestions[i].answer) c++;
    }
    return c;
  }

  get incorrectAnswers(): number {
    return this.answeredCount - this.correctAnswers;
  }

  get accuracy(): number {
    return this.answeredCount > 0
      ? Math.round((this.correctAnswers / this.answeredCount) * 100)
      : 0;
  }

  get isCompleted(): boolean {
    return this.currentIndex >= this.allQuestions.length;
  }

  selectAnswer(answerIndex: number): void {
    this.selectedAnswers[this.currentIndex] = answerIndex;
  }

  nextQuestion(): void {
    if (!this.isCompleted) this.currentIndex++;
  }

  previousQuestion(): void {
    if (this.currentIndex > 0) this.currentIndex--;
  }

  restart(): void {
    this.currentIndex = 0;
    this.selectedAnswers = new Array(this.allQuestions.length).fill(-1);
  }

  getResult(): AssessmentResult {
    return {
      score: this.score,
      total: this.totalQuestions,
      percentage: this.percentage,
      knowledgeLevel: this.knowledgeLevel,
      correct: this.correctAnswers,
      incorrect: this.incorrectAnswers,
      accuracy: this.accuracy,
    };
  }
}

export function createAssessment(type: AssessmentType): AssessmentEngine {
  const questions = type === 'svelte' ? svelteQuestions : usabilityQuestions;
  return new AssessmentEngine(questions);
}
