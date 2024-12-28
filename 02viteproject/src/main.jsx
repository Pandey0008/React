import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement={
//   type:"a",
//   props:{
//       href:"http://www.google.com",
//       target:"_blank"
//   },
//   Children:"Click me to visit Google"
// }

const reactElement=React.createElement(
  'a',
  {href: "http://www.google.com",target:'_blank' },
  "Click me to visit google"
)

const anotherElement=(
  <a href="http://www.google.com" target="_blank">Visit Google</a>
);

createRoot(document.getElementById('root')).render(
  // reactElement,
  // anotherElement,
  <StrictMode>
    <App />
  </StrictMode>
)
