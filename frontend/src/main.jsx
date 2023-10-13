import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { DadosContextProvider } from './components/DadosContext.jsx'

// import de paginas
import Login from './routes/Login.jsx'
import App from './App.jsx'
import More from './routes/More'
// import da biblioteca para rotas
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App/>
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "more",
    element: <More/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DadosContextProvider>
      <RouterProvider router={router}/>
    </DadosContextProvider>
    </React.StrictMode>,
)
