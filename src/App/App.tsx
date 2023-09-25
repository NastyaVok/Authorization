import './App.css';
import { useRouts } from '../routes/routesConfig';


export const App = () => {
  const routs = useRouts();

  return (
    <>
      {routs}
    </>
  );
};
