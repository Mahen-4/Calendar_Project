import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss'
import { Provider } from 'react-redux';
import { store } from './state/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // provide store states 
    <Provider store={store}>
        <App />
    </Provider>
);
