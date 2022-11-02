import { Routes, Route } from "react-router-dom";
import { CategoriesPreview } from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import "./shop.scss";

export const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview></CategoriesPreview>}></Route>
      <Route path="category/:id" element={<Category></Category>}></Route>
    </Routes>
  );
};
