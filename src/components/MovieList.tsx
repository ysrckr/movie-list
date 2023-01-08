import { FC } from "react"
import Movie from "../types/Movie"
import { MovieCard } from "./MovieCard"

type Props = {
  movies: Movie[]
}


export const MovieList: FC<Props> = ({movies}) => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
      {movies.map((movie: Movie) => (
       <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}