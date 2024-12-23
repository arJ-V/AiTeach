import React, { useState, useContext } from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { QuizContext } from '../context/QuizContext';
import './InputPage.module.css';

const InputPage = () => {
    const { setQuizData } = useContext(QuizContext); // Context to share quiz state
    const [inputData, setInputData] = useState({
        notes: '',
        topics: '',
        level: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value });
    };

    const handleSubmit = async () => {
        // Simulated API call for quiz generation
        const generatedQuiz = await fetchQuiz(inputData); // Replace with real API
        setQuizData(generatedQuiz);
    };

    return (
        <div className="input-page">
            <h2>Input Your Study Materials</h2>
            <InputField
                label="Class Notes"
                value={inputData.notes}
                onChange={handleChange}
                name="notes"
                placeholder="Paste your notes here"
            />
            <InputField
                label="Topics"
                value={inputData.topics}
                onChange={handleChange}
                name="topics"
                placeholder="Enter topics (comma-separated)"
            />
            <InputField
                label="Education Level"
                value={inputData.level}
                onChange={handleChange}
                name="level"
                placeholder="E.g., High School, College"
            />
            <Button label="Generate Quiz" onClick={handleSubmit} />
        </div>
    );
};

const fetchQuiz = async (inputData) => {
    // Simulating quiz generation
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    question: 'What is React?',
                    options: ['Library', 'Framework', 'Language', 'Tool'],
                    answer: 'Library',
                },
                {
                    question: 'What is JSX?',
                    options: [
                        'JavaScript XML',
                        'JSON Syntax',
                        'JavaScript Tool',
                        'None of the above',
                    ],
                    answer: 'JavaScript XML',
                },
            ]);
        }, 2000);
    });
};

export default InputPage;
