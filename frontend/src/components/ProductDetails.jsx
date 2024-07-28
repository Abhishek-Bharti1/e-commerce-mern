import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./Loader";
const ProductDetail = () => {
  const [product,setProduct] = useState({});
  const [loading,setLoading] = useState(false);
const {id} = useParams();


const getProductById = async(id)=>{
  setLoading(true);
  try {
    const product = await fetch(`https://e-commerce-mern-topaz.vercel.app/api/products/${id}`);
    const data = await product.json();


    setProduct(data);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  getProductById(id);
},[]);


const addToCart = ()=>{
  
}
if(loading){
  return <Loader />
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
        <button className="bg-[black] text-white py-2 px-4 rounded hover:bg-gray-600" onClick={addToCart}>
          Add to Cart
        </button>
     
      </div>
    </div>
  );
};

export default ProductDetail;
