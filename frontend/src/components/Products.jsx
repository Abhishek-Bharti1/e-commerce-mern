import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';



const Products = () => {
  const [products,setProducts] = useState([]);
const getProducts = async ()=>{
  try {
    const product = await fetch("https://e-commerce-mern-topaz.vercel.app/api/products");
const data = await product.json();
console.log(data);
setProducts(data);
  } catch (error) {
    console.log(error);
  }
}
useEffect(()=>{
  getProducts();
},[]);
  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl mb-8" id='bestProducts'>Best Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
           key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
