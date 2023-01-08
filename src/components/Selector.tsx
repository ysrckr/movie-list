import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from "@mui/material";
import { FC } from "react";
import { Type } from "../options/type";
import { Country } from "../options/country";
import { Service } from "../options/service";

type SelectorProps = {
  label: string;
  labelId: string;
  value: Type | Country | Service;
  handleChange: (e: SelectChangeEvent) => void;
  options: Type[] | Country[] | Service[];
};


export const Selector: FC<SelectorProps> = ({ 
  label,
  value,
  handleChange,
  options,
}) => {
  const name = label.toLowerCase();
  const labelId = `${name}-label`;

  return (
    <FormControl
      sx={{
        marginLeft: '1rem',
      }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        name={name}
        value={value}
        label={label}
        onChange={handleChange}>
        {options.map(option => (
          <MenuItem
            key={option}
            value={option}>
            {option.toUpperCase()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}