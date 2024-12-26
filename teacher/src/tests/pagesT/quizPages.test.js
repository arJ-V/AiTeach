import React from 'react';
import { render } from '@testing-library/react';
import QuizPage from '../../pages/QuizPage';
import { QuizContext } from '../../context/QuizContext';

test('renders QuizPage with questions', () => {
    const quizData = [
        { question: 'What is React?', options: ['Library', 'Framework'], answer: 'Library' },
    ];
    const { getByText } = render(
        <QuizContext.Provider value={{ quizData }}>
            <QuizPage />
        </QuizContext.Provider>
    );
    expect(getByText('What is React?')).toBeInTheDocument();
});
