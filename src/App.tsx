import { useState } from 'react';
import { Type } from './options/type';
import { types } from './options/type';
import { Country } from './options/country';
import { countries } from './options/country';
import { Selector } from './components/Selector';
import { Service } from './options/service';
import { services } from './options/service';
import { Box, Button, FormControl, SelectChangeEvent, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function App() {
  const [type, SetType] = useState<Type>(Type.Movie);
  const [country, SetCountry] = useState<Country>(Country.TR);
  const [service, SetService] = useState<Service>(Service.Netflix);
  const [searchQuery, SetSearchQuery] = useState<string>('');
  const [fetchMovies, SetFetchMovies] = useState<boolean>(false);

  const options = {
  method: 'GET',
  url: 'https://streaming-availability.p.rapidapi.com/search/basic',
  params: {
    country: country,
    service: service,
    type: type,
    genre: '18',
    page: '1',
    output_language: 'en',
    language: 'en'
  },
  headers: {
    'X-RapidAPI-Key': 'cc1bdeecc6msh9b85c2bb0f96362p1df40fjsn3c4a0bcfd028',
    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
  }
};

  const { data: movies } = useQuery(['movies'], () => {
    return axios.request(options).then((res) => res.data);
  }, {
    enabled: fetchMovies,
  });

  console.log(movies);

  const handleChange = (e: SelectChangeEvent) => {
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
  };

  return (
    <div className='App m-5'>
      <h1 className='text-red-500 text-center my-3 text-4xl font-semibold'>
        Movie List
      </h1>

      <Selector
        label='Type'
        labelId='type'
        value={type}
        handleChange={handleChange}
        options={types}
      />
      <Selector
        label='Country'
        labelId='country'
        value={country}
        handleChange={handleChange}
        options={countries}
      />
      <Selector
        label='Service'
        labelId='service'
        value={service}
        handleChange={handleChange}
        options={services}
      />

      <FormControl
        sx={{
          marginLeft: '1rem',
        }}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', minWidth: 240 }}>
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id='search'
            label='Search'
            variant='standard'
            autoComplete='off'
            value={searchQuery}
            onChange={e => SetSearchQuery(e.target.value)}
          />
        </Box>
      </FormControl>

      <FormControl sx={{ marginLeft: '2rem', minWidth: 120 }}>
        <Button
          variant='outlined'
          onClick={() => SetFetchMovies(prev => !prev)}>
          Search
        </Button>
      </FormControl>


      {movies && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
          {movies.results.map((movie: any) => (
            <div
              key={movie.id}
              className='bg-gray-100 rounded-md p-2'>
              <img
                src={movie.posterURLs['185']}
                alt={movie.title}
                className='rounded-md'
              />
              <h1 className='text-xl font-semibold'>{movie.title}</h1>
              <p className='text-sm'>{movie.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
