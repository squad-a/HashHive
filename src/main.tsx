import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useAppStore } from './utils/store.tsx';
import { ProtectedRoute } from './shared/ProtectedRoute.tsx';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

const Auth = lazy(() => import('./pages/Auth/Index'));
const Home = lazy(() => import('./pages/Home/Index'));
const PostEditor = lazy(() => import('./pages/PostEditor/Index'));

const client = new ApolloClient({
  uri: import.meta.env.VITE_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: useAppStore.getState().access_token
  }
});

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <Auth />
  },
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    )
  },
  {
    path: '/create-blog',
    element: (
      <ProtectedRoute>
        <PostEditor />
      </ProtectedRoute>
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Suspense fallback={<>Loading ...</>}>
          <RouterProvider router={router} />
        </Suspense>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);
