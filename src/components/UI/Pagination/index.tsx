import { Dispatch, ChangeEvent, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

interface Props {
    page: number
    setPage: Dispatch<React.SetStateAction<number>>
    count: number
}

export const UIPagination = ({count, page, setPage}: Props) => {
  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if(page > count) {
      setPage(1);
    }
  }, [count,page,setPage]);
  
  return (
    <Stack spacing={2}>
      <Typography>Page: {page}</Typography>
      <Pagination count={count} page={page} onChange={handleChange} />
    </Stack>
  );
};