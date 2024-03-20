import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css';
import App from './App';

console.log(import.meta.env);

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN || 'dev-jw2h77uc2n0sgdgj.us.auth0.com'}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || 'fflUrqt5ZRJFnXhNQA9CgA9sTxgg6nrd'}
        authorizationParams={{
            redirect_uri: import.meta.env.VITE_CALLBACK_URL || 'http://localhost:5173/'
        }}
    >
        <App />
    </Auth0Provider>
);
