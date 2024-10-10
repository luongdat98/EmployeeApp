import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoutes = (props) => {
  const isAuth = props.isAuthed;
  const location = useLocation();
  console.log('ProtectedRoutes', isAuth);
  return isAuth ? <Outlet /> : <Navigate to="/login" replace state={{ from: location}} />;
};

export default ProtectedRoutes;