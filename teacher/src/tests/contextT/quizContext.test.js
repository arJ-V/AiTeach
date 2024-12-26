import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { QuizProvider, QuizContext } from '../../context/QuizContext';

test('provides quiz data and updates it', () => {
    const TestComponent = () => {
        const { quizData, updateQuizData } = React.useContext(QuizContext);
        return (
            <div>
                <button onClick={() => updateQuizData([{ question: 'Test?' }])}>
                    Update Quiz
                </button>
                <p>{quizData.length}</p>
            </div>
        );
    };

    const { getByText } = render(
        <QuizProvider>
            <TestComponent />
        </QuizProvider>
    );
    expect(getByText('0')).toBeInTheDocument();
    fireEvent.click(getByText('Update Quiz'));
    expect(getByText('1')).toBeInTheDocument();
});
