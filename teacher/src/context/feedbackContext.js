// src/context/FeedbackContext.js

import React, { createContext, useState } from 'react';

// Create the FeedbackContext
export const FeedbackContext = createContext();

/**
 * Provides feedback-related state and functions to the app.
 * @param {ReactNode} children - Child components.
 * @returns {JSX.Element} - Feedback context provider.
 */
export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([]); // Stores feedback data for quiz

    /**
     * Updates the feedback state.
     * @param {Array} newFeedback - Array of feedback objects for each question.
     */
    const updateFeedback = (newFeedback) => {
        setFeedback(newFeedback);
    };

    return (
        <FeedbackContext.Provider
            value={{
                feedback,
                updateFeedback,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};
