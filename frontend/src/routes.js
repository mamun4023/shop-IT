import { useRoutes } from 'react-router-dom';

import Home from './pages/home';
import Cart from './pages/cart';

export default function Router() {
  return useRoutes([
    { path: '/', element: <Home />},
    { path: '/cart', element: <Cart />},
    { path: '*', element: <div>not found</div>  }
  ]);
}