import { Dispatch } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface Props {
    initial: string
    value: string | null
    setValue: Dispatch<React.SetStateAction<string | null>>
    options: string[]
}

export const UISelect = ({ initial, options, value, setValue }: Props) => {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 250 }}
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      renderInput={(params) => <TextField {...params} label={initial} />}
    />
  );
};
