import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Root from './routes/Root';
import Detail from './routes/Detail';
import ErrorBoundary from './components/ErrorBoundary';

const fetchCountryByCode = async (code) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);

  if (response.status === 404) {
    throw new Response('Not Found', { status: 404 });
  }

  if (!response.ok) {
    throw new Error('Could not fetch data');
  }

  return response.json();
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/:countrycode',
    loader: ({ params }) => fetchCountryByCode(params.countrycode),
    element: <Detail />,
    errorElement: <ErrorBoundary />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
