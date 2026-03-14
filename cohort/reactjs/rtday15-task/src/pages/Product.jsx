import { useContext } from "react";
import { ProductDataContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Product = () => {
  const productData = useContext(ProductDataContext);

  let renderData = "";
  if (productData.length > 0) {
    renderData = productData.map(function (elem, idx) {
      return (
        <Link
          className=" w-50 text-center bg-white block p-5 rounded-lg"
          target="_blank"
          key={idx}
          to={`/product/${elem.id}`}
        >
          <div>
            <img className=" h-37.5 mx-auto" src={elem.image} alt="123" />
            <h1 className="mt-4 font-semibold">{elem.title}</h1>
          </div>
        </Link>
      );
    });
  }
  return (
    <div className="flex flex-wrap gap-10 bg-black p-10">{renderData}</div>
  );
};

export default Product;
