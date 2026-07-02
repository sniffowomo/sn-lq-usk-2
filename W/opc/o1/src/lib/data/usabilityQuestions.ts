// <reference path="./types.ts" />

export const usabilityQuestions: Question[] = [
  {
    id: 1,
    question: "Which of Jakob's Nielsen's usability heuristics focuses on keeping system status visible to users?",
    options: [
      "Visibility of system status",
      "Recognition rather than recall",
      "Error prevention",
      "Help and documentation"
    ],
    answer: 0,
    explanation: "Visibility of system status ensures users always know what’s happening, like loading indicators or confirmation messages.",
    difficulty: "Beginner"
  },
  {
    id: 2,
    question: "What does the 'Consistency and standards' heuristic primarily address?",
    options: [
      "Same color schemes everywhere",
      "Predictable user interfaces",
      "Standard button sizes",
      "Consistent naming conventions"
    ],
    answer: 1,
    explanation: "Consistency and standards make interfaces predictable, so users can transfer knowledge from one part to another.",
    difficulty: "Beginner"
  },
  {
    id: 3,
    question: "Which principle is most important for accessible web design?",
    options: [
      "Semantic HTML structure",
      "Color contrast",
      "Font size",
      "Keyboard navigation"
    ],
    answer: 0,
    explanation: "Semantic HTML provides the foundation for screen readers and assistive technologies to understand page structure.",
    difficulty: "Beginner"
  },
  {
    id: 4,
    question: "What cognitive load issue occurs when users must remember information instead of being shown it?",
    options: [
      "Intrinsic memory load",
      "Extraneous memory load",
      "Intrinsic cognitive load",
      "Extraneous cognitive load"
    ],n    answer: 3,
    explanation: "Extraneous memory load occurs when users must remember information that could be displayed to them.",
    difficulty: "Intermediate"
  },
  {
    id: 5,
    question: "Which guideline ensures text has sufficient contrast against its background?",
    options: [
      "WCAG 2.1 Success Criterion 1.4.3",
      "WCAG 2.1 Success Criterion 1.4.13",
      "WCAG 2.1 Success Criterion 1.4.1",
      "WCAG 2.1 Success Criterion 1.4.5"
    ],
    answer: 0,
    explanation: "WCAG 2.1 SC 1.4.3 requires a contrast ratio of at least 4.5:1 for normal text.",
    difficulty: "Intermediate"
  },
  {
    id: 6,
    question: "What does 'progressive disclosure' in UX design aim to achieve?",
    options: [
      "Hide all advanced features",
      "Show only essential information initially",
      "Progress through steps automatically",
      "Hide errors from users"
    ],
    answer: 1,
    explanation: "Progressive disclosure presents only essential information first, revealing more details as needed.",
    difficulty: "Intermediate"
  },
  {
    id: 7,
    question: "Which mobile UX principle makes interaction areas thumb-friendly?",
    options: [
      "Fitts' Law",
      "Jakob's Law",
      "Miller's Law",
      "Tesler's Law"
    ],n    answer: 0,
    explanation: "Fitts' Law guides touch target sizing, placing important buttons within easy reach of both thumbs.",
    difficulty: "Intermediate"
  },
  {
    id: 8,
    question: "What is the recommended minimum touch target size according to material design?",
    options: [
      "32x32 dp",
      "24x24 dp",
      "48x48 dp",
      "16x16 dp"
    ],
    answer: 0,
    explanation: "48x48 dp (or 32x32 dp on high-density displays) provides comfortable touch targets.",
    difficulty: "Beginner"
  },
  {
    id: 9,
    question: "Which principle states that users prefer familiar interfaces?",
    options: [
      "Fitts' Law",
      "Jakob's Law",
      "Tullis's Law",
      "Miller's Law"
    ],n    answer: 1,
    explanation: "Jakob's Law states that users spend time on websites similar to others' expectations.",
    difficulty: "Beginner"
  },
  {
    id: 10,
    question: "What does 'cognitive walkthrough' primarily test?",
    options: [
      "Visual design",
      "Usability",
      "Performance",
      "Security"
    ],n    answer: 1,
    explanation: "Cognitive walkthrough evaluates how intuitive a system is for new users to accomplish tasks.",
    difficulty: "Intermediate"
  },
  {
    id: 11,
    question: "Which accessibility feature helps users with motor impairments?",
    options: [
      "Voice control",
      "Screen reader support",
      "Color blind mode",
      "High contrast mode"
    ],
    answer: 0,
    explanation: "Voice control allows hands-free interaction for users with motor impairments.",
    difficulty: "Intermediate"
  },
  {
    id: 12,
    question: "What does 'mental model' refer to in UX design?",
    options: [
      "User's internal understanding",
      "Designer's concept",
      "Interface layout",
      "Business requirements"
    ],
    answer: 0,
    explanation: "Mental models represent how users understand a system's functionality and behavior.",
    difficulty: "Intermediate"
  },
  {
    id: 13,
    question: "Which heuristic emphasizes that error messages should be expressed in plain language?",
    options: [
      "Help and documentation",
      "Recognition rather than recall",
      "Error prevention",
      "Error messages"
    ],
    answer: 3,
    explanation: "Error messages should communicate clearly what went wrong and how to fix it.",
    difficulty: "Beginner"
  },
  {
    id: 14,
    question: "What Nielsen heuristic focuses on aesthetic and minimalist design?",
    options: [
      "Visibility of system status",
      "Aesthetic and minimalist design",
      "Flexibility and efficiency",
      "Recognition rather than recall"
    ],
    answer: 1,
    explanation: "Aesthetic and minimalist design eliminates unnecessary elements to focus users on what's important.",
    difficulty: "Beginner"
  },
  {
    id: 15,
    question: "Which principle addresses reducing user memory load?",
    options: [
      "Recognition rather than recall",
      "Error prevention",
      "Consistency and standards",
      "Help and documentation"
    ],
    answer: 0,
    explanation: "Recognition rather than recall reduces memory load by showing familiar objects and options.",
    difficulty: "Intermediate"
  },
  {
    id: 16,
    question: "What does 'affordance' in UX refer to?",
    options: [
      "User's mental model",
      "Design's action possibilities",
      "Interface colors",
      "Layout structure"
    ],
    answer: 1,
    explanation: "Affordance communicates what actions are possible through visual cues.",
    difficulty: "Beginner"
  },
  {
    id: 17,
    question: "Which guideline ensures content is readable without horizontal scrolling?",
    options: [
      "WCAG 2.1 SC 1.4.8",
      "WCAG 2.1 SC 1.4.10",
      "WCAG 2.1 SC 1.4.4",
      "WCAG 2.1 SC 1.4.2"
    ],n    answer: 1,
    explanation: "WCAG 2.1 SC 1.4.10 requires content to reflow on screens narrower than 320px.",
    difficulty: "Intermediate"
  },  
  {
    id: 18,
    question: "What does 'information scent' refer to in website navigation?",
    options: [
      "Visual design quality",
      "Clarity of navigation labels",
      "Page load speed",
      "User satisfaction"
    ],
    answer: 1,
    explanation: "Information scent describes how clearly navigation indicates its destination content.",
    difficulty: "Intermediate"
  },  
  {
    id: 19,
    question: "Which heuristic emphasizes error recovery ease?",
    options: [
      "Error prevention",
      "Flexibility and efficiency",
      "Error messages",
      "Recognition rather than recall"
    ],
    answer: 1,
    explanation: "Flexibility and efficiency allows users to recover from errors and customize workflows.",
    difficulty: "Intermediate"
  },  
  {
    id: 20,
    question: "What does 'visual hierarchy' help users with?",
    options: [
      "Reading speed",
      "Information scanning",
      "Memory retention",
      "Color preference"
    ],
    answer: 1,
    explanation: "Visual hierarchy guides users' attention to the most important information first.",
    difficulty: "Beginner"
  },  
  {
    id: 21,
    question: "Which principle suggests custom interfaces over generic ones?",
    options: [
      "Jakob's Law",
      "Tullis's Law",
      "Miller's Law",
      "Norman'\s Law"
    ],
    answer: 3,
    explanation: "Norman's Law states that people prefer custom interfaces to generic ones.",
    difficulty: "Intermediate"
  },  
  {
    id: 22,
    question: "What is the 'Golden Ratio' in UX often applied to?",
    options: [
      "Typography",
      "Layout spacing",
      "Color palettes",
      "Navigation structure"
    ],
    answer: 1,
    explanation: "The Golden Ratio guides proportional spacing and layout elements for visual harmony.",
    difficulty: "Intermediate"
  },  
  {
    id: 23,
    question: "Which Nielsen heuristic addresses user control and freedom?",
    options: [
      "Flexibility and efficiency",
      "Error prevention",
      "Recognition rather than recall",
      "Consistency and standards"
    ],
    answer: 0,
    explanation: "Flexibility and efficiency allows users to undo actions and customize their experience.",
    difficulty: "Intermediate"
  },  
  {
    id: 24,
    question: "What does 'stickiness' in UX design aim to achieve?",
    options: [
      "User engagement",
      "Visual appeal",
      "Technical performance",
      "Accessibility"
    ],
    answer: 0,
    explanation: "Stickiness keeps users engaged and returning to the product over time.",
    difficulty: "Beginner"
  },  
  {
    id: 25,
    question: "Which principle suggests interfaces should match the real world?",
    options: [
      "Visibility of system status",
      "Recognize rather than recall",
      "Error messages",
      "Help and documentation"
    ],
    answer: 0,
    explanation: "Visibility of system status makes interfaces match users' expectations of real-world systems.",
    difficulty: "Beginner"
  }
];