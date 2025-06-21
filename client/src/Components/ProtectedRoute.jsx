// components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children, adminOnly = false,customerOnly=false }) => {
  const currentUser = useSelector((state) => state.user.currentUser);

  if (!currentUser) return <Navigate to="/signin" replace />;

  if (adminOnly && currentUser.role !== 'admin') {
    return <Navigate to="/unauthorized" replace />;
  }
  if (customerOnly && currentUser.role !== 'user') {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

export default ProtectedRoute;
