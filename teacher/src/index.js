import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this path is correct
import './styles/globals.css'; // Include global styles

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure your `public/index.html` has <div id="root"></div>
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
