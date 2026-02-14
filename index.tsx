
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * Mounts the React application to the DOM.
 * Includes safety checks to ensure the root element is present.
 */
const mountApp = () => {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    console.error("Critical Error: Could not find root element with id 'root'. The application cannot be mounted.");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Failed to render React application:", error);
  }
};

// Ensure the DOM is fully interactive before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}
