import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Layout from '../layouts/Layout';
import Home from '../views/Home';
import { loader } from '../loaders/FileLoader';

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
