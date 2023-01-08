import { HomePage } from './pages/Home.page';
import { MoviePage } from './pages/Movie.page';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<HomePage />}>
      <Route
        path='movie/:id'
        element={<MoviePage />}
      />
    </Route>,
  ),
);

export default function App() {
  return <div className='App m-5'>
    <RouterProvider router={router} />
  </div>;
}
