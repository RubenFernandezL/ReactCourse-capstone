import { useSelector } from "react-redux";
import { getCategories } from "../../store/categories/categories.selector";
import "./categories.scss";
import DirectoryItem from "./directory-item/directory-item.component";

const CategoriesContainer = () => {
  const categories = useSelector(getCategories)

  return (
    <div className="categories-container">
      {categories?.map((category) => (
        <DirectoryItem key={category.id} category={category}></DirectoryItem>
      ))}
    </div>
  );
};

export default CategoriesContainer;
