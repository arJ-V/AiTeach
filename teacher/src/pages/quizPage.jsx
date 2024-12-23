import React, { useContext, useState } from 'react';
import QuizCard from '../components/QuizCard';
import Button from '../components/Button';
import { QuizContext } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';
import './QuizPage.module.css';

const QuizPage = () => {
    const { quizData, setUserAnswers } = useContext(QuizContext); // Access quiz data and store answers
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleAnswerSelect = (question, selectedOption) => {
        setAnswers((prev) => ({
            ...prev,
            [question]: selectedOption,
        }));
    };

    const handleSubmit = () => {
        setUserAnswers(answers);
        navigate('/feedback'); // Navigate to feedback page
    };

    return (
        <div className="quiz-page">
            <h2>Your Quiz</h2>
            {quizData.map((q, index) => (
                <QuizCard
                    key={index}
                    question={q.question}
                    options={q.options}
                    onAnswerSelect={(option) => handleAnswerSelect(q.question, option)}
                />
            ))}
            <Button label="Submit Answers" onClick={handleSubmit} />
        </div>
    );
};

export default QuizPage;
