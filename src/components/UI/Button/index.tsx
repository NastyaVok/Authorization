import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';

interface Props {
    text: string
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const UIButton = ({ text, onClick }: Props) => {

  return (
    <Button 
      variant="outlined" 
      size="medium" 
      onClick={onClick}
    >
      {text}
    </Button>
  );
};