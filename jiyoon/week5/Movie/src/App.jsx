import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './layout/root-layout';
import NotFound from './pages/NotFound';
import HomePage from "./pages/HomePage";
import SearchPage from './pages/SearchPage';
import Category from './pages/CategoryPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MovieDetailsPage from "./pages/MovieDetailPage";
import MovieListPage from "./pages/MovieListPage";
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
        element: <SearchPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignupPage />
      },
      {
        path: 'movies',
        element: <Category />
      },
      {
        path: 'movies/:category',
        element: <MovieListPage />
      },
      {
        path: 'movie/:movieId',
        element: <MovieDetailsPage />
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
