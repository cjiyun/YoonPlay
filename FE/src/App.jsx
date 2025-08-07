import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import router from '@/routes/router';
import './App.css';
import UserProvider from '@/components/providers/UserProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer
          position="top-center"
          autoClose={3000}
          pauseOnHover
          hideProgressBar
          theme="dark"
        />
      </QueryClientProvider>
    </UserProvider>
  );
}

export default App;
