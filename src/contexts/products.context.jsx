import { createContext, useState, useEffect } from "react";
import SHOP_DATA from "../shop-data.js";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.jsx";
export const ProductsContext = createContext({
  products: [],
  setProducts: () => null,
});

export const ProductsProvider = ({ children }) => {
  const [products] = useState([]);
  const value = { products };

  useEffect(() => {
    addCollectionAndDocuments("categories", SHOP_DATA);
  }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
