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






// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )






// we will try to invoke and render function and objects inside react and check which way is valid and invalid

// import React from 'react'
// import ReactDOM from 'react-dom/client'


// first we will try to render a function which returns jsx

// function MyApp() {
//   return (
//     <div>
//     <h1>My App hello My App</h1>
//     </div>
//   )
// }


// Above code is running correctly 

// now we will try to run our custom code which we run successfully into the customReact

// const ReactElement = {
//   type : "a",
//   props : {
//       href : "https://google.com",       
//       target : "_blank"
//   },
//   children : "Click me to visit Google"
// }


// above code will not run because internal conversion is not possible in this way
// in custome react we have written saperate conversion code for this which can not matched with internal conversion


// we will see another way of rendering 

// const anotherElement = (
//   <a href= "https://google.com" target = "_blank" >Visit Google</a>
// )


// above code will work because its conversion is possible



// using predefined syntax

// const predefinedSyntax = React.createElement(
//   "a",
//   {
//     href : "https://google.com",       
//     target : "_blank"
//   },
//   "Click here to visit google"
// )


// in above code we are using createElement() function of React
// it takes 3 parameter (type, object of tags attribute, text or inner html)




// ReactDOM.createRoot(document.getElementById('root')).render(
// <MyApp/>
// -------or we can call function directly---------------
// MyApp()  // not a good practice

// <ReactElement/>   // running this is not possible

// anotherElement   // we will be able to render it directly

// predefinedSyntax  // we will be able to render it directly
// )








// injecting javascript inside jsx in App.jsx


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )




// we will understand here why we were not able to write the if else or for loops inside {}  in App.jsx
// because internally in react it is converted into object and we can not pass if else statement or loops inside object
// when we take any other variable we will pass 4th parameter in createElement() function, it will show as text in html

import React from 'react'
import ReactDOM from 'react-dom/client'

const webPage = " Google"

const predefinedSyntax = React.createElement(
  "a",
  {
    href : "https://google.com",       
    target : "_blank"
  },
  "Click here to visit",
  webPage
)

ReactDOM.createRoot(document.getElementById('root')).render(
  predefinedSyntax
)



// internal conversion done by babel (transpiler)





