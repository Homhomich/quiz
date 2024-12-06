import { createBrowserRouter } from 'react-router'

import Index from './pages/Index'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default router
