import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SelectOptionProps } from './selectOption.types';

export const MUISelectOption: React.FC<SelectOptionProps> = ({items, handleChange, value }: SelectOptionProps) => {

  return (
    <FormControl sx={{ m: 1, minWidth: 250 }} size="small">
      <InputLabel id="demo-select-small-label">Saved Filter</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Saved Filter"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {items? items.map((item: any) => (
           <MenuItem key={item.name} value={item.name}>{item.name}</MenuItem>
        )): ""}
      </Select>
    </FormControl>
  );
}
