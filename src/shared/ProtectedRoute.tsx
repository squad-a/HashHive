import React from 'react';
import { useAppStore } from '../utils/store';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const access_token = useAppStore((state) => state.access_token);

  if (access_token === '') {
    return <Navigate to='/auth' replace={true} />;
  } else {
    return children;
  }
};
