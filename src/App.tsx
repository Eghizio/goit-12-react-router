import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { Home } from "./pages/Home/Home";
// import { PrivatePage } from "./pages/PrivatePage/PrivatePage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import { useLocationTitle } from "./hooks/useLocationTitle";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails";

import { lazy, Suspense } from "react";

const LazyPrivatePage = lazy(() =>
  import("./pages/PrivatePage/PrivatePage").then((module) => ({
    default: module.PrivatePage,
  }))
);

const Routing = () => {
  // requires to be inside the <BrowserRouter/> which serves as a Provider of data for this hook
  useLocationTitle();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/private"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LazyPrivatePage />
          </Suspense>
        }
      />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/product/details" element={<ProductDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export const App = () => (
  <BrowserRouter>
    <Routing />
  </BrowserRouter>
);
