import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const UIProgress = () => {

  return (
    <Box sx={{ display: 'flex', mt: '100px' }}>
      <CircularProgress 
        size="100px"
        thickness={1.2}
        sx={{ m: 'auto' }}
      />
    </Box>
  );
};

