import { useRoutes } from 'react-router-dom';

import Home from './pages/home';
import Cart from './pages/cart';
import Product from './pages/product';

export default function Router() {
  return useRoutes([
    { path: '/', element: <Home />},
    { path: '/product/:id', element : <Product />},
    { path: '/cart', element: <Cart />},
    { path: '*', element: <div>not found</div>  }
  ]);
}