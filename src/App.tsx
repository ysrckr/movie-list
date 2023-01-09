import { HomePage } from './pages/Home.page';
import { MoviePage } from './pages/Movie.page';
import { Route } from 'wouter';

export default function App() {
  return (
    <div className="App m-5">
      <Route path="/" component={HomePage} />
      <Route path="/movie/:id">
        {(params) => <MoviePage id={params.id as string} />}
      </Route>
    </div>
  );
}
