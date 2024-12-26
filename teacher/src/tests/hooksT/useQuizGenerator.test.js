import { renderHook, act } from '@testing-library/react-hooks';
import useQuizGenerator from '../../hooks/useQuizGenerator';

test('initializes with default quiz data', () => {
    const { result } = renderHook(() => useQuizGenerator());
    expect(result.current.quizData).toHaveLength(2); // Assuming 2 default questions
});

test('generates new quiz questions', () => {
    const { result } = renderHook(() => useQuizGenerator());
    act(() => {
        result.current.generateQuiz({ notes: 'React', topics: 'JSX', level: 'College' });
    });
    expect(result.current.quizData).toHaveLength(3); // Assuming 1 new question added
});
