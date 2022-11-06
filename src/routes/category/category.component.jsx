import "./category.scss";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductCard } from "../../components/core/product-card/product-card.component";
import { useSelector } from "react-redux";
import { getCategories, getCategoriesStatus } from "../../store/categories/categories.selector.js";
import Spinner from '../../components/spinner/spiner.component'

const Category = () => {
  const { id } = useParams();
  const categories = useSelector(getCategories)
  const isLoading = useSelector(getCategoriesStatus)
  const category = categories.filter((category) => category.id === id)?.pop();
  const [products, setProducts] = useState(category?.items);

  useEffect(() => {
    setProducts(categories.filter((category) => category.id === id)?.pop()?.items);
  }, [id, categories]);


  return (
    <>
      {isLoading ? <Spinner></Spinner> : (
        <><h2 className="category-title">{category?.title.toUpperCase()}</h2>
          <div className="category-container">
            {products?.map((product) => (
              <ProductCard key={product.id} product={product}></ProductCard>
            ))}
          </div></>)}
    </>
  );
};

export default Category;
