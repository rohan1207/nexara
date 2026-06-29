import { Navigate, useParams } from "react-router-dom";
import ProductDetailTemplate from "../components/products/ProductDetailTemplate";
import { getProductBySlug } from "../constants/productsDetail";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  if (!product) {
    return <Navigate to="/" replace />;
  }

  return <ProductDetailTemplate product={product} />;
}
