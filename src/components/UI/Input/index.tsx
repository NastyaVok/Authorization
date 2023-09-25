import { Dispatch } from 'react';
import TextField from '@mui/material/TextField';

interface Props {
    value: string
    setValue: Dispatch<React.SetStateAction<string>>
    placeholder?: string
    error?: boolean
    textError?: boolean
    setTextError?: Dispatch<React.SetStateAction<boolean>>
    setError?: Dispatch<React.SetStateAction<boolean>>
}

export const UIInput = (
  { value, setValue, placeholder='', error = false, textError = false, setError, setTextError }: Props) => {
  const changeValue = (value: string) => {
    setValue(value);
    if (setError && setTextError) {
      setError(false); 
      setTextError(false);
    }
  };

  return (
    <TextField 
      id="outlined-basic" 
      label="Outlined" 
      variant="outlined" 
      value={value}
      placeholder={placeholder}
      onChange={(e)=> changeValue(e.target.value)}
      error={error}
      helperText={textError ? 'Incorrect value.' : ''}
    /> 
  );
};