import { Navigate, useParams } from "react-router-dom";
import ProductCatalogDetailTemplate from "../components/products/ProductCatalogDetailTemplate";
import { getProductById } from "../constants/productsCatalog";

export default function ProductCatalogDetail() {
  const { id } = useParams();
  const product = getProductById(id);

  if (!product) {
    return <Navigate to="/#products" replace />;
  }

  return <ProductCatalogDetailTemplate product={product} />;
}
