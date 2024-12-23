import React from 'react';
import './components.module.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} AI Practice Test Generator</p>
        </footer>
    );
};

export default Footer;
