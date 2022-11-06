import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { getCategories, getCategoriesStatus } from "../../store/categories/categories.selector.js";
import Spinner from '../../components/spinner/spiner.component'

export const CategoriesPreview = () => {
  const categories = useSelector(getCategories);
  const isLoading = useSelector(getCategoriesStatus)


  //<> es una abreviación de Fragment
  return (
    <>
      {isLoading ? <Spinner></Spinner> : (
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
        </>)}
    </>
  )
}

