import { useState } from 'react';
import { capitalize } from './utilities/capitalize';

import { Type } from './options/type';
import { types } from './options/type';
import { Country } from './options/country';
import { countries } from './options/country';
import { Selector } from './components/Selector';
import { Service } from './options/service';
import { services } from './options/service';
import { SelectChangeEvent } from '@mui/material';

export default function App() {
  const [type, SetType] = useState<Type>(Type.Movie);
  const [country, SetCountry] = useState<Country>(Country.TR);
  const [service, SetService] = useState<Service>(Service.Netflix);

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
    <div className='App'>
      <h1 className='text-red-500 text-center my-3 text-4xl font-semibold'>
        Movie List
      </h1>

      <Selector label='Type' labelId='type' value={type} handleChange={handleChange} options={types} />
      <Selector label='Country' labelId='country' value={country} handleChange={handleChange} options={countries} />
      <Selector label='Service' labelId='service' value={service} handleChange={handleChange} options={services} />

      
    </div>
  );
}
