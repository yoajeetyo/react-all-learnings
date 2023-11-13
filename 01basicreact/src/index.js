// to create react app we write:-

// npm create-react-app <app-name>
// -------------or---------------
// npx create-react-app <app-name>


// to build app:-

// npm run build


// to run the app:-

// npm run start
//---------or------
// npm start



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

