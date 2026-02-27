import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

export default function ProtectedRoute({ children }) {
  const { state } = useContext(StoreContext);

  if (!state.isAuthenticated) return <Navigate to="/login" />;
  return children;
}