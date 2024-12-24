// src/hooks/useFeedback.js

/**
 * Hook to evaluate answers and provide feedback.
 * @param {Array} quizData - Array of quiz questions with answers.
 * @param {Object} userAnswers - Object containing user's answers.
 * @returns {Object} - getFeedback
 */
const useFeedback = (quizData, userAnswers) => {
    /**
     * Generates feedback for each question based on user answers.
     * @returns {Array} - Array of feedback objects for each question.
     */
    const getFeedback = () => {
        return quizData.map((q) => {
            const userAnswer = userAnswers[q.question] || 'No Answer';
            const isCorrect = userAnswer === q.answer;

            return {
                question: q.question,
                userAnswer,
                correctAnswer: q.answer,
                feedback: isCorrect
                    ? 'Correct! Great job!'
                    : 'Incorrect. Review this material for better understanding.',
            };
        });
    };

    return { getFeedback };
};

export default useFeedback;
