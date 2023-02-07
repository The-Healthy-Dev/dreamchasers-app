import React from 'react'
import ReactDOM from 'react-dom/client'
import logger from './logger'
import App from './App'
import './index.css'

window.logger = logger

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
