import React from 'react';
import './components.module.css';

const QuizCard = ({ question, options, onAnswerSelect }) => {
    return (
        <div className="quiz-card">
            <h3>{question}</h3>
            <ul className="options-list">
                {options.map((option, index) => (
                    <li key={index}>
                        <button 
                            className="option-button" 
                            onClick={() => onAnswerSelect(option)}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default QuizCard;
