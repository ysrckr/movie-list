import { FetchButton } from "../FetchButton"
import { SearchBar } from "../SearchBar"
import { Selector } from "../Selector"
import { Title } from "../Title"
import { FC } from "react"

import { Type } from "../../options/type"
import { Country } from "../../options/country"
import { Service } from "../../options/service"
import { SelectChangeEvent } from "@mui/material"

import { types } from "../../options/type"
import { countries } from "../../options/country"
import { services } from "../../options/service"
import { ToastContainer } from 'react-toastify';


type HeaderProps = {
  type: Type;
  country: Country;
  service: Service;
  handleChange: (e: SelectChangeEvent) => void;
  setSearchQuery: (query: string) => void;
  refetch: () => void;
};


export const Header: FC<HeaderProps> = ({
  type,
  country,
  service,
  handleChange,
  setSearchQuery,
  refetch,
}) => {
  return (
      <header className='flex flex-col items-center justify-center gap-4'>
      <Title title='Movie List'/>
      
      <div className='flex items-center justify-center'>
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

        <SearchBar setSearchQuery={setSearchQuery} />

        <FetchButton fetch={refetch} />
        
        <ToastContainer />
      </div>
    </header>
  )
}