import Movie from "../types/Movie";
import { streamingRequest } from "../utilities/axios";

export interface MovieParams {
  country: string;
  service: string;
  type: string;
  page?: number;
  keyword?: string;
}

export interface MovieDataBaseResponse {
  primaryImage: {
    id: string;
    width: number;
    height: number;
    url: string;
    caption: {
      plainText: string;
    }
  };

  titleText: {
    text: string;
  };

  releaseYear: {
    year: number;
  };
}

type GetMovies = (params: MovieParams) => Promise<Movie[]>;

export const getMovies: GetMovies = async (params): Promise<Movie[]> => {
  
  const response = await streamingRequest.get(
    '/search/basic', {
    params: {
      country: params.country,
      service: params.service,
      type: params.type,
      page: params.page,
      keyword: params.keyword,
    }
  });
    const data = response.data;
    return data.results;
}

export const getMovieById = async (id: string): Promise<MovieDataBaseResponse> => {
  const response = await streamingRequest.get(
    `/${id}`,);
  const data = await response.data;
  const results = await data.results;
  return results;
}
  
