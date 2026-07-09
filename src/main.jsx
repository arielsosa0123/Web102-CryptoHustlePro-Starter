import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './routes/Header'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
