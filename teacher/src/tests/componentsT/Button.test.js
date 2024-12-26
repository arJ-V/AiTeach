import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../../src/components/Button';

test('renders Button with label', () => {
    const { getByText } = render(<Button label="Click Me" onClick={() => {}} />);
    expect(getByText('Click Me')).toBeInTheDocument();
});

test('calls onClick when Button is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button label="Click Me" onClick={onClickMock} />);
    fireEvent.click(getByText('Click Me'));
    expect(onClickMock).toHaveBeenCalled();
});
