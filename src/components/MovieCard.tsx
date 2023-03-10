import { FC } from 'react';

import Movie from '../types/Movie';
import { Link } from 'react-router-dom';

type Props = {
  movie: Movie;
};

export const MovieCard: FC<Props> = ({ movie }) => {
  return (
    <div
      className="bg-gray-100 rounded-md
      p-2 grid grid-cols-1 place-items-center
      gap-2 items-center movie-card"
    >
      <Link to={`/movies/${movie.imdbID}`}>
        <img
          src={movie.posterURLs['185']}
          alt={movie.title}
          className="rounded-md items-center justify-center"
        />
      </Link>
      <h3 className="text-xl font-semibold">{movie.title}</h3>
      <p className="text-sm">{movie.year}</p>
    </div>
  );
};
