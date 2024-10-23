import { createBrowserRouter } from 'react-router-dom';
import routes from './routes';
import PathConstants from './constants';
import Layout from 'components/Layout';

const router = createBrowserRouter([
  // {
  //   path: PathConstants.SIGNUP,
  //   element: <Login />
  // },
  {
    element: <Layout />,
    errorElement: <h1>404 Page Not Found</h1>,
    children: routes,
  }
]);

export default router;