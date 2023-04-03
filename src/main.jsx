import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './routes/Home/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import Error from './routes/Error'
import UserHome from './routes/UserHome'
import {createBrowserRouter,RouterProvider}  from 'react-router-dom'
import ImcCalculator from './routes/ImcCalculator'
import {AuthContextProvider} from './contexts/Auth/AuthContextProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
      {
        path: 'home',
        element: <UserHome/>
      },
      {
        path: 'imccalculator',
        element: <ImcCalculator/>
      }
    ]

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>  
      <RouterProvider router={router}/>     
    </AuthContextProvider>   
  </React.StrictMode>,
)
