import { useQuery } from "@tanstack/react-query";
import { getMovies } from '../calls/movie';
import Movie from '../types/Movie';
import { toast } from 'react-toastify';
import type { MovieParams } from "../calls/movie";


export const useGetMovieList = (params: MovieParams) => {
  return useQuery<Movie[], Error>(
    ['movies'],
    () => {
      return getMovies({
        ...params,
      });
    },
    {
      onError: (error) => {
        toast.error(error.message);
      }
    }
  );
};