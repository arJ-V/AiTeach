import React from 'react';
import './components.module.css';

const InputField = ({ label, value, onChange, type = 'text', placeholder }) => {
    return (
        <div className="input-field">
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="input"
            />
        </div>
    );
};

export default InputField;
