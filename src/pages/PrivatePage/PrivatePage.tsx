import { Navigate } from "react-router-dom";
// import { redirect } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const PrivatePage = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" replace />;
  // if (!user) return redirect("/");

  return <main>Private page</main>;
};
