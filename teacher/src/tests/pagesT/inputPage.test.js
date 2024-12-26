import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputPage from '../../pages/InputPage';

test('renders InputPage with input fields and button', () => {
    const { getByLabelText, getByText } = render(<InputPage />);
    expect(getByLabelText('Class Notes')).toBeInTheDocument();
    expect(getByLabelText('Topics')).toBeInTheDocument();
    expect(getByLabelText('Education Level')).toBeInTheDocument();
    expect(getByText('Generate Quiz')).toBeInTheDocument();
});

test('validates input before submission', () => {
    const { getByText, getByLabelText } = render(<InputPage />);
    fireEvent.click(getByText('Generate Quiz'));
    expect(getByText('Notes cannot be empty.')).toBeInTheDocument();
    expect(getByText('Topics cannot be empty.')).toBeInTheDocument();
    expect(getByText('Education level cannot be empty.')).toBeInTheDocument();
});
