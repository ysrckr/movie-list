import { FormControl, Box, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { FC } from "react";

type Props = {
  setSearchQuery: (query: string) => void;
};

export const SearchBar: FC<Props> = ({setSearchQuery}) => {
  return (
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
          onChange={e => {
            setSearchQuery(e.target.value);
          }}
        />
      </Box>
    </FormControl>
  );
}