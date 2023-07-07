import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Keyboards from "./pages/Keyboards";
import Product from "./pages/Product";
import { loader as KeyboardCatalogueLoader } from "./component/keyboardComponents/KeyboardCatalogue";
import { loader as ProductPageLoader } from "./pages/Product";
import Checkout from "./pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        id:'products',
        loader: ProductPageLoader,
      },
      {
        path: "/checkout" ,
        element: <Checkout />
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
