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
      <div className='flex flex-col items-center justify-center'>
      <Title title='Movie List'/>
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
    </div>
  )
}