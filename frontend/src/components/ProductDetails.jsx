import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const {getCartItems} = useAuth();
  const { id } = useParams();

  const getProductById = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`https://e-commerce-mern-topaz.vercel.app/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      toast.error('Failed to load product details');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  const addToCart = async () => {
    try {
      const response = await fetch('https://e-commerce-mern-topaz.vercel.app/api/cart/add', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ items: [{ productId: id, quantity: 1 }] }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Could not add to cart');
      }

      const cart = await response.json();
      toast.success('Product added to cart');
      getCartItems();
      console.log(cart);
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex p-4 justify-center items-center">
      <div className="flex-1">
        <img
          src={product.image}
          alt={product.name}
          className="bg-[#e8e7e7] w-full h-auto object-cover"
        />
      </div>
      <div className="flex-1 pl-4">
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <button className="bg-[black] text-white py-2 px-4 rounded hover:bg-gray-600" onClick={addToCart} >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
