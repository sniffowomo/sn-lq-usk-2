// <reference path="./app.d.ts" />

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