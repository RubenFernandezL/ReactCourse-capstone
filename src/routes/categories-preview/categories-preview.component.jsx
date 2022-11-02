import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { getCategories } from "../../store/categories/categories.selector.js";

export const CategoriesPreview = () => {
  const categories = useSelector(getCategories);



  //<> es una abreviación de Fragment
  return (
    <>
      {categories.map((category) => {
        const products = category.items;
        return (
          <CategoryPreview
            key={category.id}
            title={category.title}
            products={products}
            id={category.id}
          ></CategoryPreview>
        );
      })}
    </>
  );
};
