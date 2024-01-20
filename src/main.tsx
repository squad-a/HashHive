import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppStore } from './utils/store.tsx';
import { ProtectedRoute } from './shared/ProtectedRoute.tsx';

const Auth = lazy(() => import('./pages/Auth/Index'));
const Home = lazy(() => import('./pages/Home/Index'));

const client = new ApolloClient({
  uri: import.meta.env.VITE_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: useAppStore.getState().access_token
  }
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Suspense fallback={<>Loading ...</>}>
        <RouterProvider router={router} />
      </Suspense>
    </ApolloProvider>
  </React.StrictMode>
);
