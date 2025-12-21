import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('accessToken');

  // Check for: 
  // 1. null (not in storage) 
  // 2. "undefined" (stored as string)
  // 3. "" (empty string)
  const isAuthenticated = token && token !== "undefined" && token !== "";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;