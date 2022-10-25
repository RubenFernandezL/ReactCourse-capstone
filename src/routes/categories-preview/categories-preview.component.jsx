import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { getCategories } from "../../store/categories/categories.selector.js";

export const CategoriesPreview = () => {
  const categories = useSelector(getCategories);
  //<> es una abreviación de Fragment
  return (
    <>
      {Object.keys(categories).map((title) => {
        const products = categories[title];
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </>
  );
};
