import React from 'react';
import './components.module.css';

const Button = ({ label, onClick, type = 'button', disabled = false }) => {
    return (
        <button 
            className="button" 
            onClick={onClick} 
            type={type} 
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default Button;
