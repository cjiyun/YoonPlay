import { useState } from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import RootLayout from './layout/root-layout';
import NotFound from './pages/not-found';
import HomePage from "./pages/home";
import Search from './pages/search';
import Category from './pages/category';
import MoviesPage from './pages/movies';
import Login from './pages/login';
import SignUp from './pages/signup';
import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'search',
        element: <Search />
      },
      {
        path: 'movies',
        element: <Category />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      {
        path: 'movies/:category',
        element: <MoviesPage />
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
