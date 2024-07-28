import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
      <div className="relative border rounded-lg shadow-lg overflow-hidden">
        <div className="absolute top-2 right-2 text-gray-500">
          <FaHeart />
        </div>
        <Link to={`/product/${product._id}`} className="block">
          <div className="bg-gradient-to-b from-gray-300 via-gray-100 to-white p-4 cursor-pointer">
            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <div className="text-center">
              <p className="text-sm text-gray-500">Exclusive Online Pre-order</p>
              <h3 className="text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">${product.price}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  export default ProductCard;