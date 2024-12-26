import React from 'react';
import AppRoutes from './routes/AppRoutes'; // Ensure the path is correct
import { QuizProvider } from './context/QuizContext';
import { FeedbackProvider } from './context/FeedbackContext';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <QuizProvider>
            <FeedbackProvider>
                <Header />
                <main style={{ padding: '20px', textAlign: 'center' }}>
                    <h1>Welcome to AI Practice Test Generator</h1>
                    <AppRoutes />
                </main>
                <Footer />
            </FeedbackProvider>
        </QuizProvider>
    );
};

export default App;
