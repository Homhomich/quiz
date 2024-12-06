import { createBrowserRouter } from 'react-router';

import NotFoundPage from './pages/NotFoundPage';
import { QuizPage } from '@/pages/QuizPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <QuizPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
