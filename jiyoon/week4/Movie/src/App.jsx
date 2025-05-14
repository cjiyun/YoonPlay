import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from './layout/root-layout';
import NotFound from './pages/not-found';
import HomePage from "./pages/home";
import Search from './pages/search';
import Category from './pages/Movies/category';
import NowPlaying from './pages/Movies/now-playing';
import Popular from "./pages/Movies/popular";
import TopRated from "./pages/Movies/top-rated";
import Upcoming from "./pages/Movies/up-coming";
import Login from './pages/login';
import SignUp from './pages/signup';
import MovieDetailsPage from "./pages/Movies/movie-detail";
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
        element: <Category />,
        children: [
          {
            index: true,
            element: <Category />
          }
        ]
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
        path: 'movies/now-playing',
        element: <NowPlaying />
      },
      {
        path: 'movies/popular',
        element: <Popular />
      },
      {
        path: 'movies/top-rated',
        element: <TopRated />
      },
      {
        path: 'movies/up-coming',
        element: <Upcoming />
      },
      {
        path: 'movies/:movieId',
        element: <MovieDetailsPage />
      }
    ]
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
