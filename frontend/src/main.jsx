import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DadosContextProvider } from './components/DadosContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DadosContextProvider>
      <App />
    </DadosContextProvider>
    </React.StrictMode>,
)
