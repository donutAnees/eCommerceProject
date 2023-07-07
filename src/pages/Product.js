import { useLoaderData } from "react-router-dom";
import ProductPage from "../component/productComponent/ProductPage";

export default function Product() {
  const product = useLoaderData();
  return (
    <ProductPage
      id={product.id}
      title={product.title}
      description={product.description}
      images={product.images}
      price={product.price}
      more_description={product.more_description}
    />
  );
}

export async function loader({ request, params }) {
  const id = params.productId;
  const response = await fetch(
    `https://react-d4c0e-default-rtdb.firebaseio.com/products/${id}.json`
  );
  const data = await response.json();
  return data;
}
