// <reference path="./types.ts" />

export interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  selectedAnswer: number | null;
  onAnswerSelect: (answerIndex: number) => void;
  onNext?: () => void;
  showFeedback?: boolean;
  class?: string;
}

import type { Question } from "./types.ts";
import { createSignal } from "svelte"; // Note: Svelte 5 uses $state etc.

let {
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  showFeedback = false,
  class: className = "",
} = $props<QuestionCardProps>();

const maxVisibleOptions = 3;

const progressPercentage = $derived((questionNumber / totalQuestions) * 100);
const answeredCount = $derived(questionNumber - 1);
const remainingCount = $derived(totalQuestions - questionNumber);

const questionCardStyles = "bg-surface-900/90 backdrop-blur-lg rounded-3xl p-8 border border-surface-800 shadow-2xl max-w-2xl mx-auto relative overflow-hidden";
const progressContainerStyles = "mb-8";
const progressBarStyles = "w-full h-2 bg-surface-800 rounded-full overflow-hidden mb-4";
const progressFillStyles = "h-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 transition-all duration-500 ease-out rounded-full";
const progressTextStyles = "text-sm text-gray-400 flex justify-between";
const questionContainerStyles = "mb-8";
const questionTextStyles = "text-2xl font-semibold text-white mb-8 leading-relaxed";
const optionsContainerStyles = "grid grid-cols-1 md:grid-cols-2 gap-4 mb-8";
const optionButtonBaseStyles = "p-6 rounded-xl border-2 transition-all duration-200 ease-in-out cursor-pointer group relative overflow-hidden";
const optionSelectedStyles = "border-purple-500 bg-purple-900/20 shadow-lg shadow-purple-500/30 transform scale-[1.02]";
const optionUnselectedStyles = "border-surface-700 bg-surface-800 hover:border-purple-500/50 hover:bg-purple-900/10 hover:transform hover:scale-[1.01]";
const optionCorrectStyles = "border-green-500 bg-green-900/20 shadow-lg shadow-green-500/30";
const optionIncorrectStyles = "border-red-500 bg-red-900/20 shadow-lg shadow-red-500/30";
const optionContentStyles = "flex items-center gap-4";
const optionNumberStyles = "w-8 h-8 rounded-full bg-surface-800 flex items-center justify-center text-sm font-medium";
const optionNumberSelectedStyles = "bg-purple-600 text-white";
const optionNumberCorrectStyles = "bg-green-600 text-white";
const optionNumberIncorrectStyles = "bg-red-600 text-white";
const optionTextStyles = "text-lg font-medium";
const optionTextSelectedStyles = "text-purple-300";
const feedbackContainerStyles = "mt-6 p-6 rounded-xl bg-surface-800/50 border border-surface-700";
const feedbackTextStyles = "text-green-400 font-medium";
const navigationStyles = "flex justify-between mt-8";

const optionClasses = (index: number) => {
  const base = `${optionButtonBaseStyles} ${selectedAnswer === index ? optionSelectedStyles : optionUnselectedStyles}`;
  
  if (showFeedback) {
    if (index === question.answer) {
      return `${base} ${optionCorrectStyles}`;
    }
    if (index === selectedAnswer && selectedAnswer !== question.answer) {
      return `${base} ${optionIncorrectStyles}`;
    }
  }
  
  return base;
};

const optionNumberClasses = (index: number) => {
  const base = `${optionNumberStyles} transition-all duration-300`;
  
  if (selectedAnswer === index) {
    return `${base} ${optionNumberSelectedStyles}`;
  }
  
  if (showFeedback && index === question.answer) {
    return `${base} ${optionNumberCorrectStyles}`;
  }
  
  if (showFeedback && index === selectedAnswer && selectedAnswer !== question.answer) {
    return `${base} ${optionNumberIncorrectStyles}`;
  }
  
  return base;
};

const optionTextClasses = (index: number) => {
  const base = `${optionTextStyles} transition-colors duration-300`;
  
  if (selectedAnswer === index) {
    return `${base} ${optionTextSelectedStyles}`;
  }
  
  if (showFeedback && index === question.answer) {
    return `${base} text-green-400 font-semibold`;
  }
  
  if (showFeedback && index === selectedAnswer && selectedAnswer !== question.answer) {
    return `${base} text-red-400 font-semibold`;
  }
  
  return base;
};

const progressFillClasses = $derived(`$${progressFillStyles} w-[${progressPercentage}%]`);

function handleOptionClick(index: number) {
  if (!showFeedback) {
    onAnswerSelect(index);
  }
}