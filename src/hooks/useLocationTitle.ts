import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useLocationTitle = () => {
  const location = useLocation();

  console.log({ location });

  useEffect(() => {
    document.title = location.pathname.replace("/", " ");
  }, [location.pathname]);
};
