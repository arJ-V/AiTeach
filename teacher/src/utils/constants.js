// src/utils/constants.js

// Placeholder quiz data for testing
export const DEFAULT_QUIZ = [
    {
        question: 'What is React?',
        options: ['Library', 'Framework', 'Language', 'Tool'],
        answer: 'Library',
    },
    {
        question: 'What is JSX?',
        options: ['JavaScript XML', 'JSON Syntax', 'JavaScript Tool', 'None of the above'],
        answer: 'JavaScript XML',
    },
];

// Placeholder feedback for testing
export const DEFAULT_FEEDBACK = [
    {
        question: 'What is React?',
        userAnswer: 'Framework',
        correctAnswer: 'Library',
        feedback: 'Incorrect. Review the material for this topic.',
    },
    {
        question: 'What is JSX?',
        userAnswer: 'JavaScript XML',
        correctAnswer: 'JavaScript XML',
        feedback: 'Correct! Great job!',
    },
];

// Education levels for dropdown or input
export const EDUCATION_LEVELS = ['High School', 'Undergraduate', 'Graduate', 'Professional'];

// Other reusable constants
export const APP_NAME = 'AI Practice Test Generator';
export const COPYRIGHT_YEAR = new Date().getFullYear();
