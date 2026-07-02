// <reference path="./types.ts" />

import { svelteQuestions } from './data/svelteQuestions.ts';
import { usabilityQuestions } from './data/usabilityQuestions.ts';

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

export interface AssessmentResult {
  score: number;
  total: number;
  percentage: number;
  knowledgeLevel: "Beginner" | "Learning" | "Competent" | "Proficient" | "Expert";
  correct: number;
  incorrect: number;
  accuracy: number;
}

export class AssessmentEngine {
  private currentQuestionIndex = $state(0);
  private selectedAnswers: number[];
  private startTime: number;

  private readonly allQuestions: Question[];

  constructor(questions: Question[]) {
    this.allQuestions = questions;
    this.selectedAnswers = new Array(questions.length).fill(-1);
    this.startTime = Date.now();
  }

  public get currentQuestion(): Question {
    return this.allQuestions[this.currentQuestionIndex];
  }

  public get currentQuestionIndex(): number {
    return this.currentQuestionIndex;
  }

  public get totalQuestions(): number {
    return this.allQuestions.length;
  }

  public get progress(): number {
    return (this.currentQuestionIndex / this.allQuestions.length) * 100;
  }

  public get answeredCount(): number {
    return this.currentQuestionIndex;
  }

  public get remainingCount(): number {
    return this.allQuestions.length - this.currentQuestionIndex - 1;
  }

  public get score(): number {
    let score = 0;
    for (let i = 0; i < this.currentQuestionIndex; i++) {
      if (this.selectedAnswers[i] === this.allQuestions[i].answer) {
        score++;
      }
    }
    return score;
  }

  public get percentage(): number {
    return this.totalQuestions > 0 ? Math.round((this.score / this.totalQuestions) * 100) : 0;
  }

  public get knowledgeLevel(): "Beginner" | "Learning" | "Competent" | "Proficient" | "Expert" {
    const percentage = this.percentage;
    if (percentage <= 20) return "Beginner";
    if (percentage <= 40) return "Learning";
    if (percentage <= 60) return "Competent";
    if (percentage <= 80) return "Proficient";
    return "Expert";
  }

  public get correctAnswers(): number {
    let correct = 0;
    for (let i = 0; i < this.currentQuestionIndex; i++) {
      if (this.selectedAnswers[i] === this.allQuestions[i].answer) {
        correct++;
      }
    }
    return correct;
  }

  public get incorrectAnswers(): number {
    return this.answeredCount - this.correctAnswers;
  }

  public get accuracy(): number {
    return this.answeredCount > 0 ? Math.round((this.correctAnswers / this.answeredCount) * 100) : 0;
  }

  public get isCompleted(): boolean {
    return this.currentQuestionIndex >= this.allQuestions.length;
  }

  public selectAnswer(answerIndex: number): void {
    this.selectedAnswers[this.currentQuestionIndex] = answerIndex;
  }

  public nextQuestion(): void {
    if (!this.isCompleted) {
      this.currentQuestionIndex++;
    }
  }

  public previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  public restart(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswers = new Array(this.allQuestions.length).fill(-1);
    this.startTime = Date.now();
  }

  public getResult(): AssessmentResult {
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

  public getQuestionsByDifficulty(difficulty: "Beginner" | "Intermediate" | "Advanced"): Question[] {
    return this.allQuestions.filter(q => q.difficulty === difficulty);
  }

  public getProgressByDifficulty(): Record<string, { total: number; completed: number }> {
    const levels: Record<string, { total: number; completed: number }> = {
      Beginner: { total: 0, completed: 0 },
      Intermediate: { total: 0, completed: 0 },
      Advanced: { total: 0, completed: 0 },
    };

    this.allQuestions.forEach(question => {
      if (question.difficulty) {
        levels[question.difficulty].total++;
        if (this.selectedAnswers[question.id - 1] === question.answer) {
          levels[question.difficulty].completed++;
        }
      }
    });

    return levels;
  }
}

// Assessment type definitions
export type AssessmentType = 'svelte' | 'usability';

export function createAssessment(type: AssessmentType): AssessmentEngine {
  const questions = type === 'svelte' ? svelteQuestions : usabilityQuestions;
  return new AssessmentEngine(questions);
}

export function getQuestionsByType(type: AssessmentType): Question[] {
  return type === 'svelte' ? svelteQuestions : usabilityQuestions;
}

export function getTotalQuestionsByType(type: AssessmentType): number {
  return type === 'svelte' ? svelteQuestions.length : usabilityQuestions.length;
}

export function getDifficultyStats(questions: Question[]): Record<string, number> {
  const stats: Record<string, number> = {};
  questions.forEach(question => {
    if (question.difficulty) {
      stats[question.difficulty] = (stats[question.difficulty] || 0) + 1;
    }
  });
  return stats;
}