import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputField from '../../components/InputField';

test('renders InputField with label and value', () => {
    const { getByLabelText } = render(
        <InputField label="Name" value="John" onChange={() => {}} placeholder="Enter your name" />
    );
    expect(getByLabelText('Name')).toBeInTheDocument();
    expect(getByLabelText('Name').value).toBe('John');
});

test('calls onChange when input changes', () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
        <InputField label="Name" value="" onChange={onChangeMock} />
    );
    fireEvent.change(getByLabelText('Name'), { target: { value: 'New Value' } });
    expect(onChangeMock).toHaveBeenCalledWith(expect.any(Object));
});
