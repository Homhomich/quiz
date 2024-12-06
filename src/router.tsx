import { createBrowserRouter } from 'react-router';

import { QuizPage } from '@/pages/QuizPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

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
