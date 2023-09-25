import { Routes, Route } from 'react-router-dom';

import { Authorization } from '../pages/AuthorizationPage';
import { Account } from '../pages/AccountPage';
import { Order } from '../pages/OrderPage';
import { RequireAuth } from '../hoc/RequireAuth';

export const useRouts = () => {

  return (
    <Routes>
      <Route index element={<Authorization />} />
      <Route path="/login" element={<Authorization />} />
      <Route element={<RequireAuth />}>
        <Route path="/main/*" element={<Account />}/>
      </Route>
    </Routes>
  );
};

export const useMainRouts = () => {

  return (
    <Routes>
      <Route path="orders" element={<Order />} />
    </Routes>
  );
};
