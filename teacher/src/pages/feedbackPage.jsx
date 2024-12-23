import React, { useContext } from 'react';
import FeedbackCard from '../components/FeedbackCard';
import { QuizContext } from '../context/QuizContext';
import './FeedbackPage.module.css';

const FeedbackPage = () => {
    const { quizData, userAnswers } = useContext(QuizContext);

    const calculateFeedback = () => {
        return quizData.map((q) => {
            const isCorrect = userAnswers[q.question] === q.answer;
            return {
                question: q.question,
                userAnswer: userAnswers[q.question],
                correctAnswer: q.answer,
                feedback: isCorrect
                    ? 'Correct! Great job!'
                    : 'Incorrect. Review the material for this topic.',
            };
        });
    };

    const feedback = calculateFeedback();

    return (
        <div className="feedback-page">
            <h2>Your Results</h2>
            {feedback.map((f, index) => (
                <FeedbackCard
                    key={index}
                    question={f.question}
                    userAnswer={f.userAnswer}
                    correctAnswer={f.correctAnswer}
                    feedback={f.feedback}
                />
            ))}
        </div>
    );
};

export default FeedbackPage;
