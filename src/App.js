import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Keyboards from "./pages/Keyboards";
import Product from "./pages/Product";
import { loader as KeyboardCatalogueLoader } from "./component/keyboardComponents/KeyboardCatalogue";
import { loader as ProductPageLoader } from "./pages/Product";
import Checkout from "./pages/Checkout";
import Support, { action as SupportAction } from "./pages/Support";
import ErrorPage from "./pages/ErrorElement";
import { Suspense } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/keyboards",
        element: <Keyboards />,
        loader: KeyboardCatalogueLoader,
      },
      {
        path: "/keyboards/:productId",
        element: <Product />,
        id: "products",
        loader: ProductPageLoader,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/support",
        element: <Support />,
        action: SupportAction,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
