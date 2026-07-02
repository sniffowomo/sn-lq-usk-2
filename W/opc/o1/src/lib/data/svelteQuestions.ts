// <reference path="./types.ts" />

export const svelteQuestions: Question[] = [
  {
    id: 1,
    question: "What is the primary purpose of Svelte 5 $state() rune?",
    options: [
      "To create reactive state variables",
      "To handle API calls",
      "To manage component layout",
      "To handle animations"
    ],
    answer: 0,
    explanation: "$state() creates reactive state variables that automatically update the UI when changed.",
    difficulty: "Beginner"
  },
  {
    id: 2,
    question: "Which of the following is NOT a Svelte 5 rune?",
    options: [
      "$state",
      "$effect",
      "$props",
      "$watch"
    ],
    answer: 3,
    explanation: "$watch is not a Svelte 5 rune. Svelte 5 uses $state, $derived, $effect, and $props.",
    difficulty: "Beginner"
  },
  {
    id: 3,
    question: "What does $derived() compute automatically based on other reactive values?",
    options: [
      "DOM elements",
      "Derived reactive values",
      "Network requests",
      "CSS styles"
    ],
    answer: 1,
    explanation: "$derived() creates derived reactive values that automatically update when their source values change.",
    difficulty: "Beginner"
  },
  {
    id: 4,
    question: "In Svelte 5, how do you create a reactive variable that responds to store changes?",
    options: [
      "$storevar",
      "$derived",
      "$state",
      "$effect"
    ],
    answer: 1,
    explanation: "$derived is perfect for creating reactive variables that depend on other reactive values.",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    question: "Which Svelte 5 rune is used to perform side effects?",
    options: [
      "$effect",
      "$state",
      "$derived",
      "$props"
    ],
    answer: 0,
    explanation: "$effect runs side effects and is automatically cleaned up when dependencies change.",
    difficulty: "Beginner"
  },
  {
    id: 6,
    question: "What is the correct way to create a reactive store in Svelte 5?",
    options: [
      "writable('name', default)",
      "state('name', default)",
      "reactive('name', default)",
      "store('name', default)"
    ],
    answer: 0,
    explanation: "writable() is the standard store function from Svelte's run run system.",
    difficulty: "Intermediate"
  },
  {
    id: 7,
    question: "Which Svelte 5 feature allows you to write reactive code without thinking about subscriptions?",
    options: [
      "$effect",
      "$state",
      "Context API",
      "Props drilling"
    ],
    answer: 1,
    explanation: "$state() provides reactive variables without subscription management.",
    difficulty: "Intermediate"
  },
  {
    id: 8,
    question: "In Svelte 5, what is the purpose of $props()?",
    options: [
      "Access component props",
      "Create reactive state",
      "Handle effects",
      "Manage stores"
    ],
    answer: 0,
    explanation: "$props() gives component access to its props in a reactive manner.",
    difficulty: "Beginner"
  },
  {
    id: 9,
    question: "What does Svelte 5's $effect() rune do when its dependencies change?",
    options: [
      "Updates DOM directly",
      "Runs cleanup function",
      "Renders the component",
      "Creates a new store"
    ],
    answer: 1,
    explanation: "$effect runs side effects and automatically cleans up when dependencies change.",
    difficulty: "Intermediate"
  },
  {
    id: 10,
    question: "Which of these is a Svelte 5 rune for reactive calculations?",
    options: [
      "$calc",
      "$derived",
      "$computed",
      "$calculate"
    ],
    answer: 1,
    explanation: "$derived() is the reactive calculation rune in Svelte 5.",
    difficulty: "Beginner"
  },
  {
    id: 11,
    question: "What is Svelte 5's key advantage over Svelte 4?",
    options: [
      "Better performance",
      "Runes system",
      "More libraries",
      "Easier syntax"
    ],
    answer: 1,
    explanation: "Svelte 5 introduces the runes system, a fundamental architectural change.",
    difficulty: "Intermediate"
  },
  {
    id: 12,
    question: "How do you access component properties reactively in Svelte 5?",
    options: [
      "$props()",
      "$state()",
      "$derived()",
      "$effect()"
    ],
    answer: 0,
    explanation: "$props() provides reactive access to component properties.",
    difficulty: "Beginner"
  },
  {
    id: 13,
    question: "In Svelte 5, what creates a reactive variable that triggers updates?",
    options: [
      "$effect",
      "$derived",
      "$state",
      "$computed"
    ],
    answer: 2,
    explanation: "$state creates reactive variables that automatically trigger UI updates.",
    difficulty: "Beginner"
  },
  {
    id: 14,
    question: "Which Svelte 5 rune handles cleanup when dependencies change?",
    options: [
      "$effect",
      "$state",
      "$derived",
      "$props"
    ],
    answer: 0,
    explanation: "$effect includes automatic cleanup when its reactive dependencies change.",
    difficulty: "Intermediate"
  },
  {
    id: 15,
    question: "What is the purpose of the $effect.run() function?",
    options: [
      "To run effects immediately",
      "To create stores",
      "To update props",
      "To initialize state"
    ],
    answer: 0,
    explanation: "$effect.run() executes side effects immediately and sets up cleanup.",
    difficulty: "Advanced"
  },
  {
    id: 16,
    question: "Which Svelte 5 pattern avoids unnecessary renders?",
    options: [
      "$effect.deep",
      "$state",
      "$derived",
      "$props"
    ],
    answer: 0,
    explanation: "$effect.deep creates deep reactive effects to avoid unnecessary re-renders.",
    difficulty: "Advanced"
  },
  {
    id: 17,
    question: "What is the correct way to create a derived value that updates on store changes?",
    options: [
      "$derived(() => store.value)",
      "$state(store.value)",
      "$effect(store.value)",
      "$props(store.value)"
    ],
    answer: 0,
    explanation: "$derived creates derived values that automatically update when their source changes.",
    difficulty: "Intermediate"
  },
  {
    id: 18,
    question: "Which Svelte 5 concept manages component lifecycle in a reactive way?",
    options: [
      "$effect",
      "$state",
      "$derived",
      "$props"
    ],
    answer: 0,
    explanation: "$effect manages reactive side effects and component lifecycle.",
    difficulty: "Advanced"
  },
  {
    id: 19,
    question: "What does the $state() rune return?",
    options: [
      "A function",
      "A reactive variable",
      "A promise",
      "An array"
    ],
    answer: 1,
    explanation: "$state() returns a reactive variable that automatically updates the DOM.",
    difficulty: "Beginner"
  },
  {
    id: 20,
    question: "In Svelte 5, how do you create a reactive count that increments?",
    options: [
      "let count = $state(0);",
      "let count = 0;",
      "$state(0)",
      "let count = $derived(0);"
    ],
    answer: 0,
    explanation: "$state creates reactive variables that automatically update the UI.",
    difficulty: "Beginner"
  },
  {
    id: 21,
    question: "What is the purpose of $effect preloaded?",
    options: [
      "Preload data for effects",
      "Create initial state",
      "Handle component mounts",
      "Cleanup effects"
    ],
    answer: 0,
    explanation: "$effect preloaded runs immediately on mount and updates on dependencies.",
    difficulty: "Advanced"
  },
  {
    id: 22,
    question: "Which Svelte 5 rune gives access to component props?",
    options: [
      "$props()",
      "$state()",
      "$derived()",
      "$effect()"
    ],
    answer: 0,
    explanation: "$props() provides reactive access to component properties.",
    difficulty: "Beginner"
  },
  {
    id: 23,
    question: "What is the main benefit of using $derived over regular JavaScript?",
    options: [
      "Manual updates",
      "Automatic reactivity",
      "Better performance",
      "Memory efficiency"
    ],
    answer: 1,
    explanation: "$derived provides automatic reactivity without manual DOM manipulation.",
    difficulty: "Intermediate"
  },
  {
    id: 24,
    question: "In Svelte 5, which rune is used for reactive state?",
    options: [
      "$effect",
      "$state",
      "$props",
      "$derived"
    ],
    answer: 1,
    explanation: "$state is used for reactive state management.",
    difficulty: "Beginner"
  },
  {
    id: 25,
    question: "What is the key difference between $state and $derived?",
    options: [
      "$state is reactive, $derived is static",
      "$state creates state, $derived computes from state",
      "$state is manual, $derived is automatic",
      "$state is sync, $derived is async"
    ],
    answer: 1,
    explanation: "$state creates reactive state, $derived computes values from other reactive state.",
    difficulty: "Advanced"
  }
];
