import React from 'react';
import './components.module.css';

const FeedbackCard = ({ question, userAnswer, correctAnswer, feedback }) => {
    return (
        <div className="feedback-card">
            <h4>Question:</h4>
            <p>{question}</p>
            <h4>Your Answer:</h4>
            <p className={userAnswer === correctAnswer ? "correct" : "incorrect"}>
                {userAnswer}
            </p>
            <h4>Correct Answer:</h4>
            <p>{correctAnswer}</p>
            <h4>Feedback:</h4>
            <p>{feedback}</p>
        </div>
    );
};

export default FeedbackCard;
