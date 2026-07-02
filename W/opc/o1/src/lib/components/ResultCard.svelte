// <reference path="./types.ts" />

export interface ResultCardProps {
  result: AssessmentResult;
  onRestart?: () => void;
  onBackHome?: () => void;
  class?: string;
}

import type { AssessmentResult } from "./types.ts";

let { result, onRestart, onBackHome, class: className = "" } = $props<ResultCardProps>();

const resultCardStyles = "bg-surface-900/95 backdrop-blur-xl rounded-3xl p-10 border border-surface-800 shadow-2xl max-w-2xl mx-auto text-center relative overflow-hidden";
const iconContainerStyles = "w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mx-auto mb-6";
const titleStyles = "text-3xl font-bold text-white mb-4";
const scoreContainerStyles = "mb-8";
const circularScoreStyles = "w-32 h-32 mx-auto relative";
const circularBackgroundStyles = "w-full h-full rounded-full border-8 border-surface-700";
const circularFillStyles = "absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 transform -rotate-90 origin-center transition-all duration-1000 ease-out";
const scoreValueStyles = "absolute inset-0 flex items-center justify-center text-2xl font-bold text-white";
const scorePercentageStyles = "absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-lg font-semibold text-purple-400";
const resultTextStyles = "text-xl text-gray-300 mb-8";
const statsContainerStyles = "grid grid-cols-2 gap-6 mb-8";
const statCardStyles = "bg-surface-800/50 rounded-xl p-6 border border-surface-700";
const statValueStyles = "text-3xl font-bold text-purple-400 mb-2";
const statLabelStyles = "text-sm text-gray-400 uppercase tracking-wider";
const levelBadgeStyles = "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border";
const buttonContainerStyles = "flex gap-4 justify-center mt-8";

const percentage = $derived(Math.round((result.score / result.total) * 100));
const circleStrokeDashoffset = $derived(440 - (percentage / 100) * 440);
const scoreColor = $derived(
  percentage <= 20 ? "text-blue-400" :
  percentage <= 40 ? "text-green-400" :
  percentage <= 60 ? "text-purple-400" :
  percentage <= 80 ? "text-pink-400" :
  "text-yellow-400"
);
const levelBadgeColor = $derived(
  percentage <= 20 ? "bg-blue-900/30 border-blue-500/50 text-blue-300" :
  percentage <= 40 ? "bg-green-900/30 border-green-500/50 text-green-300" :
  percentage <= 60 ? "bg-purple-900/30 border-purple-500/50 text-purple-300" :
  percentage <= 80 ? "bg-pink-900/30 border-pink-500/50 text-pink-300" :
  "bg-yellow-900/30 border-yellow-500/50 text-yellow-300"
);