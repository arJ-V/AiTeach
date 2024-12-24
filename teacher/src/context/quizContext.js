// src/context/QuizContext.js

import React, { createContext, useState } from 'react';

// Create the QuizContext
export const QuizContext = createContext();

/**
 * Provides quiz-related state and functions to the app.
 * @param {ReactNode} children - Child components.
 * @returns {JSX.Element} - Quiz context provider.
 */
export const QuizProvider = ({ children }) => {
    const [quizData, setQuizData] = useState([]); // Stores quiz questions
    const [userAnswers, setUserAnswers] = useState({}); // Stores user answers

    /**
     * Updates the quiz state with new questions.
     * @param {Array} newQuiz - Array of quiz questions.
     */
    const updateQuizData = (newQuiz) => {
        setQuizData(newQuiz);
    };

    /**
     * Updates the user's answers.
     * @param {Object} answers - Object containing user's answers.
     */
    const updateUserAnswers = (answers) => {
        setUserAnswers(answers);
    };

    return (
        <QuizContext.Provider
            value={{
                quizData,
                updateQuizData,
                userAnswers,
                updateUserAnswers,
            }}
        >
            {children}
        </QuizContext.Provider>
    );
};
