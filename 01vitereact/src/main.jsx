// to create react project using vite:-

// npm create vite@latest     (press enter)
// <project-name>     (press enter)
// select framework: (here React using down arrow)     (press enter)
// select variant: (here we will select JavaScript using down arrow)     (press enter)



// this way node_modules is not coming by default we need to install

// go to the project folder using cd command
// npm i   or   npm install      (enter to install node_modules)




// create build:-

// npm run build





// to run the project:-

// npm run dev        (get a link after enter we can run into browser)







import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
