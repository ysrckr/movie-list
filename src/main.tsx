import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider, QueryClient, } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { HomePage } from './routes/HomePage';
import { MoviePage } from './routes/MoviePage';




const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/movies/:id',
    element: <MoviePage />,
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
