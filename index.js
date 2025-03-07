import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import toast, { Toaster } from 'react-hot-toast';
import 'animate.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={appStore}>
            <App />
            <Toaster />
        </Provider>
    </BrowserRouter>
);
