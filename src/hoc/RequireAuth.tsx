import { observer } from 'mobx-react-lite';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

import { getLocalStorage } from '../utils/localStore';

import { useStore } from '../utils/hooks/useStore';

export const RequireAuth = observer(() => {
  const {
    rootStore: { authStore },
  } = useStore();
  authStore.setAuthStore(getLocalStorage('access').status || false);
  const auth = authStore.getAuthStore;

  const location = useLocation();
    

  return (
    auth 
      ?
      <Outlet />
      :
      <Navigate to="/login" state={{from:location}} replace />
  );
});