import { SelectChangeEvent } from "@mui/material";
import { useState, useCallback } from "react";
import { Loader } from "../components/Loader";
import { Header } from "../components/layout/Header";
import { MovieList } from "../components/layout/MovieList";
import useDebounce from "../hooks/useDebounce";
import { useGetMovieList } from "../hooks/useGetMovieList";
import { Country } from "../options/country";
import { Service } from "../options/service";
import { Type } from "../options/type";

export const HomePage = () => {
  const [type, SetType] = useState<Type>(Type.Movie);
  const [country, SetCountry] = useState<Country>(Country.TR);
  const [service, SetService] = useState<Service>(Service.Netflix);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const debouncedSearch = useDebounce(searchQuery, 1000);

  const {
    data: movies,
    isLoading,
    isFetching,
    refetch,
  } = useGetMovieList({ type, country, service, keyword: debouncedSearch });

  const handleChange = useCallback(
    (e: SelectChangeEvent) => {
      switch (e.target.name) {
        case 'type':
          SetType(e.target.value as Type);
          break;
        case 'country':
          SetCountry(e.target.value as Country);
          break;
        case 'service':
          SetService(e.target.value as Service);
          break;
        default:
          break;
      }
    },
    [type, country, service],
  );

  return (
    <>
      <Header
        type={type}
        country={country}
        service={service}
        handleChange={handleChange}
        setSearchQuery={setSearchQuery}
        refetch={refetch}
        isFetching={isFetching}
      />

      {isLoading && <Loader isLoading={isLoading} />}

      {movies && <MovieList movies={movies} />}
    </>
  );
}