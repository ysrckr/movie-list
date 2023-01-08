import { useCallback, useState } from 'react';
import { Type } from './options/type';
import { Country } from './options/country';
import { Service } from './options/service';
import {SelectChangeEvent} from '@mui/material';
import useDebounce from './hooks/useDebounce';
import { useGetMovieList } from './hooks/useGetMovieList';
import { Loader } from './components/Loader';
import { MovieList } from './components/MovieList';
import { Header } from './components/layout/Header';

export default function App() {
  const [type, SetType] = useState<Type>(Type.Movie);
  const [country, SetCountry] = useState<Country>(Country.TR);
  const [service, SetService] = useState<Service>(Service.Netflix);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const debouncedSearch = useDebounce(searchQuery, 1000);

  const {
    data: movies,
    isLoading,
    refetch,
  } = useGetMovieList({type, country, service});

  const handleChange = useCallback((e: SelectChangeEvent) => {
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
  }, [type, country, service]);

  return (
    <div className='App m-5'>
      <Header
        type={type}
        country={country}
        service={service}
        handleChange={handleChange}
        setSearchQuery={setSearchQuery}
        refetch={refetch}
      />


      {isLoading && (
        <Loader isLoading={isLoading} />
      )}

      {movies && (
        <MovieList movies={movies} />
      )}
      
    </div>
  );
}

