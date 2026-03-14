import React, { useState, useEffect, createContext } from "react";
import { getData } from "../api/productApi";

export const ProductDataContext = createContext();

const ProductContext = (props) => {
  const [productData, setproductData] = useState([]);

  const setData = async () => {
    setproductData(await getData());
  };

  useEffect(function () {
    setData();
  }, []);

  return (
    <div>
      <ProductDataContext.Provider value={productData}>
        {props.children}
      </ProductDataContext.Provider>
    </div>
  );
};

export default ProductContext;
