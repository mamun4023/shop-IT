import { useRoutes } from 'react-router-dom';

import Home from './pages/home'

export default function Router() {
  return useRoutes([
    {
      path: '/', element: <Home />
    },

    { path: '*', element: <div>not found</div>  }
  ]);
}