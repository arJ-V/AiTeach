import { renderHook } from '@testing-library/react-hooks';
import useFeedback from '../../hooks/useFeedback';

test('generates feedback based on user answers', () => {
    const quizData = [
        { question: 'What is React?', options: ['Library', 'Framework'], answer: 'Library' },
    ];
    const userAnswers = { 'What is React?': 'Library' };

    const { result } = renderHook(() => useFeedback(quizData, userAnswers));
    const feedback = result.current.getFeedback();
    expect(feedback[0].feedback).toBe('Correct! Great job!');
});
