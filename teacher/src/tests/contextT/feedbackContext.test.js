import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FeedbackProvider, FeedbackContext } from '../../context/FeedbackContext';

test('provides feedback data and updates it', () => {
    const TestComponent = () => {
        const { feedback, updateFeedback } = React.useContext(FeedbackContext);
        return (
            <div>
                <button onClick={() => updateFeedback([{ question: 'Test Feedback' }])}>
                    Update Feedback
                </button>
                <p>{feedback.length}</p>
            </div>
        );
    };

    const { getByText } = render(
        <FeedbackProvider>
            <TestComponent />
        </FeedbackProvider>
    );
    expect(getByText('0')).toBeInTheDocument();
    fireEvent.click(getByText('Update Feedback'));
    expect(getByText('1')).toBeInTheDocument();
});
