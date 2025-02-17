import React from 'react';
import ReactDOM from 'react-dom/client';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

