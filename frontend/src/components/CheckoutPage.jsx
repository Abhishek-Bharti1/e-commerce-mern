import  { useState } from 'react';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const sampleProduct = {
    id: 1,
    name: "Louis Vuitton Side Trunk MM",
    description: "A stylish and functional side trunk from Louis Vuitton.",
    price: 2500,
    imageUrl: "https://in.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-side-trunk-mm--M12480_PM2_Front%20view.png?wid=1090&hei=1090"
  };

  // Initial cart state
  const [cart, setCart] = useState([
    { ...sampleProduct, quantity: 1 }
  ]);

  // Remove product from cart
  const removeProduct = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    ));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      
      <div className="space-y-4">
        {cart.map(item => (
          <div key={item.id} className="flex border-b pb-4 mb-4">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-24 h-24 object-cover mr-4"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p>{item.description}</p>
              <p className="text-lg font-bold">${item.price}</p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="bg-gray-300 text-gray-700 py-1 px-2 rounded mr-2"
                >
                  -
                </button>
                <span className="text-lg">{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="bg-gray-300 text-gray-700 py-1 px-2 rounded ml-2"
                >
                  +
                </button>
                <button
                  onClick={() => removeProduct(item.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-xl font-bold mt-4">
        <span>Total:</span>
        <span>${calculateTotal()}</span>
      </div>
 <Link to='/success'>
 <button className="bg-black text-white py-2 px-4 rounded mt-4 hover:bg-gray-500">
       Checkout
      </button>
 </Link>

 
    </div>
  );
};

export default CheckoutPage;
