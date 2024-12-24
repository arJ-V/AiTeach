// src/App.jsx

import React from 'react';
import AppRoutes from './routes/AppRoutes';
import { QuizProvider } from './context/QuizContext';
import { FeedbackProvider } from './context/FeedbackContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/globals.css';

const App = () => {
    return (
        <QuizProvider>
            <FeedbackProvider>
                <div className="app">
                    <Header />
                    <main className="main-content">
                        <AppRoutes />
                    </main>
                    <Footer />
                </div>
            </FeedbackProvider>
        </QuizProvider>
    );
};

export default App;
