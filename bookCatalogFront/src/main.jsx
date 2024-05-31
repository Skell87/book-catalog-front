import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { useState } from 'react'
import{
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom'


import HomePage from './homePage.jsx'
import Login from './Login'
import ErrorPage from './ErrorPage'
import { AuthContext } from './authContext.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


function Layout() {
  return (
    <>
      {/* <Header /> */}
      <div id='page-content'>
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />
      },
      {
        path: '/login',
        element: <Login />
      },
    ]
  }
])

const AuthContextProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState('')

  const auth = {
    accessToken,
    setAccessToken
  }

  return (
    <AuthContext.Provider value={{ auth }} >
      {children}
    </AuthContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
  <RouterProvider router={router} />
  </AuthContextProvider>
)