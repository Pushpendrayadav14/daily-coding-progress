import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductDataContext } from "../context/ProductContext";

const ProductDetails = () => {
  const productData = useContext(ProductDataContext);
  const { productId } = useParams();

  const selectedProduct = productData.find((elem) => elem.id == productId);
  if (!selectedProduct) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="w-full h-screen bg-black p-2 "> 
    <div className=" w-50 text-center bg-white block p-5 rounded-lg">
      <img className=" h-38 mx-auto" src={selectedProduct.image} alt="123" />
      <h1 className="mt-4 font-semibold">{selectedProduct.title}</h1>
      <h1 className="mt-4 font-semibold">${selectedProduct.price}</h1>
    </div>
    </div>

  );
};

export default ProductDetails;
