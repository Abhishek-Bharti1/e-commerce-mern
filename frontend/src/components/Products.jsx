import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="relative border rounded-lg shadow-lg overflow-hidden">
      <div className="absolute top-2 right-2 text-gray-500">
        <FaHeart />
      </div>
      <Link to={`/product/${product.id}`} className="block">
        <div className="bg-gradient-to-b from-gray-300 via-gray-100 to-white p-4 cursor-pointer">
          <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-md mb-4" />
          <div className="text-center">
            <p className="text-sm text-gray-500">{product.preOrder}</p>
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p className="text-gray-700 mb-2">{product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const Products = () => {
  const products = [
    {
      id: 1, // Add unique ID for each product
      preOrder: 'Exclusive Online Pre-order',
      title: 'Fake Fur Mittens',
      price: '₹ 132,000',
      image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=490&hei=490',
    },
    {
      id: 2, // Add unique ID for each product
      preOrder: 'Exclusive Online Pre-order',
      title: 'Fake Fur Mittens',
      price: '₹ 132,000',
      image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=490&hei=490',
    },  {
      id: 4, // Add unique ID for each product
      preOrder: 'Exclusive Online Pre-order',
      title: 'Fake Fur Mittens',
      price: '₹ 132,000',
      image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=490&hei=490',
    },
    {
      id: 5, // Add unique ID for each product
      preOrder: 'Exclusive Online Pre-order',
      title: 'Fake Fur Mittens',
      price: '₹ 132,000',
      image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=490&hei=490',
    }, {
      id: 6, // Add unique ID for each product
      preOrder: 'Exclusive Online Pre-order',
      title: 'Fake Fur Mittens',
      price: '₹ 132,000',
      image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=490&hei=490',
    }, {
      id: 7, // Add unique ID for each product
      preOrder: 'Exclusive Online Pre-order',
      title: 'Fake Fur Mittens',
      price: '₹ 132,000',
      image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=490&hei=490',
    }, {
      id: 8, // Add unique ID for each product
      preOrder: 'Exclusive Online Pre-order',
      title: 'Fake Fur Mittens',
      price: '₹ 132,000',
      image: 'https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=490&hei=490',
    }
    // Add more products here if needed
  ];

  return (
    <div className="mt-8">
      <h2 className="text-center text-2xl mb-8" id='bestProducts'>Best Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
