import { useContext } from "react";
import { ProductCard } from "../../components/core/product-card/product-card.component";
import { ProductsContext } from "../../contexts/products.context";
import "./shop.scss";
export const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};
