// <reference path="./types.ts" />

export interface FloatingScoreProps {
  score: number;
  total: number;
  class?: string;
}

let { score = 0, total = 25, class: className = "" } = $props<FloatingScoreProps>();

const percentage = $derived(Math.round((score / total) * 100));
const knowledgeLevel = $derived(
  percentage <= 20 ? "Beginner" :
  percentage <= 40 ? "Learning" :
  percentage <= 60 ? "Competent" :
  percentage <= 80 ? "Proficient" :
  "Expert"
);

const levelColors = {
  Beginner: "text-blue-400",
  Learning: "text-green-400",
  Competent: "text-purple-400",
  Proficient: "text-pink-400",
  Expert: "text-yellow-400",
};

const levelBadgeColors = {
  Beginner: "bg-blue-900/30 border-blue-500/50 text-blue-300",
  Learning: "bg-green-900/30 border-green-500/50 text-green-300",
  Competent: "bg-purple-900/30 border-purple-500/50 text-purple-300",
  Proficient: "bg-pink-900/30 border-pink-500/50 text-pink-300",
  Expert: "bg-yellow-900/30 border-yellow-500/50 text-yellow-300",
};

const scoreClasses = "bg-surface-900/95 backdrop-blur-xl rounded-2xl p-4 border border-surface-800 shadow-2xl max-w-xs mx-auto";
const scoreDisplayClasses = "text-center space-y-3";
const scoreNumberClasses = "text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent";
const metaClasses = "space-y-2";
const percentageClasses = "text-2xl font-semibold text-white";
const levelClasses = "flex items-center justify-center gap-2";
const levelBadgeClasses = "px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm";
const levelTextClasses = "text-xs font-medium";

const levelColor = $derived(levelColors[knowledgeLevel] || "text-gray-400");
const badgeColor = $derived(levelBadgeColors[knowledgeLevel] || levelBadgeColors.Beginner);