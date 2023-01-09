import { useQuery } from "@tanstack/react-query";
import { useLocation } from 'wouter';

import { getMovieById } from "../calls/movie";
import { toast } from "react-toastify";
import type { MovieDataBaseResponse } from "../calls/movie";

export const useGetMovieById = (id: string) => {
  return useQuery<MovieDataBaseResponse, Error>(
    ["movie", id],
    () => {
      return getMovieById(id);
    },
    {
      refetchOnWindowFocus: false,
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );
}
