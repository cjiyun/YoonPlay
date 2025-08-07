import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '@/layout/root-layout';
import NotFound from '@/pages/NotFound';
import HomePage from '@/pages/HomePage';
import SearchPage from '@/pages/SearchPage';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import Category from '@/pages/CategoryPage';
import CategoryMoviesPage from '@/pages/CategoryMoviesPage';
import MovieDetailsPage from '@/pages/MovieDetailPage';
import NonAuthRoute from '@/routes/NonAuthRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'search',
        element: <SearchPage />,
      },
      {
        path: 'login',
        element: (
          <NonAuthRoute>
            <LoginPage />
          </NonAuthRoute>
        ),
      },
      {
        path: 'signup',
        element: (
          <NonAuthRoute>
            <SignupPage />
          </NonAuthRoute>
        ),
      },
      {
        path: 'movies',
        element: <Category />,
      },
      {
        path: 'movies/:category',
        element: <CategoryMoviesPage />,
      },
      {
        path: 'movie/:movieId',
        element: <MovieDetailsPage />,
      },
    ],
  },
]);

export default router;
