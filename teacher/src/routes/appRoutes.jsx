import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputPage from '../pages/InputPage';
import QuizPage from '../pages/QuizPage';
import FeedbackPage from '../pages/FeedbackPage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InputPage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/feedback" element={<FeedbackPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
