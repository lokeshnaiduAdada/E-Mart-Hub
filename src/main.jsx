import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './store/context/UserContext.jsx'
import SignIn from './store/Authentication/SignIn.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CartProvider key={"cart"}>
        <App />
      </CartProvider>
    </React.StrictMode>,
  </BrowserRouter>
  
)
