import Movie from "../types/Movie";
import { request } from "../utilities/axios";

export interface MovieParams {
  country: string;
  service: string;
  type: string;
  page?: number;
}

type GetMovies = (params: MovieParams) => Promise<Movie[]>;

export const getMovies: GetMovies = async (params): Promise<Movie[]> => {
  
  const response = await request.get(
    '/search/basic', {
    params: {
      country: params.country,
      service: params.service,
      type: params.type,
      page: params.page,
    }
  });
    const data = response.data;
    return data.results;
}
