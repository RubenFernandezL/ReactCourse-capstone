import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../contexts/categories.context";

export const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);
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
