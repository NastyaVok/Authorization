import { Container } from '@mui/material';

import { Header } from '../Header';
import { useMainRouts } from '../../routes/routesConfig';

export const Account = () => {
  const routs = useMainRouts();

  return (
    <Container
    sx={{ maxWidth: '1300px' }}
    >
      <Header />
      {routs}
    </Container>
  );
};