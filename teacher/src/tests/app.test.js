import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the app without crashing', () => {
    const { getByText } = render(<App />);
    expect(getByText('AI Practice Test Generator')).toBeInTheDocument();
});
