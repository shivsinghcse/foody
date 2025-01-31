import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/Components/Header';
// import './index.css';

const App = () => {
    return (
        <>
            <Header />
            <h1>This is App</h1>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
