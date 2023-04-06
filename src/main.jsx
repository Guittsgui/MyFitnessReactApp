import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Home from './routes/PublicRoutes/Home/Home'
import Login from './routes/PublicRoutes/Login'
import Register from './routes/PublicRoutes/Register'
import Error from './routes/Error'
import UserHome from './routes/UserRoutes/UserHome'
import {createBrowserRouter,RouterProvider}  from 'react-router-dom'
import ImcCalculator from './routes/UserRoutes/ImcCalculator'
import {AuthContextProvider} from './contexts/Auth/AuthContextProvider'
import MyDiet from './routes/UserRoutes/MyDiet'
import MyWorkout from './routes/UserRoutes/MyWorkout'
import FoodBlog from './routes/UserRoutes/FoodBlog'
import FitnessBlog from './routes/UserRoutes/FitnessBlog'
import AdmAllUsers from './routes/AdmRoutes/AdmAllUsers'
import AdmEditUser from './routes/AdmRoutes/AdmEditUser'
import AdmAddDiet from './routes/AdmRoutes/AdmAddDiet'
import AdmAddBlogPost from './routes/AdmRoutes/AdmAddBlogPost'

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
      },
      {
        path: 'mydiet',
        element:<MyDiet/>
      },
      {
        path: 'myworkout',
        element: <MyWorkout/>
      },
      {
        path: 'foodblog',
        element: <FoodBlog/>
      },
      {
        path: 'fitnessblog',
        element: <FitnessBlog/>
      },
      {
        path: 'admallusers',
        element: <AdmAllUsers/>
      },
      {
        path: 'admedituser/:id',
        element: <AdmEditUser/>
      },
      {
        path: 'adddiet/:id',
        element: <AdmAddDiet/>
      },
      {
        path: 'addblogpost',
        element: <AdmAddBlogPost/>
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
